import React, { createContext, useState } from "react";

const isDeviceLightTheme =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

export const LightThemeContext = createContext(isDeviceLightTheme);

function Contexts({ children }) {
  const [lightTheme, setLightTheme] = useState(isDeviceLightTheme);

  return (
    <LightThemeContext.Provider value={{ lightTheme, setLightTheme }}>
      {children}
    </LightThemeContext.Provider>
  );
}

export default Contexts;
