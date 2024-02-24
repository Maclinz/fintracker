"use client";
import React from "react";
import { GlobalThemeProvider } from "../../context/themeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return <GlobalThemeProvider>{children}</GlobalThemeProvider>;
}

export default ThemeProvider;
