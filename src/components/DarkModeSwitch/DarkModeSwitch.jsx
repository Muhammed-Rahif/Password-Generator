import React, { useContext } from "react";
import { Subtitle2, Switch } from "ui-neumorphism";
import { LightThemeContext } from "../../contexts/Contexts";
import styles from "./DarkModeSwitch.module.css";

function DarkModeSwitch(props) {
  const { lightTheme, setLightTheme } = useContext(LightThemeContext);

  const toggleTheme = darkMode => {
    setLightTheme(!darkMode);
  };

  return (
    <div className={styles.darkModeBtnWrapper}>
      <Subtitle2 dark={!lightTheme}>Dark Mode</Subtitle2>
      <Switch
        dark={!lightTheme}
        checked={!lightTheme}
        onClick={e => toggleTheme(e.target.checked)}
      />
    </div>
  );
}

export default DarkModeSwitch;
