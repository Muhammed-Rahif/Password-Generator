import React, { useContext } from "react";
import "./App.css";
import PasswordGenCard from "./components/PasswordGenCard/PasswordGenCard";
import { Card } from "ui-neumorphism";
import { LightThemeContext } from "./contexts/Contexts";
import DarkModeBtn from "./components/DarkModeSwitch/DarkModeSwitch";

function App() {
  const { lightTheme } = useContext(LightThemeContext);

  return (
    <Card dark={!lightTheme} className="App">
      <PasswordGenCard />
      <DarkModeBtn />
    </Card>
  );
}

export default App;
