import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4f46e5",
        tabBarInactiveTintColor: "#4338ca",
        tabBarStyle: {
          backgroundColor: "#e0e7ff",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 14,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="projetos"
        options={{
          title: "Projetos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="folder" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="experiencias/academica"
        options={{
          title: "Acadêmica",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="experiencias/profissional"
        options={{
          title: "Profissional",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="hangman"
        options={{
          title: "Jogo da Forca",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
