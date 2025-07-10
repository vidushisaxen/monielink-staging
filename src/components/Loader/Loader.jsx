"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import Image from "next/image";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { useLenis } from "lenis/react";
import HeroBackground from "../Hero/HeroBackground";
gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export default function Loader() {
  const loaderCenteredLogoRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    // Stop scroll while loader is active
    if (lenis) lenis.stop();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      const splitRef = new SplitText(".splitText", {
        type: "chars",
        linesClass: "splitTextLines",
        charsClass: "split-char",
      });
      tl.from(".split-char", {
        opacity: 0,
        duration: 0.05,
        stagger: 0.02,
        delay: 0.2,
        ease: "power2.inOut",
      });
      tl.to(".splitText", {
        delay: 0.5,
        opacity: 0,
      });

      tl.to(
        "#corner-loader-container",
        {
          opacity: 1,
          delay: 0.5,
        },
        "<"
      );

      const loaderCorners = gsap.utils.toArray(".loader-corners");

      const randomCorners = loaderCorners.sort(() => Math.random() - 0.5);

      randomCorners.forEach((corner, index) => {
        tl.to(corner, {
          opacity: 1,
          backgroundColor: "#FE6A00",
          ease: "linear",
          duration: 0.1,
        });
      });

      tl.to(
        loaderCenteredLogoRef.current,
        {
          y: 0,
          duration: 1,
          opacity: 1,
          ease: "power2.inOut",
        },
        "<-.5"
      );
      tl.to(loaderCenteredLogoRef.current, {
        opacity: 1,
        yoyo: true,
        repeat: 3,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to("#LoadingScreen", {
            opacity: 0,
            filter: "blur(5px)",
            duration: 1,
            scale: 0.7,
            ease: "expo",
            onComplete: () => {
              if (lenis) lenis.start();
            }
          });
        },
      });
    });

    return () => {
      ctx.revert();
      if (lenis) lenis.start();
    };
  }, [lenis]);

  return (
    <div
      id="LoadingScreen"
      className="h-screen fixed pointer-events-none inset-0 w-full bg-[#0A0A0A] z-[999] flex items-center justify-center"
    >
      {/* <HeroBackground/> */}
      <p className="absolute text-center text-zinc-400 text-[1vw] tracking-widest font-mono font-medium uppercase splitText">
        Design elevated by a tech forward aesthetic.
      </p>

      <div className="w-[40%] h-[40%] z-[5] flex">
        <div
          id="corner-loader-container"
          className="w-full opacity-0 h-full relative"
        >
          {/* Fixed: use proper rotation and position classes */}
          {[0, 90, 270, 180].map((rotation, index) => {
            const positionClasses =
              index === 1
                ? "ml-auto" // top-right
                : index === 2
                ? "absolute bottom-0 left-0" // bottom-left ✅
                : index === 3
                ? "absolute bottom-0 right-0" // bottom-right
                : "relative"; // top-left

            return (
              <div
                key={rotation}
                id="corner-loader"
                className={`w-[2vw] h-[2vw] ${positionClasses}`}
                style={{ transform: `rotate(${rotation}deg)` }} // use inline style
              >
                <span className="w-[2px] h-1/2 loader-corners rounded-full bg-white opacity-50 absolute top-[.4vw] left-0"></span>
                <span className="w-1/2 h-[2px] loader-corners rounded-full bg-white opacity-50 absolute top-0 left-[.4vw]"></span>
              </div>
            );
          })}

          {/* Center logo */}
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
            <div
              className=" translate-y-[30%] opacity-0"
              ref={loaderCenteredLogoRef}
            >
              <Image
                src="/logoM.svg"
                alt="loader"
                width={100}
                height={100}
                className="w-[4vw] h-[4vw] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
