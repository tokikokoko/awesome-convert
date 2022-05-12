import React from "react";
import * as styles from "./Common.css";

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const cls = props.className ? props.className : "";
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${styles.defaultButton} ${cls}`}
    >
      {props.children}
    </button>
  );
};
