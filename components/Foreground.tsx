import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Circle, Color, interpolate, LinearGradient, SkiaValue, useComputedValue, vec } from "@shopify/react-native-skia";
import { CENTER, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";

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
    </Circle>
  );
};

export default Foreground;

const styles = StyleSheet.create({});