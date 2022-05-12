import React from "react";
import * as styles from "./ModeButton.css";
import * as commonStyles from "./Common.css";
import { Button } from "./Common";

import { Mode } from "./convert";

export interface ModeButtonProps {
  mode: Mode;
  currentMode: Mode;
}

export const ModeButton = (
  props: ModeButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const isCurrentMode = () => {
    return props.currentMode === props.mode;
  };

  return (
    <Button
      onClick={props.onClick}
      className={
        isCurrentMode() ? styles.selectedButton : commonStyles.defaultButton
      }
    >
      {props.children}
    </Button>
  );
};

export default ModeButton;
