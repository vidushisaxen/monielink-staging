"use client";

import React, { useRef } from "react";
import HeroBackground from "./HeroBackground";
import gsap from "gsap";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../Buttons/PrimaryButton";
import BlackButton from "../Buttons/BlackButton";

gsap.registerPlugin(useGSAP);

export default function Hero({ }) {
  const btnContainer = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.to('#loader', {
      duration: 0.5,
      opacity: 0,
      delay: 1.5,
    })
    tl.fromTo(btnContainer.current, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 2,
    })
      // .fromTo("#header-inner", {
      //   yPercent: -100,
      // }, {
      //   yPercent: 0,
      //   duration: 1,
      //   delay: -1,
      // })
  });

  return (
    <section className="w-screen relative h-screen bg-background">
      <div className="fixed pointer-events-none z-[999] w-screen h-screen bg-black" id="loader" />
      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        <HeroBackground />
        <div
          className={`h-fit pointer-events-none w-full pt-20 flex-col flex items-center justify-center z-10 text-foreground`}
        >
          <Copy delay={1.8}>
            <h1 className={`text-[7.815vw] font-display leading-[1.1] w-[70%] text-center headingText text-[#D6D6D6]`}>
              Powerful Neobank Platform
            </h1>
          </Copy>
          <div
            className={`w-[60%] pt-5
            text-center text-[1.04vw] tracking-wide`}
          >
            <Copy delay={2}>
              <p className="text-[#A8A8A8] descriptionText">
                Seamlessly embed digital banking services into your mobile apps
                with the Monielink Super SDK — a single, unified solution that
                accelerates your go-to-market and elevates your customer
                experience.
              </p>
            </Copy>
          </div>
          <div ref={btnContainer} className="flex items-center pt-12 gap-5">
            <PrimaryButton text="Talk to an expert" href={"#"} />
            <BlackButton text="Talk to an expert" href={"#"} />
          </div>
        </div>
      </div>
    </section>
  );
}
