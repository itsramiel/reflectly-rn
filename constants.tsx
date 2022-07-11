import { Dimensions, StatusBar } from "react-native";

const { height, width } = Dimensions.get("window");

export const SCREEN_HEIGHT = height - (StatusBar.currentHeight ?? 0);
export const SCREEN_WIDTH = width;

export const CENTER = { x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 };

export const COLORS = [
  {
    id: 0,
    start: "#00E0D3",
    end: "#00B4D4",
  },
  {
    id: 1,
    start: "#00B4D4",
    end: "#409CAE",
  },
  {
    id: 2,
    start: "#66D8A4",
    end: "#409CAE",
  },
  {
    id: 3,
    start: "#FC727B",
    end: "#F468A0",
  },
  {
    id: 4,
    start: "#8289EA",
    end: "#7A6FC1",
  },
  {
    id: 5,
    start: "#FEC7A3",
    end: "#FD9F9C",
  },
];
