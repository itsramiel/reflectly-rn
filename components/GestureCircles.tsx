import React from "react";
import Animated from "react-native-reanimated";
import GestureCircle from "./GestureCircle";

interface GestureCirclesProps {
  length: number;
  translationX: Animated.SharedValue<number>;
  onCirclePress: (x: number) => void;
}

const GestureCircles: React.FC<GestureCirclesProps> = ({ length, translationX, onCirclePress }) => {
  return (
    <>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <GestureCircle index={index} key={index} translationX={translationX} onPress={onCirclePress} />
        ))}
    </>
  );
};

export default GestureCircles;
