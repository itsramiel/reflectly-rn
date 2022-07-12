import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Circle, interpolate, SkiaValue, useComputedValue } from "@shopify/react-native-skia";
import { CENTER, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";

interface ForegroundProps {
  progress: SkiaValue<number>;
}

const Foreground: React.FC<ForegroundProps> = ({ progress }) => {
  const radius = useComputedValue(() => {
    return interpolate(progress.current, [0, 1], [0, Math.max(SCREEN_WIDTH, SCREEN_HEIGHT)]);
  }, [progress]);

  return <Circle cx={CENTER.x} cy={CENTER.y} r={radius} color="white" />;
};

export default Foreground;

const styles = StyleSheet.create({});
