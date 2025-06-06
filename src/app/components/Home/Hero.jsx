"use client";
import React from "react";
import ButtonComponent from "../ButtonComponent";
import HeroBackground from "./HeroBackground";
export default function Hero({

  Heading1,
  Heading2,
  Description,
  headingFontSize,
  paddingTop,
}) {
  return (
    <section className="w-screen relative h-screen bg-background">
      {typeof NavBar === "function" && <NavBar />}
      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        <HeroBackground />
        <div className={`h-fit pointer-events-none w-full ${paddingTop ? `pt-[${paddingTop}]` : 'pt-20'} flex-col flex items-center justify-center z-10 text-foreground`}>
          <h1 className={`${headingFontSize ? `text-[8vw]` : 'text-[6vw]'} font-display leading-[9.5vw] text-[#D6D6D6]`}>
            {Heading1}
          </h1>
          <h1 className={`${headingFontSize ? `text-[8vw]` : 'text-[6vw]'}  font-display leading-[9vw] text-[#D6D6D6]`}>
            {Heading2}
          </h1>
          <div className={`${headingFontSize ? `w-[65%] pt-5 ` : 'w-[55%] pt-8'} text-center text-[1vw] tracking-wide`}>
            <p className="text-[#A8A8A8]">{Description}</p>
          </div>
          <div className="flex items-center pt-12 gap-5">
            <ButtonComponent text="Talk to an expert" borderColor="white" />
            <ButtonComponent
              text="Talk to an expert"
              borderTrue
              bgColor="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
