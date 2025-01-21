import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="gerador" options={{ title: "Gerador de NPCs" }}></Stack.Screen>
    <Stack.Screen name="npcs" options={{ title: "Lista de NPCs" }}></Stack.Screen>
</Stack>;
}