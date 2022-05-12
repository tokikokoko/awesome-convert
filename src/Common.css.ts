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
  info: "rgb(60, 99, 60)",
  error: "rgb(99, 60, 60)",
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
