import React, { useContext } from "react";
import { Button, Subtitle2, Switch } from "ui-neumorphism";
import { LightThemeContext } from "../contexts/Contexts";
import styles from "./DarkModeBtn.module.css";

function DarkModeBtn(props) {
  const { lightTheme, setLightTheme } = useContext(LightThemeContext);

  const toggleTheme = e => {
    setLightTheme(!e.target.checked);
  };

  return (
    <div className={styles.darkModeBtnWrapper}>
      <Subtitle2 dark={!lightTheme}>Dark Mode</Subtitle2>
      <Switch dark={!lightTheme} checked={!lightTheme} onClick={toggleTheme} />
    </div>
  );
}

export default DarkModeBtn;
