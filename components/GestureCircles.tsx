import React from "react";
import Animated from "react-native-reanimated";
import GestureCircle from "./GestureCircle";

interface GestureCirclesProps {
  length: number;
  translationX: Animated.SharedValue<number>;
}

const GestureCircles: React.FC<GestureCirclesProps> = ({ length, translationX }) => {
  return (
    <>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <GestureCircle index={index} key={index} translationX={translationX} />
        ))}
    </>
  );
};

export default GestureCircles;
