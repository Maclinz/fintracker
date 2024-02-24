import React, { useState, useEffect, useContext, createContext } from "react";
import themes from "../app/utils/themes";

export const ThemeContext = createContext();
export const ThemeContextUpdate = createContext();

export const GlobalThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(0);

  const currentTheme = themes[theme];

  return (
    <ThemeContext.Provider value={currentTheme}>
      <ThemeContextUpdate.Provider value={setTheme}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeContextUpdate);
};
