import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ColorSelection from "./components/ColorSelection";
import { COLORS } from "./constants";
import { useSharedValue } from "react-native-reanimated";
import GestureCircles from "./components/GestureCircles";

export default function App() {
  const translationX = useSharedValue(0);

  const gesture = Gesture.Pan().onChange((e) => (translationX.value += e.changeX));

  return (
    <GestureHandlerRootView style={styles.container}>
      <ExpoStatusBar style="light" />
      <GestureDetector gesture={gesture}>
        <ColorSelection colors={COLORS} translationX={translationX} />
      </GestureDetector>
      <GestureCircles length={COLORS.length} translationX={translationX} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
