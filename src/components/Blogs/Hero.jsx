"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";
import { fadeUpAnim } from "../Animations/gsapAnimations";
import { usePathname } from "next/navigation";
import HeroBackground from "../Hero/HeroBackground";

gsap.registerPlugin(useGSAP);

export default function Hero({ heading, para, breadcrumb }) {
  const btnContainer = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    // gsap.to("#loader", {
    //   duration: 0.5,
    //   opacity: 0,
    //   delay: 1.5,
    // });
    tl.fromTo(
      btnContainer.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 2,
      }
    );
  });

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       "#inner-nav",
  //       {
  //         y: "-100%",
  //       },
  //       {
  //         y: 0,
  //         duration: 1.5,
  //         delay: 0,
  //       }
  //     );
  //   });
  //   return () => ctx.revert();
  // }, []);
  fadeUpAnim();

  return (
    <section className="w-screen relative h-screen  max-sm:pb-0 bg-background overflow-hidden">
      {/* <div
        className="fixed pointer-events-none z-[999] w-screen h-screen max-sm:h-fit bg-black"
        id="loader"
      /> */}
      <div className="relative h-screen max-sm:h-[80vh] max-sm:pt-[15vh] w-full flex flex-col items-center justify-center max-sm:items-start max-sm:px-[2vw]">
        <HeroBackground />
        <div
          className={`h-fit pointer-events-none w-full flex-col flex items-center justify-center z-10 text-foreground max-sm:items-start text-center max-sm:text-left max-sm:pl-[5vw] max-sm:pt-[0vw]`}
        >
          <Copy delay={1.2}>
            <h1
              className={`text-head-150 font-display w-[80%] headingText  text-gray-1 max-sm:w-[90%]`}
            >
              Ideas, Insights & Innovation
            </h1>
          </Copy>
          <div
            className={`w-[60%] pt-5 text-content-20 max-sm:text-left text-gray-2 max-sm:w-[90%] max-sm:pt-[10vw] max-md:pt-[5vw]`}
          >
            <Copy delay={1.5}>
              <p className="descriptionText max-sm:text-left max-sm:text-content-20 max-sm:leading-[1.5]">
                Explore expert insights, product updates, market trends, and
                thought leadership from the team driving the future of digital
                banking in Africa. Stay informed on what’s shaping fintech,
                financial inclusion, and scalable innovation — all in one place.
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
}
