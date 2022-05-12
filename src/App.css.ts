import { style } from "@vanilla-extract/css";
import * as c from "./Common.css";

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  color: c.c.white,
});

export const modesContainer = style({
  margin: "20px",
});

export const formContainer = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const utilsContainer = style({
  margin: "10px",
});

export const formChildContainer = style({
  display: "flex",
  flex: "1 1 300px",
  flexDirection: "column",
  margin: "10px",
});

export const formLabel = style({
  flexGrow: "1",
  fontSize: c.fs.large,
});

export const textarea = style([
  {
    flexGrow: "3",
    height: "150px",
    margin: "10px",
    color: c.c.black,
    backgroundColor: c.c.white,
  },
]);

export const errorTextarea = style([
  textarea,
  {
    background: "Red",
  },
]);
