import { Dimensions, StatusBar } from "react-native";

const { height, width } = Dimensions.get("window");

export const SCREEN_HEIGHT = height - (StatusBar.currentHeight ?? 0);
export const SCREEN_WIDTH = width;

export const CENTER = { x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 };
