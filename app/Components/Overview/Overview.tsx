"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Overview() {
  return (
    <OverviewStyled>
      <div className="relative">
        <Image src="card.svg" alt="overview" width={500} height={500} />
        <h1 className="absolute left-8 top-6 font-bold text-3xl">Megan Fox</h1>
        <p className="absolute left-8 bottom-14 text-slate-200">
          Total Balance
        </p>
        <p className="absolute left-8 bottom-6 font-bold text-2xl text-white">
          $50,000,00
        </p>
      </div>
      <div></div>
    </OverviewStyled>
  );
}

const OverviewStyled = styled.section``;

export default Overview;
