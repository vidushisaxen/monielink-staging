"use client";
import React, { useEffect } from "react";
import ButtonComponent from "../../Buttons/ButtonComponent";
import HeroBackground from "./HeroBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function CTA({
  Heading1,
  Heading2,
  Description,
  headingFontSize,
  paddingTop,
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const ctaText = SplitText.create(".ctaDescription", {
        type: "lines",
        linesClass: "ctaDescriptionLines",
        mask:"lines",
      });
      const ctaText1 = SplitText.create(".ctaText1", {
        type: "lines",
        linesClass: "ctaText1Lines",
        mask:"lines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#cta",
          start: "top 80%",
          end: "bottom top",
          // markers: true,
          once: true,
        },
      });
      gsap.set(".ctaText1Lines", { y: "100%" });
      gsap.set(".ctaDescriptionLines", { y: "100%" });
      tl.to(".ctaText1Lines", {
        y: "0%",
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.08,
      });
      tl.to(".ctaDescriptionLines", {
        y: "0%",
          duration: 1,
          stagger: 0.08,
        },
        "<+1"
      );
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
          <div className="overflow-hidden flex flex-col items-center justify-center">
            <h1
              className={`${
                headingFontSize ? `text-[8vw]` : "text-[6vw]"
              } font-display leading-[1.25] ctaText1 text-[#D6D6D6]`}
            >
              {Heading1}
            </h1>
            <h1
              className={`${
                headingFontSize ? `text-[8vw]` : "text-[6vw]"
              }  font-display leading-[1.25] ctaText1  text-[#D6D6D6]`}
            >
              {Heading2}
            </h1>
          </div>

          <div
            className={`${
              headingFontSize ? `w-[65%] pt-5 ` : "w-[55%] pt-8"
            } text-center text-[1vw] tracking-wide overflow-hidden`}
          >
            <p className="text-[#A8A8A8] ctaDescription">
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
