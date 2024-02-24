"use client";
import nav from "@/app/utils/nav";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";

function Sidebar() {
  const theme = useTheme();

  const help = nav.slice(5, 7);
  const settings = nav.slice(7, 9);

  const pathname = usePathname();

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
                className={`relative px-2 py-2 flex items-center gap-2
                  ${pathname === item.link && "active"}
                `}
              >
                {item.icon}
                {item.title}
                <span className="dot"> </span>
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
                className={`relative px-2 py-2 flex items-center gap-2 ${
                  pathname === item.link && "active"
                }`}
              >
                {item.icon}
                {item.title}
                <span className="dot"></span>
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
                className={`px-2 py-2 flex items-center gap-2 ${
                  pathname === item.link && "active"
                }`}
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

  ul li a {
    transition: all 0.3s ease-in-out;
    border-radius: 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.colorNeutral};
      border-radius: 0.5rem;
      transition: all 0.3s ease-in-out;
      color: ${({ theme }) => theme.colorPurple};
    }
  }

  .active {
    background-color: ${({ theme }) => theme.colorNeutral3};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colorPurple};

    font-weight: 500;

    .dot {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);

      width: 0.3rem;
      height: 0.3rem;
      background-color: ${({ theme }) => theme.colorPurple};
      border-radius: 50%;
    }
  }
`;

export default Sidebar;
