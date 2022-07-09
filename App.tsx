import { Canvas, Circle, Group, useComputedValue, useDerivedValue, useSharedValueEffect, useValue } from "@shopify/react-native-skia";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { CENTER, SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants";

const CIRCLE_RADIUS = SCREEN_WIDTH / 4;

export default function App() {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const translationXsK = useValue(0);
  const translationYsK = useValue(0);

  useSharedValueEffect(() => {
    translationXsK.current = translationX.value;
  }, translationX);

  useSharedValueEffect(() => {
    translationYsK.current = translationY.value;
  }, translationY);

  const transform = useComputedValue(() => {
    return [{ translateX: translationXsK.current }, { translateY: translationYsK.current }];
  }, [translationXsK, translationYsK]);

  const rStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      left: SCREEN_WIDTH / 2 - CIRCLE_RADIUS,
      top: SCREEN_HEIGHT / 2 - CIRCLE_RADIUS,
      width: CIRCLE_RADIUS * 2,
      height: CIRCLE_RADIUS * 2,
      borderRadius: CIRCLE_RADIUS,
      transform: [{ translateX: translationX.value }, { translateY: translationY.value }],
    };
  }, []);

  const gesture = Gesture.Pan().onChange((e) => {
    translationX.value += e.changeX;
    translationY.value += e.changeY;
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <Canvas style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
        <Group transform={transform}>
          <Circle cx={CENTER.x} cy={CENTER.y} r={CIRCLE_RADIUS} color="red" opacity={0.5} />
        </Group>
      </Canvas>
      <GestureDetector gesture={gesture}>
        <Animated.View style={rStyle} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: StatusBar.currentHeight,
  },
});
