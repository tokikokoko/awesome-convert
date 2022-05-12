import { style } from "@vanilla-extract/css";

export const fontSizes = {
  large: "1.5em",
  normal: "1em",
  small: "0.8em",
};
export const fs = fontSizes;

export const colors = {
  black: "#333333",
  white: "#dddddd",
};
export const c = colors;

export const defaultButton = style({
  padding: "10px 20px 10px 20px",
  borderRadius: "5px",
  fontSize: "1em",
});
