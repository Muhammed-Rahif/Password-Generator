import React, { useContext } from "react";
import "./App.css";
import PasswordGenCard from "./components/PasswordGenCard";
import { Card } from "ui-neumorphism";
import { LightThemeContext } from "./contexts/Contexts";

function App() {
  const { lightTheme } = useContext(LightThemeContext);

  return (
    <Card dark={!lightTheme} className="App">
      <PasswordGenCard />
    </Card>
  );
}

export default App;
