import { style } from "@vanilla-extract/css";
import * as c from "./Common.css";

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  color: c.c.white,
});

export const title = style({
  fontSize: c.fs.huge,
  margin: "10px",
});

export const messageContainer = style({
  margin: "10px",
});

export const messageBox = style({
  padding: "10px",
  border: "solid",
  borderRadius: "5px",
  position: "absolute",
  top: "1.5em",
  width: "90%",
  opacity: "98%",
  color: c.c.black,
});

export const infoMessageBox = style([
  messageBox,
  {
    backgroundColor: c.c.info,
    borderColor: c.c.info,
  },
]);

export const errorMessageBox = style([
  messageBox,
  {
    backgroundColor: c.c.error,
    borderColor: c.c.error,
  },
]);

export const modesContainer = style({
  margin: "5px 0px 0px 20px",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const formContainer = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const utilsContainer = style({
  margin: "5px 0px 0px 20px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
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
    fontSize: c.fs.normal,
    ":disabled": {
      color: c.c.black,
      backgroundColor: c.c.white,
    },
  },
]);

export const errorTextarea = style([
  textarea,
  {
    color: c.c.white,
    background: c.c.error,
    textAlign: "center",
    fontSize: c.fs.large,
  },
]);

export const buttons = style({
  margin: "5px 5px 0px 0px",
});
