import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/minha-foto.jpg")}
          style={styles.avatar}
        />

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

      {/* PROJETOS */}
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
              remoção de quantidades de itens e cálculo automático de valor total e descontos com base se o cliente é cadastrado como Médico da Clínica.
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
    padding: 18,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 20,
    alignItems: "center",
    elevation: 4,
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#4f46e5",
    marginBottom: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4f46e5",
    textAlign: "center",
    marginBottom: 10,
  },

  bio: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
    lineHeight: 22,
  },

  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom: 20,
  },

  skillItem: {
    backgroundColor: "#e0e7ff",
    color: "#4338ca",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    fontSize: 14,
  },

  cta: {
    backgroundColor: "#4f46e5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },

  ctaText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  projects: {
    marginTop: 35,
  },

  projectsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff9a03",
    marginBottom: 15,
    textAlign: "center",
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
    lineHeight: 22,
  },
});
