import React, { useState, useEffect } from "react";
import init from "./b64";
import { Mode, encodeB64, decodeB64 } from "./convert";
import ModeButton from "./ModeButton";
import { Button } from "./Common";
import * as styles from "./App.css";

interface Message {
  message: string;
  isFadeOut: boolean;
}
const defaultMessage: Message = {
  message: "",
  isFadeOut: false,
};

const MessageBox = (props: {
  level?: string;
  last: Date;
  message: Message;
}) => {
  const [isDisplay, setIsDisplay] = useState(true);

  const cls =
    props.level === "info" ? styles.infoMessageBox : styles.errorMessageBox;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDisplay(false);
    event.preventDefault();
  };

  useEffect(() => {
    let timer: number | undefined;
    if (props.message.message !== "") {
      setIsDisplay(true);
      if (props.message.isFadeOut) {
        timer = setTimeout(() => setIsDisplay(false), 2 * 1000);
      }
    } else {
      setIsDisplay(false);
    }
    return () => clearTimeout(timer);
  }, [props.last]);

  return (
    <div>
      {isDisplay ? (
        <div className={cls} onClick={handleClick}>
          {props.message.message}
        </div>
      ) : null}
    </div>
  );
};

function App() {
  const [message, setMessage] = useState<Message>({
    message: "",
    isFadeOut: false,
  });
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
    setMessage(defaultMessage);
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
    } catch (e: any) {
      console.error(e);
      setMessage({ message: e.toString(), isFadeOut: false });
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
    setMessage({ message: "Copied to clipboard", isFadeOut: true });
    event.preventDefault();
  };

  const handleUseResultButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setInputText(returnText);
    setReturnText("");
    event.preventDefault();
  };

  const isEmpty = () => returnText === "";

  return (
    <div className={`App ${styles.appContainer}`}>
      <div className={styles.messageContainer}>
        <MessageBox
          level={isSuccess ? "info" : "error"}
          message={message}
          last={new Date()}
        />
      </div>
      <h1 className={styles.title}>Convert some text</h1>
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
            value={isSuccess ? returnText : "Convert error"}
          />
        </div>
      </div>
      <div className={styles.modesContainer}>
        <ModeButton
          onClick={handleMode(Mode.PtoB64)}
          mode={Mode.PtoB64}
          currentMode={mode}
          className={styles.buttons}
        >
          Base64 to Plain text
        </ModeButton>
        <ModeButton
          onClick={handleMode(Mode.B64toP)}
          mode={Mode.B64toP}
          currentMode={mode}
          className={styles.buttons}
        >
          Base64 to Plain text
        </ModeButton>
      </div>
      <div className={styles.utilsContainer}>
        <Button
          disabled={!isSuccess || isEmpty()}
          onClick={handleCopyButton}
          className={styles.buttons}
        >
          Copy
        </Button>
        <Button
          disabled={!isSuccess || isEmpty()}
          onClick={handleUseResultButton}
          className={styles.buttons}
        >
          Use result
        </Button>
      </div>
    </div>
  );
}

export default App;
