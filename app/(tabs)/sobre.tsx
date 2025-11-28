import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mais sobre mim</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Olá! Sou David Cândido, estudante de Ciência da Computação na
          Universidade Católica. Sou apaixonado por desenvolvimento de software,
          principalmente em Java, Python, C, React e React Native.
        </Text>

        <Text style={styles.text}>
          Atualmente trabalho em projetos acadêmicos como sistemas de gestão,
          aplicações móveis e pequenos jogos.
        </Text>

        <Text style={styles.text}>
          Meu objetivo é me tornar um bom desenvolvedor, explorando
          diferentes áreas da computação e buscando sempre novos desafios.
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
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    gap: 15,
  },

  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
});
