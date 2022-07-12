import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, LinearGradient, Rect, SkiaValue, vec } from "@shopify/react-native-skia";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";

interface BackgroundProps {
  colors: SkiaValue<Color[]>;
}

const Background: React.FC<BackgroundProps> = ({ colors }) => {
  return (
    <Rect x={0} y={0} width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
      <LinearGradient start={vec(SCREEN_WIDTH / 2, 0)} end={vec(SCREEN_WIDTH / 2, SCREEN_HEIGHT)} colors={colors} />
    </Rect>
  );
};

export default Background;

const styles = StyleSheet.create({});
