import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ColorSelection from "./components/ColorSelection";
import { COLORS } from "./constants";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ExpoStatusBar style="light" />
      <ColorSelection colors={COLORS} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
