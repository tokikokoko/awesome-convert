import { style } from "@vanilla-extract/css";
import { defaultButton } from "./Common.css";

export const selectedButton = style([
  defaultButton,
  {
    background: "Green",
  },
]);
