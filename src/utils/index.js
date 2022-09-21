import { Dimensions } from "react-native";

export const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");
export const MAIN_COLOR = "#B79268";
export const BASE_URL = "https://potato-detection.herokuapp.com";
export const Action = (type, payload) => ({
  type,
  payload,
});
