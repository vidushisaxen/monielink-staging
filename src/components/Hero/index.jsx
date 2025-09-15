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
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Hero({ heading, para , breadcrumb}) {
  const btnContainer = useRef();
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);
  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  const preloaderShown = typeof window !== 'undefined' ? sessionStorage.getItem('preloaderShown') : null;
  const baseDelay = preloaderShown ? 0.5 : 7.5;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(btnContainer.current, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: baseDelay + 0.8,
    })
    tl.fromTo(".breadcrumbsContainer", {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay:-0.2
    })
  });

  fadeUpAnim();

  return (
    <section className="w-screen relative h-screen  max-sm:pb-0 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 h-full !w-full hidden max-sm:block max-md:block">
                      <Image src={"/assets/images/hero-bg.png"} height={852} width={393} alt="hero-bg" className="h-full w-full"/>
                    </div>
      <div className="relative h-screen max-sm:h-[80vh] max-sm:pt-[15vh] w-full flex flex-col items-center justify-center max-sm:items-start max-sm:px-[2vw]">
        <HeroBackground />
        <div
          className={`h-fit pointer-events-none w-full pt-20 flex-col flex items-center justify-center z-10 text-foreground max-sm:items-start text-center max-sm:text-left max-sm:pl-[5vw] max-sm:pt-[20vw] max-md:pt-0`}
        >
          <Copy delay={baseDelay}>
            <h1 className={`text-head-150 font-display w-[85%] max-md:w-[90%] headingText  text-gray-1 max-sm:w-full`}>
              {heading}
            </h1>
          </Copy>
          <div
            className={`w-[55%] max-md:w-[80%] pt-5 text-content-20 max-sm:text-left text-gray-2 max-sm:w-[99%] max-md:pt-[5vw] max-sm:pt-[10vw]`}>
            <Copy delay={baseDelay + 0.5}>
              <p className="descriptionText max-sm:text-left max-sm:text-content-20 max-sm:leading-[1.5] max-sm:pr-[5vw]">
                {para}
              </p>
            </Copy>
          </div>
          <div ref={btnContainer} className="flex items-center pt-12 gap-5 max-sm:flex-col max-sm:gap-[5vw] max-sm:pt-[10vw]">
            <PrimaryButton text="Talk to an expert" href={"/contact-us"} />
            <BlackButton text="Talk to an expert" href={"/contact-us"} />
          </div>
        </div>
        {breadcrumb && (
        <div className="breadcrumbs overflow-hidden w-full flex items-start justify-start text-content-20 text-gray-4  absolute left-[5%] bottom-[4%] max-sm:bottom-[-20%]">
          <div className="flex gap-3  breadcrumbsContainer">
            <a onClick={(e) => {
              e.preventDefault();
              navigateTo('/')
            }} href="/" className=" text-[#636363]">
              Home
            </a>
            {pathArray.map((segment, index) => {
              const href = "/" + pathArray.slice(0, index + 1).join("/");
              const isLast = index === pathArray.length - 1;
              return (
                <div key={index} className="flex items-center gap-2 ">
                  <span><Image src="/assets/icons/slash.svg" height={13} width={13} alt="slash" className="max-sm:w-[4.5vw] max-sm:h-auto" /></span>
                  {isLast ? (
                    <span className="text-gray-1">
                      {createBreadcrumbName(segment)}
                    </span>
                  ) : (
                    <a onClick={(e) => {
                      e.preventDefault();
                      navigateTo(href)
                    }} href={href} className=" text-[#636363]">
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
