import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    //main layout
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(nobuttomtab)/accountinfo"
          options={{
            headerShown: true,
            headerTitle: "",
            headerBackTitle: "Explore",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
