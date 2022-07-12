import React from "react";
import { CENTER, CIRCLE_DIAMETER, CIRCLE_RADIUS, ColorType, MARGIN, SCREEN_WIDTH } from "../constants";
import { Circle, Group, LinearGradient, SkiaValue, useComputedValue, vec } from "@shopify/react-native-skia";

interface ColorProps {
  color: ColorType;
  skTranslationX: SkiaValue<number>;
  index: number;
}

const Color: React.FC<ColorProps> = ({ color, skTranslationX, index }) => {
  const cx = CENTER.x + index * (CIRCLE_DIAMETER + 2 * MARGIN);
  const cy = CENTER.y;
  const r = CIRCLE_RADIUS;

  const transform = useComputedValue(() => {
    return [{ translateX: skTranslationX.current }];
  }, [skTranslationX]);
  return (
    <Group transform={transform}>
      <Circle cx={cx} cy={cy} r={r}>
        <LinearGradient start={vec(cx, cy - r)} end={vec(cx, cy + r)} colors={[color.start, color.end]} />
      </Circle>
      <Circle cx={cx} cy={cy} r={r} style="stroke" color={"white"} strokeWidth={r * 0.1} />
    </Group>
  );
};

export default Color;
