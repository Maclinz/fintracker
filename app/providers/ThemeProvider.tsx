"use client";
import React from "react";
import { GlobalThemeProvider } from "../../context/themeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return <GlobalThemeProvider>{children}</GlobalThemeProvider>;
}

export default ThemeProvider;
