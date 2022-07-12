import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { interpolate, runOnJS, useAnimatedStyle } from "react-native-reanimated";
import { CENTER, CIRCLE_DIAMETER, CIRCLE_RADIUS, CIRCLE_SIZE, MARGIN } from "../constants";

interface GestureCircleProps {
  index: number;
  translationX: Animated.SharedValue<number>;
  onPress: (x: number) => void;
}

const GestureCircle: React.FC<GestureCircleProps> = ({ index, translationX, onPress }) => {
  const left = CENTER.x - CIRCLE_RADIUS + index * (CIRCLE_DIAMETER + 2 * MARGIN);
  const top = CENTER.y - CIRCLE_RADIUS;

  const rStyle = useAnimatedStyle(() => {
    const angle = interpolate(
      translationX.value,
      [-(index + 1) * CIRCLE_SIZE, -index * CIRCLE_SIZE, -(index - 1) * CIRCLE_SIZE],
      [0, Math.PI / 2, Math.PI]
    );
    return {
      position: "absolute",
      left: left,
      top: top,
      width: CIRCLE_DIAMETER,
      height: CIRCLE_DIAMETER,
      borderRadius: CIRCLE_RADIUS,
      transform: [{ translateX: translationX.value }, { translateY: 100 * Math.cos(angle) }, { scale: 0.8 + 0.2 * Math.sin(angle) }],
    };
  }, []);

  const gesture = Gesture.Tap().onStart(() => runOnJS(onPress)(index));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={rStyle} />
    </GestureDetector>
  );
};

export default GestureCircle;
