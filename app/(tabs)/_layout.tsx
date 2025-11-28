import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: "Sobre",
        }}
      />

      <Tabs.Screen
        name="projetos"
        options={{
          title: "Projetos",
        }}
      />

      <Tabs.Screen
        name="experiencias/academica"
        options={{
          title: "Acadêmica",
        }}
      />

      <Tabs.Screen
        name="experiencias/profissional"
        options={{
          title: "Profissional",
        }}
      />

      <Tabs.Screen
        name="hangman"
        options={{
          title: "Jogo da Forca",
        }}
      />
    </Tabs>
  );
}
