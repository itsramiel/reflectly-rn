import React from "react";
import { CENTER, CIRCLE_DIAMETER, CIRCLE_RADIUS, ColorType, MARGIN, SCREEN_WIDTH } from "../constants";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface GestureCircleProps {
  index: number;
  translationX: Animated.SharedValue<number>;
  onPress: (x: number) => void;
}

const GestureCircle: React.FC<GestureCircleProps> = ({ index, translationX, onPress }) => {
  const left = CENTER.x - CIRCLE_RADIUS + index * (CIRCLE_DIAMETER + 2 * MARGIN);
  const top = CENTER.y - CIRCLE_RADIUS;

  const rStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      left: left,
      top: top,
      width: CIRCLE_DIAMETER,
      height: CIRCLE_DIAMETER,
      borderRadius: CIRCLE_RADIUS,
      transform: [{ translateX: translationX.value }],
    };
  }, []);

  const gesture = Gesture.Tap().onStart(() => onPress(index));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={rStyle} />
    </GestureDetector>
  );
};

export default GestureCircle;
