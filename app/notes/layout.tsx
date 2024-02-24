"use client";
import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import MainContent from "../Components/MainContent/MainContent";
import styled from "styled-components";

function layout() {
  return (
    <MainStyled>
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

export default layout;
