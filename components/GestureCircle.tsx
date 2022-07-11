import React from "react";
import { CENTER, CIRCLE_DIAMETER, CIRCLE_RADIUS, ColorType, MARGIN, SCREEN_WIDTH } from "../constants";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

interface GestureCircleProps {
  index: number;
  translationX: Animated.SharedValue<number>;
}

const GestureCircle: React.FC<GestureCircleProps> = ({ index, translationX }) => {
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
      backgroundColor: "red",
      transform: [{ translateX: translationX.value }],
    };
  }, []);
  return <Animated.View style={rStyle} />;
};

export default GestureCircle;
