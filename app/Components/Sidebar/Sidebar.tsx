"use client";
import { useTheme } from "@/context/themeContext";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  const theme = useTheme();
  return <SidebarStyled theme={theme}>Sidebar</SidebarStyled>;
}

const SidebarStyled = styled.nav`
  padding: 1.5rem 0.8rem;
  position: relative;
  width: 15rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colorNeutral2};
  border: 2px solid ${({ theme }) => theme.colorWhite};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Sidebar;
