import React, { useState, useEffect } from "react";
import init from "./b64";
import { Mode, encodeB64, decodeB64 } from "./convert";
import ModeButton from "./ModeButton";
import { Button } from "./Common";
import * as styles from "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [returnText, setReturnText] = useState("");
  const [mode, setMode] = useState<Mode>(Mode.PtoB64);
  const [isSuccess, setIsSuccses] = useState(true);

  const handleMode = (m: Mode) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      setMode(m);
      convertText(m, inputText);
      event.preventDefault();
    };
  };

  useEffect(() => {
    init();
  }, []);

  const convertText = (m: Mode, t: string) => {
    try {
      switch (m) {
        case Mode.PtoB64:
          setReturnText(encodeB64(t));
          break;
        case Mode.B64toP:
          setReturnText(decodeB64(t));
          break;
      }
      setIsSuccses(true);
    } catch (e) {
      console.error(e);
      setIsSuccses(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    convertText(mode, event.target.value);
    event.preventDefault();
  };

  const handleCopyButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(returnText);
    event.preventDefault();
  };

  const handleUseResultButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setInputText(returnText);
    setReturnText("");
    event.preventDefault();
  };

  return (
    <div className={`App ${styles.appContainer}`}>
      <div className={styles.modesContainer}>
        <ModeButton
          onClick={handleMode(Mode.PtoB64)}
          mode={Mode.PtoB64}
          currentMode={mode}
        >
          Base64 to Plain text
        </ModeButton>
        <ModeButton
          onClick={handleMode(Mode.B64toP)}
          mode={Mode.B64toP}
          currentMode={mode}
        >
          Base64 to Plain text
        </ModeButton>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formChildContainer}>
          <label className={styles.formLabel}>Input some text</label>
          <textarea
            className={styles.textarea}
            value={inputText}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formChildContainer}>
          <label className={styles.formLabel}>Result</label>
          <textarea
            disabled
            className={isSuccess ? styles.textarea : styles.errorTextarea}
            value={returnText}
          />
        </div>
      </div>
      <div className={styles.utilsContainer}>
        <Button onClick={handleCopyButton}>Copy</Button>
        <Button onClick={handleUseResultButton}>Use result</Button>
      </div>
    </div>
  );
}

export default App;
