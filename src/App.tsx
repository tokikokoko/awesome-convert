import React, { useState, useEffect } from "react";
import "./App.css";
import * as styles from "./styles.css";
import init, { b64encode, b64decode } from "./b64";

const encodeB64 = (text: string) => b64encode(text);
const decodeB64 = (text: string) => b64decode(text);

const MODE = {
  PtoB64: "PtoB64",
  B64toP: "B64toP",
} as const;
type MODE = typeof MODE[keyof typeof MODE];

function App() {
  const [inputText, setInputText] = useState("");
  const [returnText, setReturnText] = useState("");
  const [mode, setMode] = useState<MODE>(MODE.PtoB64);
  const [isSuccess, setIsSuccses] = useState(true);

  const handleMode = (m: MODE) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      console.debug("click", m);
      setMode(m);
      convertText(m, inputText);
      event.preventDefault();
    };
  };

  useEffect(() => {
    init();
  }, []);

  const convertText = (m: MODE, t: string) => {
    try {
      switch (m) {
        case MODE.PtoB64:
          setReturnText(encodeB64(t));
          break;
        case MODE.B64toP:
          setReturnText(decodeB64(t));
          break;
      }
      setIsSuccses(true);
    } catch (e) {
      console.error(e);
      setIsSuccses(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const isCurrentMode = (m: MODE) => {
    return m === mode;
  };

  return (
    <div className="App">
      <button
        onClick={handleMode(MODE.PtoB64)}
        className={
          isCurrentMode(MODE.PtoB64) ? styles.selectedButton : undefined
        }
      >
        Plain text to Base64
      </button>
      <button
        onClick={handleMode(MODE.B64toP)}
        className={
          isCurrentMode(MODE.B64toP) ? styles.selectedButton : undefined
        }
      >
        Base64 to Plain text
      </button>
      <div className={styles.formContainer}>
        <div className={styles.formChildContainer}>
          <label>
            Input some text
            <br />
            <input
              type="textarea"
              className={styles.textarea}
              value={inputText}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className={styles.formChildContainer}>
          <label>
            Result
            <br />
            <input
              disabled
              type="textarea"
              className={isSuccess ? styles.textarea : styles.errorTextarea}
              value={returnText}
            ></input>
          </label>
        </div>
      </div>
      <button onClick={handleCopyButton}>Copy</button>
      <button onClick={handleUseResultButton}>Use result</button>
    </div>
  );
}

export default App;
