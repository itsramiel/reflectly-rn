import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ColorSelection from "./components/ColorSelection";
import { CIRCLE_DIAMETER, COLORS, MARGIN, SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants";
import { useSharedValue, withSpring } from "react-native-reanimated";
import GestureCircles from "./components/GestureCircles";
import { useCallback } from "react";
import { clamp, snapPoint } from "./utils";
import { Canvas, Easing, runTiming, useValue, useValueEffect } from "@shopify/react-native-skia";
import Foreground from "./components/Foreground";

const snapPoints = COLORS.map((color, index) => -index * (CIRCLE_DIAMETER + 2 * MARGIN));

export default function App() {
  const translationX = useSharedValue(0);
  const progress = useValue(0);

  const gesture = Gesture.Pan()
    .onChange((e) => {
      const translation = translationX.value + e.changeX;
      translationX.value = clamp(translation, snapPoints[snapPoints.length - 1], snapPoints[0]);
    })
    .onEnd(({ velocityX }) => {
      translationX.value = withSpring(snapPoint(translationX.value, velocityX * 0.5, snapPoints));
    });

  const onCirclePressed = useCallback((index: number) => {
    translationX.value = withSpring(snapPoints[index]);
    progress.current = 0;
    runTiming(progress, 1, { easing: Easing.inOut(Easing.ease) });
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ExpoStatusBar style="light" />
      <GestureDetector gesture={gesture}>
        <Canvas style={styles.canvas}>
          <Foreground progress={progress} />
          <ColorSelection colors={COLORS} translationX={translationX} />
        </Canvas>
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
  canvas: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
