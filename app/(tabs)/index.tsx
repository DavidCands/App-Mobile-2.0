import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.left}>
          <Image
            source={require("../assets/images/minha-foto.jpg")}
            style={styles.avatar}
          />
        </View>

        <View style={styles.right}>
          <Text style={styles.title}>David Cândido de Souza</Text>

          <Text style={styles.bio}>
            Sou um estudante do curso de Ciência da Computação da Universidade Católica,
            gosto de programar e estou sempre em busca de aprender algo novo. Gosto de
            transformar ideias em projetos práticos e explorar diferentes áreas da computação.
            Segue abaixo algumas das linguagens e tecnologias que já utilizei:
          </Text>

          <View style={styles.skills}>
            {["C", "JavaScript", "React", "Next.js", "CSS", "Java", "Python"].map((skill) => (
              <Text key={skill} style={styles.skillItem}>
                {skill}
              </Text>
            ))}
          </View>

          <Link href="/hangman" asChild>
            <TouchableOpacity style={styles.cta}>
              <Text style={styles.ctaText}>Ir para o Jogo da Forca</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View style={styles.projects}>
        <Text style={styles.projectsTitle}>Projetos</Text>

        <View style={styles.projectGrid}>
          <View style={styles.project}>
            <Text style={styles.projectTitle}>Sistema de Clínica (Java)</Text>
            <Text style={styles.projectText}>
              Gerenciamento de consultas e usuários, com lógica para agendamentos e descontos no Projeto do Restaurante.
            </Text>
          </View>

          <View style={styles.project}>
            <Text style={styles.projectTitle}>Pedidos para Restaurante (Java)</Text>
            <Text style={styles.projectText}>
              Aplicação de gerenciamento para controle de pedidos, escolha da mesa,
              remoção de quantidades de itens e cálculo automático de valor total
              e descontos com base se o cliente é cadastrado como um Médico da Clínica.
            </Text>
          </View>
        </View>
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

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    gap: 20,
    elevation: 4,
  },

  left: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#4f46e5",
  },

  right: {
    flex: 2,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4f46e5",
    marginBottom: 10,
  },

  bio: {
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
  },

  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  skillItem: {
    backgroundColor: "#e0e7ff",
    color: "#4338ca",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize: 14,
  },

  cta: {
    marginTop: 20,
    backgroundColor: "#4f46e5",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  ctaText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  projects: {
    marginTop: 30,
  },

  projectsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff9a03",
    marginBottom: 15,
  },

  projectGrid: {
    gap: 20,
  },

  project: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 10,
    elevation: 3,
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4f46e5",
    marginBottom: 8,
  },

  projectText: {
    color: "#333",
    fontSize: 15,
  },
});
