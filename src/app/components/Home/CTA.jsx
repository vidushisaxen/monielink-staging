"use client";
import React, { useEffect } from "react";
import ButtonComponent from "../ButtonComponent";
import HeroBackground from "./HeroBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function CTA({
  Heading1,
  Heading2,
  Description,
  headingFontSize,
  paddingTop,
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#cta",
          start: "top top",
          end: "bottom top",
          pin: true,
          once: true,
        },
      });
      tl.to(".ctaText1", {
        y: "0%",
        duration: 0.5,
        ease: "none",
      });
      tl.to(".ctaText2", {
        y: "0%",
        duration: 0.5,
        ease: "none",
      });
      tl.to(".ctaText3", {
        y: "0%",
        duration: 0.5,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section id="cta" className="w-screen relative h-screen bg-background">
      {typeof NavBar === "function" && <NavBar />}
      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        <HeroBackground />
        <div
          className={`h-fit pointer-events-none w-full ${
            paddingTop ? `pt-[${paddingTop}]` : "pt-20"
          } flex-col flex items-center justify-center z-10 text-foreground`}
        >
          <div className="overflow-hidden">
            <h1
              className={`${
                headingFontSize ? `text-[8vw]` : "text-[6vw]"
              } font-display leading-[9vw] ctaText1 translate-y-[100%] text-[#D6D6D6]`}
            >
              {Heading1}
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className={`${
                headingFontSize ? `text-[8vw]` : "text-[6vw]"
              }  font-display leading-[9vw] ctaText2 translate-y-[100%] text-[#D6D6D6]`}
            >
              {Heading2}
            </h1>
          </div>

          <div
            className={`${
              headingFontSize ? `w-[65%] pt-5 ` : "w-[55%] pt-8"
            } text-center text-[1vw] tracking-wide overflow-hidden`}
          >
            <p className="text-[#A8A8A8] ctaText3 translate-y-[100%]">{Description}</p>
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
