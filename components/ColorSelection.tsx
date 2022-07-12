import React from "react";
import Color from "./Color";
import { ColorType } from "../constants";
import Animated from "react-native-reanimated";
import { useSharedValueEffect, useValue } from "@shopify/react-native-skia";

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
