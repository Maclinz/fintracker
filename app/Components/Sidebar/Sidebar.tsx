"use client";
import nav from "@/app/utils/nav";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  const theme = useTheme();

  const help = nav.slice(5, 7);
  const settings = nav.slice(7, 9);

  return (
    <SidebarStyled theme={theme}>
      <div className="flex items-center gap-2">
        <Image src="main-logo.svg" alt="logo" width={30} height={30} />
        <h1 className="font-bold text-xl">MyFinance</h1>
      </div>
      <ul className="mt-6 pb-6 border-b">
        {nav.slice(0, 5).map((item, index) => {
          return (
            <li key={index} className="mt-1">
              <Link
                href={item.link}
                className="px-2 py-2 flex items-center gap-2"
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="mt-4">
        {help.map((item, index) => {
          return (
            <li key={index} className="mt-1">
              <Link
                href={item.link}
                className="px-2 py-2 flex items-center gap-2"
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="mt-auto">
        {settings.map((item, index) => {
          return (
            <li key={index} className="mt-1">
              <Link
                href={item.link}
                className="px-2 py-2 flex items-center gap-2"
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </SidebarStyled>
  );
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
`;

export default Sidebar;
