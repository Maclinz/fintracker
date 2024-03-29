"use client";
import { useTheme } from "@/context/themeContext";
import React from "react";
import styled from "styled-components";
import Overview from "../Overview/Overview";

function MainContent() {
  const theme = useTheme();
  return (
    <MainContentStyled theme={theme}>
      <Overview />
    </MainContentStyled>
  );
}

const MainContentStyled = styled.section`
  padding: 1.5rem;

  flex: 1;
  border: 2px solid ${({ theme }) => theme.colorNeutral2};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colorWhiteBg};
`;

export default MainContent;
