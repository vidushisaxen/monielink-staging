"use client";

import React, { useEffect, useRef } from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import HeroBackground from "./HeroBackground";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default function Hero({}) {
  const descRef = useRef(null);

  useEffect(() => {
    let splitDesc;
    let splitDescRevert;
    const ctx = gsap.context(() => {
      if (descRef.current) {
        splitDesc = new SplitText(descRef.current, {
          type: "lines,chars",
          linesClass: "desc-line",
          mask: "lines",
        });
        splitDescRevert = splitDesc.revert;
      }
      const splitHeading = new SplitText(".headingText", {
        type: "lines",
        linesClass: "heading-char",
        mask: "lines",
      });

      const tl = gsap.timeline();
      gsap.set(".heading-char", {
        y: "100%",
      });

      tl.to(splitHeading.lines, {
        y: "0%",
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.02,
      });

      if (splitDesc) {
        gsap.set(splitDesc.lines, {
          y: "100%",
        });
      }

      if (splitDesc) {
        tl.to(
          splitDesc.lines,
          {
            y: "0%",
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.02,
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
      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        <HeroBackground />
        <div
          className={`h-fit pointer-events-none w-full pt-20 flex-col flex items-center justify-center z-10 text-foreground`}
        >
          <h1
            className={`text-[8vw]
               font-display leading-[9.5vw] w-[70%] text-center headingText text-[#D6D6D6]`}
          >
            Powerful Neobank Platform
          </h1>

          <div
            className={`w-[65%] pt-5
            text-center text-[1vw] tracking-wide`}
          >
            <p
              className="text-[#A8A8A8] descriptionText"
              ref={descRef}
              style={{ display: "inline-block" }}
            >
              Seamlessly embed digital banking services into your mobile apps
              with the Monielink Super SDK — a single, unified solution that
              accelerates your go-to-market and elevates your customer
              experience.
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
