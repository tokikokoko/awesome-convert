import { style } from "@vanilla-extract/css";

export const fontSizes = {
  huge: "3em",
  large: "1.5em",
  normal: "1em",
  small: "0.8em",
};
export const fs = fontSizes;

export const colors = {
  black: "rgb(33, 33, 33)",
  white: "rgb(200, 200, 200)",
  gray: "rgb(150, 150, 150)",
  lightGreen: "rgb(140, 200, 140)",
  // info: "rgb(60, 99, 60)",
  info: "rgb(140, 200, 140)",
  error: "rgb(200, 140, 140)",
};
export const c = colors;

export const defaultButton = style({
  padding: "7px 10px 7px 10px",
  borderRadius: "5px",
  fontSize: "1em",
  color: c.black,
  textDecoration: "none",
  ":disabled": {
    background: c.gray,
    color: c.black,
  },
});
