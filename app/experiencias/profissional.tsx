import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

export default function ExperienciaProfissional() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      <View style={styles.card}>
        <Text style={styles.infoText}>
          No momento, ainda não possuo experiência profissional formal na área.
        </Text>

        <Text style={styles.infoText}>
          Porém, estou constantemente estudando, praticando projetos reais e
          expandindo minhas habilidades em programação, desenvolvimento móvel,
          desenvolvimento web e estruturas de software.
        </Text>

        <Text style={styles.infoText}>
          Meu foco atual é continuar aprendendo tecnologias modernas e criar projetos
          cada vez mais completos para construir uma base sólida para futuras oportunidades.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4f46e5",
    marginBottom: 20,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    gap: 12,
  },

  infoText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
});
