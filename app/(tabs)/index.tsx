import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header com foto + nome */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/minha-foto.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>David Cândido</Text>
        <Text style={styles.subtitle}>Desenvolvedor • Cientista da Computação</Text>
      </View>

      {/* Sessão Sobre */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre mim</Text>
        <Text style={styles.sectionText}>
          Olá! Sou estudante de Sistemas para Internet e apaixonado por tecnologia. 
          Trabalho constantemente em projetos acadêmicos e pessoais que me ajudam 
          a evoluir como desenvolvedor. Bem-vindo ao meu portfólio mobile!
        </Text>
      </View>

      {/* Botões adicionados (incluindo o Hangman movido) */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/experiencias/academica")}
        >
          <Text style={styles.buttonText}>Experiência Acadêmica</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/experiencias/profissional")}
        >
          <Text style={styles.buttonText}>Experiência Profissional</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/projetos")}
        >
          <Text style={styles.buttonText}>Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/hangman")}
        >
          <Text style={styles.buttonText}>Jogo da Forca</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 76,
    backgroundColor: "#EFF3FF",
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F41BB",
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },

  section: {
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F41BB",
    marginBottom: 8,
  },

  sectionText: {
    fontSize: 16,
    color: "#333333ff",
    lineHeight: 22,
  },

  buttonsContainer: {
    marginTop: 10,
    gap: 12,
  },

  button: {
    backgroundColor: "#1F41BB",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
