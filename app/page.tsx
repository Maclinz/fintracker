"use client";

import { useTheme } from "@/context/themeContext";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainContent/MainContent";

export default function Home() {
  const theme = useTheme();

  return (
    <MainStyled theme={theme}>
      <Sidebar />
      <MainContent />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100vh;
`;
