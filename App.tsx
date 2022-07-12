import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ColorSelection from "./components/ColorSelection";
import { CIRCLE_DIAMETER, COLORS, MARGIN } from "./constants";
import { useSharedValue, withSpring } from "react-native-reanimated";
import GestureCircles from "./components/GestureCircles";
import { useCallback } from "react";
import { clamp, snapPoint } from "./utils";

const snapPoints = COLORS.map((color, index) => -index * (CIRCLE_DIAMETER + 2 * MARGIN));

export default function App() {
  const translationX = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onChange((e) => {
      const translation = translationX.value + e.changeX;
      translationX.value = clamp(translation, snapPoints[snapPoints.length - 1], snapPoints[0]);
    })
    .onEnd(({ velocityX }) => {
      translationX.value = withSpring(snapPoint(translationX.value, velocityX * 0.5, snapPoints));
    });

  const onCirclePressed = useCallback((index: number) => {
    "worklet";
    translationX.value = withSpring(snapPoints[index]);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ExpoStatusBar style="light" />
      <GestureDetector gesture={gesture}>
        <ColorSelection colors={COLORS} translationX={translationX} />
      </GestureDetector>
      <GestureCircles length={COLORS.length} translationX={translationX} onCirclePress={onCirclePressed} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
