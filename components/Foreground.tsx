import React from "react";
import { CENTER, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";
import { BlurMask, Circle, Color, interpolate, LinearGradient, SkiaValue, useComputedValue, vec } from "@shopify/react-native-skia";

interface ForegroundProps {
  progress: SkiaValue<number>;
  colors: SkiaValue<Color[]>;
}

const Foreground: React.FC<ForegroundProps> = ({ progress, colors }) => {
  const radius = useComputedValue(() => {
    return interpolate(progress.current, [0, 1], [0, Math.max(SCREEN_WIDTH, SCREEN_HEIGHT)]);
  }, [progress]);

  return (
    <Circle cx={CENTER.x} cy={CENTER.y} r={radius}>
      <LinearGradient start={vec(SCREEN_WIDTH / 2, 0)} end={vec(SCREEN_WIDTH / 2, SCREEN_HEIGHT)} colors={colors} />
      <BlurMask blur={20} style="solid" />
    </Circle>
  );
};

export default Foreground;
