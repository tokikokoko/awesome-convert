import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
    white: "#fff",
  },
  space: {
    small: "4px",
    medium: "8px",
  },
});

export const textarea = style({
  width: "300px",
  height: "300px",
  margin: "30px",
  color: "black",
});

export const errorTextarea = style([
  textarea,
  {
    background: "Red",
  },
]);

export const selectedButton = style({
  background: "Orange",
});

export const formContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export const formChildContainer = style({
  margin: "20px",
});
