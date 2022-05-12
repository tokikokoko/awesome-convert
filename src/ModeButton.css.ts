import { style } from "@vanilla-extract/css";
import * as c from "./Common.css";

export const selectedButton = style([
  c.defaultButton,
  {
    color: c.c.black,
    background: c.c.lightGreen,
  },
]);
