import { StyleSheet } from "react-native";
import React from "react";
import { CENTER, ColorType, SCREEN_WIDTH } from "../constants";
import { Circle, Group, SkiaValue, useComputedValue } from "@shopify/react-native-skia";

interface ColorProps {
  color: ColorType;
  skTranslationX: SkiaValue<number>;
  index: number;
}

const MARGIN = 15;
const VISIBLE_CIRCLES_NUM = 3;
const CIRCLE_DIAMETER = (SCREEN_WIDTH - 6 * MARGIN) / VISIBLE_CIRCLES_NUM;
const CIRCLE_RADIUS = CIRCLE_DIAMETER / 2;

const Color: React.FC<ColorProps> = ({ color, skTranslationX, index }) => {
  const cx = CENTER.x + index * (CIRCLE_DIAMETER + 2 * MARGIN);
  const cy = CENTER.y;
  const r = CIRCLE_RADIUS;

  const transform = useComputedValue(() => {
    return [{ translateX: skTranslationX.current }];
  }, [skTranslationX]);
  return (
    <Group transform={transform}>
      <Circle cx={cx} cy={cy} r={r} color={color.start} />
    </Group>
  );
};

export default Color;
