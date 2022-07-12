import React from "react";
import { StyleSheet } from "react-native";
import { Canvas, Circle, Group, useSharedValueEffect, useValue } from "@shopify/react-native-skia";
import { CENTER, ColorType, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";
import Animated from "react-native-reanimated";
import Color from "./Color";

interface ColorSelectionProps {
  colors: ColorType[];
  translationX: Animated.SharedValue<number>;
}

const ColorSelection: React.FC<ColorSelectionProps> = ({ colors, translationX }) => {
  const skTranslationX = useValue(0);
  useSharedValueEffect(() => {
    skTranslationX.current = translationX.value;
  }, translationX);

  return (
    <>
      {colors.map((color, index) => {
        return <Color color={color} skTranslationX={skTranslationX} key={index} index={index} />;
      })}
    </>
  );
};

export default ColorSelection;
