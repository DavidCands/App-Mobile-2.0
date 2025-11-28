import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

export default function ExperienciaAcademica() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>

      <View style={styles.card}>
        <Text style={styles.infoText}>
          Durante minha jornada no curso de Ciência da Computação, tive a oportunidade
          de participar de diversos projetos que fortaleceram minhas habilidades práticas
          e meu raciocínio lógico.
        </Text>

        <Text style={styles.infoText}>
          Entre as experiências mais marcantes estão os projetos desenvolvidos na cadeira
          de Programação Orientada a Objetos (POO), onde criei sistemas completos como:
        </Text>

        <Text style={styles.listItem}>• Sistema de gerenciamento de restaurante</Text>
        <Text style={styles.listItem}>• Sistema de gerenciamento de clínica médica</Text>
        <Text style={styles.listItem}>• Sistema de gerenciamento de eventos em geral</Text>

        <Text style={styles.infoText}>
          Além disso, participei do desenvolvimento de um aplicativo web em equipe,
          com o objetivo de facilitar o atendimento dos pacientes em diversos hospitais
          da região. Esse projeto foi uma excelente oportunidade para aprender sobre
          colaboração, arquitetura de software e construção de aplicações escaláveis.
        </Text>

        <Text style={styles.infoText}>
          Atualmente, estou trazendo esse mesmo projeto para o ambiente mobile,
          desenvolvendo uma versão em React Native com Expo. Tem sido uma experiência
          extremamente enriquecedora e importante para meu crescimento profissional.
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
    gap: 14,
  },

  infoText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },

  listItem: {
    fontSize: 16,
    color: "#4338ca",
    lineHeight: 22,
    paddingLeft: 10,
  },
});
