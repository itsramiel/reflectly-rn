import React from "react";
import { CENTER, CIRCLE_DIAMETER, CIRCLE_RADIUS, CIRCLE_SIZE, ColorType, MARGIN } from "../constants";
import { Circle, Group, interpolate, LinearGradient, SkiaValue, useComputedValue, vec } from "@shopify/react-native-skia";

interface ColorProps {
  color: ColorType;
  skTranslationX: SkiaValue<number>;
  index: number;
}

const Color: React.FC<ColorProps> = ({ color, skTranslationX, index }) => {
  const cx = CENTER.x + index * (CIRCLE_DIAMETER + 2 * MARGIN);
  const cy = CENTER.y;
  const r = CIRCLE_RADIUS;

  const angle = useComputedValue(() => {
    return interpolate(
      skTranslationX.current,
      [-(index + 1) * CIRCLE_SIZE, -index * CIRCLE_SIZE, -(index - 1) * CIRCLE_SIZE],
      [0, Math.PI / 2, Math.PI]
    );
  }, [skTranslationX]);

  const transform = useComputedValue(() => {
    return [{ translateX: skTranslationX.current }, { translateY: 100 * Math.cos(angle.current) }];
  }, [angle, skTranslationX]);

  const radius = useComputedValue(() => {
    return 0.8 * CIRCLE_RADIUS + 0.2 * CIRCLE_RADIUS * Math.sin(angle.current);
  }, [angle]);

  return (
    <Group transform={transform}>
      <Circle cx={cx} cy={cy} r={radius}>
        <LinearGradient start={vec(cx, cy - r)} end={vec(cx, cy + r)} colors={[color.start, color.end]} />
      </Circle>
      <Circle cx={cx} cy={cy} r={radius} style="stroke" color={"white"} strokeWidth={r * 0.1} />
    </Group>
  );
};

export default Color;
