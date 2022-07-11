import React from "react";
import { StyleSheet } from "react-native";
import { Canvas, Circle } from "@shopify/react-native-skia";
import { CENTER, ColorType, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";

interface ColorSelectionProps {
  colors: ColorType[];
}

const MARGIN = 15;
const VISIBLE_CIRCLES_NUM = 3;
const CIRCLE_DIAMETER = (SCREEN_WIDTH - 6 * MARGIN) / VISIBLE_CIRCLES_NUM;
const CIRCLE_RADIUS = CIRCLE_DIAMETER / 2;

const ColorSelection: React.FC<ColorSelectionProps> = ({ colors }) => {
  return (
    <Canvas style={styles.canvas}>
      {colors.map((color, index) => {
        const cx = CENTER.x + index * (CIRCLE_DIAMETER + 2 * MARGIN);
        const cy = CENTER.y;
        const r = CIRCLE_RADIUS;
        return <Circle cx={cx} cy={cy} r={r} color={color.start} key={index} />;
      })}
    </Canvas>
  );
};

export default ColorSelection;

const styles = StyleSheet.create({
  canvas: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
});
