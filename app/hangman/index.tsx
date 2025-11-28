import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Svg, Line, Circle } from "react-native-svg";
import { useNavigation } from "expo-router";

const WORDS = [
  "BULBASAUR","IVYSAUR","VENUSAUR","CHARMANDER","CHARMELEON","CHARIZARD",
  "SQUIRTLE","WARTORTLE","BLASTOISE","CATERPIE","METAPOD","BUTTERFREE",
  "WEEDLE","KAKUNA","BEEDRILL","PIDGEY","PIDGEOTTO","PIDGEOT",
  "RATTATA","RATICATE","SPEAROW","FEAROW","EKANS","ARBOK","PIKACHU",
  "RAICHU","SANDSHREW","SANDSLASH","NIDORAN","NIDORINA","NIDOQUEEN",
  "NIDORINO","NIDOKING","CLEFAIRY","CLEFABLE","VULPIX","NINETALES",
  "JIGGLYPUFF","WIGGLYTUFF","ZUBAT","GOLBAT","ODDISH","GLOOM","VILEPLUME"
];

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default function HangmanPage() {
  const maxWrong = 6;
  const [word, setWord] = useState(() => pickWord());
  const [guessed, setGuessed] = useState<string[]>([]);
  const [wrong, setWrong] = useState(0);
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
  const [input, setInput] = useState("");

  const letters = word.split("");
  const display = letters.map((l) => (guessed.includes(l) ? l : "_"));
  const correctLetters = guessed.filter((l) => letters.includes(l));
  const wrongLetters = guessed.filter((l) => !letters.includes(l));

  useEffect(() => {
    if (letters.every((l) => guessed.includes(l))) {
      setStatus("won");
    } else if (wrong >= maxWrong) {
      setStatus("lost");
    }
  }, [guessed, wrong]);

  function restart() {
    setWord(pickWord());
    setGuessed([]);
    setWrong(0);
    setInput("");
    setStatus("playing");
  }

  function handleGuess(letter: string) {
    if (status !== "playing") return;

    letter = letter.toUpperCase();

    if (!/^[A-Z]$/.test(letter)) return;
    if (guessed.includes(letter)) return;

    const newGuessed = [...guessed, letter];
    setGuessed(newGuessed);

    const newWrong = newGuessed.filter((l) => !letters.includes(l)).length;
    setWrong(newWrong);
  }

    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* TÍTULO */}
      <Text style={styles.title}>JOGO DA FORCA</Text>
      <Text style={styles.hint}>Pokémons da Primeira Geração</Text>

      {/* SVG DA FORCA */}
      <View style={styles.svgContainer}>
        <Svg height="180" width="140">
          <Line x1="10" y1="170" x2="130" y2="170" stroke="#cbd5e1" strokeWidth="4" />
          <Line x1="40" y1="170" x2="40" y2="20" stroke="#cbd5e1" strokeWidth="4" />
          <Line x1="40" y1="20" x2="100" y2="20" stroke="#cbd5e1" strokeWidth="4" />
          <Line x1="100" y1="20" x2="100" y2="40" stroke="#cbd5e1" strokeWidth="4" />

          {wrong > 0 && <Circle cx="100" cy="55" r="12" stroke="#cbd5e1" strokeWidth="3" fill="none" />}
          {wrong > 1 && <Line x1="100" y1="68" x2="100" y2="110" stroke="#cbd5e1" strokeWidth="3" />}
          {wrong > 2 && <Line x1="100" y1="80" x2="80" y2="95" stroke="#cbd5e1" strokeWidth="3" />}
          {wrong > 3 && <Line x1="100" y1="80" x2="120" y2="95" stroke="#cbd5e1" strokeWidth="3" />}
          {wrong > 4 && <Line x1="100" y1="110" x2="90" y2="135" stroke="#cbd5e1" strokeWidth="3" />}
          {wrong > 5 && <Line x1="100" y1="110" x2="112" y2="135" stroke="#cbd5e1" strokeWidth="3" />}
        </Svg>
      </View>

      {/* PALAVRA */}
      <View style={styles.wordRow}>
        {display.map((c, i) => (
          <Text key={i} style={styles.wordChar}>
            {c}
          </Text>
        ))}
      </View>

      {/* STATUS */}
      <View style={styles.statusBox}>
        {status === "playing" && (
          <Text>Tentativas restantes: {maxWrong - wrong}</Text>
        )}

        {status === "won" && (
          <Text style={styles.win}>Parabéns! O Pokémon era {word}</Text>
        )}

        {status === "lost" && (
          <Text style={styles.lose}>Fim do jogo! O Pokémon era {word}</Text>
        )}
      </View>

      {/* INPUT */}
      <View style={styles.formRow}>
        <TextInput
          style={styles.input}
          value={input}
          maxLength={1}
          editable={status === "playing"}
          onChangeText={(t) => setInput(t.replace(/[^a-zA-Z]/g, ""))}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (input) handleGuess(input);
            setInput("");
          }}
        >
          <Text style={styles.btnText}>Chutar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRestart} onPress={restart}>
          <Text style={styles.btnText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      {/* TECLADO */}
      <View style={styles.keyboard}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => {
          const pressed = guessed.includes(l);
          const correct = pressed && letters.includes(l);

          return (
            <TouchableOpacity
              key={l}
              disabled={pressed || status !== "playing"}
              onPress={() => handleGuess(l)}
              style={[
                styles.key,
                pressed && correct && styles.keyCorrect,
                pressed && !correct && styles.keyWrong,
              ]}
            >
              <Text>{l}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* PAINEL DE TENTATIVAS */}
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Tentativas Anteriores</Text>
        <Text style={styles.correct}>Corretas: {correctLetters.join(", ") || "—"}</Text>
        <Text style={styles.wrong}>Erradas: {wrongLetters.join(", ") || "—"}</Text>
      </View>

      {/* REGRAS */}
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Regras</Text>
        <Text>• Você perde com {maxWrong} erros.</Text>
        <Text>• Digite uma letra ou use o teclado.</Text>
        <Text>• Reinicie para jogar novamente.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f4f4f9"
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff9a03",
  },

  hint: {
    marginTop: 4,
    marginBottom: 10,
    color: "#555",
  },

  svgContainer: {
    marginVertical: 15,
  },

  wordRow: {
    flexDirection: "row",
    marginVertical: 10,
  },

  wordChar: {
    fontSize: 28,
    marginHorizontal: 4,
    width: 22,
    textAlign: "center",
  },

  statusBox: {
    marginVertical: 10,
  },

  win: {
    color: "green",
    fontWeight: "bold",
  },

  lose: {
    color: "red",
    fontWeight: "bold",
  },

  formRow: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 15,
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    width: 50,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: "#fff",
  },

  btn: {
    backgroundColor: "#4f46e5",
    padding: 10,
    borderRadius: 6,
  },

  btnRestart: {
    backgroundColor: "#e53e3e",
    padding: 10,
    borderRadius: 6,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },

  key: {
    width: 40,
    padding: 8,
    margin: 4,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 6,
    alignItems: "center",
  },

  keyCorrect: {
    backgroundColor: "#9ee0a0",
    borderColor: "#2e7d32",
  },

  keyWrong: {
    backgroundColor: "#ff8282",
    borderColor: "#c62828",
  },

  panel: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  panelTitle: {
    fontSize: 18,
    color: "#4f46e5",
    marginBottom: 8,
    fontWeight: "bold",
  },

  correct: { color: "#51be5a" },
  wrong: { color: "#c93d3d" },
});
