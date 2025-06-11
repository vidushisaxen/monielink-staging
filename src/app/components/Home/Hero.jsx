"use client";

import React, { useEffect, useRef } from "react";
import ButtonComponent from "../../Buttons/ButtonComponent";
import HeroBackground from "./HeroBackground";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default function Hero({
  Heading1,
  Heading2,
  Description,
  headingFontSize,
  paddingTop,
}) {
  const descRef = useRef(null);

  useEffect(() => {
    let splitDesc;
    let splitDescRevert;
    const ctx = gsap.context(() => {
      // Split the description text into lines for animation
      if (descRef.current) {
        splitDesc = new SplitText(descRef.current, {
          type: "lines,chars",
          linesClass: "desc-line",
        });
        splitDescRevert = splitDesc.revert;
      }

      const tl = gsap.timeline();
      gsap.set(".headingText1", {
        y: "100%",
      });

      if (splitDesc) {
        gsap.set(splitDesc.lines, {
          y: "200%",
        });
      }

      tl.to(".headingText1", {
        y: "0%",
        delay: 0.3,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.08,
      });

      if (splitDesc) {
        tl.to(
          splitDesc.lines,
          {
            y: "0%",
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.07,
          },
          "-=0.8"
        );
      }
    });

    return () => {
      ctx.revert();
      if (splitDesc && typeof splitDesc.revert === "function")
        splitDesc.revert();
    };
  }, []);

  return (
    <section className="w-screen relative h-screen bg-background">
      {typeof NavBar === "function" && <NavBar />}
      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        <HeroBackground />
        <div
          className={`h-fit pointer-events-none w-full ${
            paddingTop ? `pt-[${paddingTop}]` : "pt-20"
          } flex-col flex items-center justify-center z-10 text-foreground`}
        >
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <h1
              className={`${
                headingFontSize ? `text-[8vw]` : "text-[6vw]"
              } font-display leading-[9.5vw] headingText1 text-[#D6D6D6]`}
            >
              {Heading1}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <h1
              className={`${
                headingFontSize ? `text-[8vw]` : "text-[6vw]"
              }  font-display leading-[9vw] headingText1 text-[#D6D6D6]`}
            >
              {Heading2}
            </h1>
          </div>
          <div
            className={`${
              headingFontSize ? `w-[65%] pt-5 ` : "w-[55%] pt-8"
            } text-center text-[1vw] tracking-wide overflow-hidden`}
          >
            <p
              className="text-[#A8A8A8] descriptionText"
              ref={descRef}
              style={{ display: "inline-block" }}
            >
              {Description}
            </p>
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
