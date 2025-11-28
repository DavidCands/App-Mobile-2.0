import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Projetos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>Sistema de Clínica (Java)</Text>
        <Text style={styles.projectText}>
          Sistema completo com gerenciamento de consultas, usuários, médicos e
          lógica para agendamentos e descontos específicos.
        </Text>
      </View>

      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>Pedidos para Restaurante (Java)</Text>
        <Text style={styles.projectText}>
          Aplicação para registrar pedidos, mesas e cálculo inteligente de
          descontos apenas para médicos cadastrados.
        </Text>
      </View>

      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>Jogo da Forca (React Native)</Text>
        <Text style={styles.projectText}>
          Jogo funcional criado no Expo Router com estilização moderna,
          animações simples e estados reativos, na qual explora os diversos tipos de Pokémon para adivinhação.
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

  projectCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    elevation: 4,
    marginBottom: 20,
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff9a03",
    marginBottom: 8,
  },

  projectText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 20,
  },
});
