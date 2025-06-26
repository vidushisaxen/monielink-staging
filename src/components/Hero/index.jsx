"use client";

import React, { useRef } from "react";
import HeroBackground from "./HeroBackground";
import gsap from "gsap";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../Buttons/PrimaryButton";
import BlackButton from "../Buttons/BlackButton";
import { fadeUpAnim } from "../Animations/gsapAnimations";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP);

export default function Hero({ heading, para , breadcrumb}) {
  const btnContainer = useRef();
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);
  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

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
  });

  fadeUpAnim();

  return (
    <section className="w-screen relative h-screen bg-background">
      <div className="fixed pointer-events-none z-[999] w-screen h-screen bg-black" id="loader" />
      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        <HeroBackground />
        <div
          className={`h-fit pointer-events-none w-full pt-20 flex-col flex items-center justify-center z-10 text-foreground`}
        >
          <Copy delay={1.8}>
            <h1 className={`text-[7.815vw] font-display leading-[1.1] w-[80%] text-center headingText text-[#D6D6D6]`}>
              {heading}
            </h1>
          </Copy>
          <div
            className={`w-[60%] pt-5
            text-center text-[1.04vw] tracking-wide`}
          >
            <Copy delay={2}>
              <p className="text-[#A8A8A8] descriptionText">
                {para}
              </p>
            </Copy>
          </div>
          <div ref={btnContainer} className="flex items-center pt-12 gap-5">
            <PrimaryButton text="Talk to an expert" href={"#"} />
            <BlackButton text="Talk to an expert" href={"#"} />
          </div>
        </div>
        {breadcrumb && (
        <div className="breadcrumbs w-full flex items-start justify-start text-content-18 text-[#636363]   absolute left-[5%] bottom-[8%] max-sm:bottom-[5%] max-md:text-[2.2vw] fadeupanim">
          <div className="flex gap-3  ">
            <a onClick={(e) => {
              e.preventDefault();
              navigateTo('/')
            }} href="/" className="">
              Home
            </a>
            {pathArray.map((segment, index) => {
              const href = "/" + pathArray.slice(0, index + 1).join("/");
              const isLast = index === pathArray.length - 1;
              return (
                <div key={index} className="flex items-center gap-2 ">
                  <span>/</span>
                  {isLast ? (
                    <span className="text-white ">
                      {createBreadcrumbName(segment)}
                    </span>
                  ) : (
                    <a onClick={(e) => {
                      e.preventDefault();
                      navigateTo(href)
                    }} href={href} className="">
                      {createBreadcrumbName(segment)}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
