"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Copy from "../Animations/Copy";
import OverviewGIF from "./OverviewGIF";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Overview() {
  const [values, setValues] = useState(["0", "0", "0"]);

  useEffect(() => {
    setTimeout(() => {
      setValues(["2", "2", "6"]);
    }, 500);
  }, []);

  return (
    <section id="overview" className="h-fit w-full pt-[10vw] bg-background relative z-[1] max-sm:pt-[15%]">
      <div className="pt-[5vw] flex items-center flex-col justify-center gap-[2vw]">
        <Copy>
          <h2 className="text-gray-1 text-center text-head-60 w-[55%] capitalize font-display overviewText max-sm:w-3/4 max-sm:head-140">
            Enabling Digital Transformation to help You Realize 6X Revenue Growth
          </h2>
        </Copy>
        <div className="flex items-center justify-between w-[60%] pt-10 relative z-[2] max-sm:flex-col max-sm:gap-16">
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <div className="flex h-[10vw] items-start w-fit justify-center text-head-200 leading-none max-sm:h-auto">
              {renderDigits(values[0])}
              <p
                style={{
                  background: "linear-gradient(to right, #FF5100, #FE6E00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                x
              </p>
            </div>
            <Copy>
              <p className="text-gray-2 text-center text-content-20 tracking-wider font-display">
                Your Retail Customers
              </p>
            </Copy>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <div className="flex h-[10vw] text-head-200 leading-none overflow-hidden items-start w-fit justify-center max-sm:h-auto">
              {renderDigits(values[1])}
              <p
                style={{
                  background: "linear-gradient(to right, #FF5100, #FE6E00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                x
              </p>
            </div>
            <Copy>
              <p className="text-gray-2 subtitle text-center text-content-20 tracking-wider font-display">
                Your X-Selling Ratio
              </p>
            </Copy>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <div className="flex h-[10vw] text-head-200 leading-none overflow-hidden items-start w-fit justify-center max-sm:h-auto">
              {renderDigits(values[2])}
              <p
                style={{
                  background: "linear-gradient(to right, #FF5100, #FE6E00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                x
              </p>
            </div>
            <Copy>
              <p className="text-gray-2 subtitle  text-center text-content-20 tracking-wider font-display">
                Revenue from Retail Products
              </p>
            </Copy>
          </div>
        </div>
      </div>
      <div className="pt-[40%] mt-[7%] relative max-sm:pt-[60%]">
        <div className="flex gap-2 w-screen px-[4.5vw] items-end justify-between pb-[5vw] max-sm:flex-col max-sm:text-center max-sm:items-center max-sm:pb-[15vw]">
          <div className="pb-[3.5vw] w-[50%] max-sm:w-full max-sm:pt-[10vh]">
            <Copy>
              <p className="font-display text-gray-1 text-head-100">
                Find the Right Solution for You
              </p>
            </Copy>
          </div>
          <div className="h-fit w-[35%] max-sm:w-[85%]">
            <Copy>
              <p className="text-content-20 text-gray-2 ">
                Enable seamless digital banking experiences for your customers
                through your mobile app. The Moneylink Super SDK empowers banks
                and fintechs to launch B2B2C services quickly, securely, and at
                scale — all from a single integration.
              </p>
            </Copy>
          </div>
        </div>
        <OverviewGIF />
      </div>
    </section>
  );
}

function renderDigits(value) {
  return value.split('').map((char, i) => {
    return /\d/.test(char)
      ? <DigitScroller key={i} digit={char} />
      : <span key={i}>{char}</span>;
  });
}

function DigitScroller({ digit, duration = 2 }) {
  const containerRef = useRef();

  useEffect(() => {
    const digitIndex = parseInt(digit, 10);
    gsap.to(containerRef.current, {
      y: `-${digitIndex * 10}%`,
      duration,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#overview",
        start: "top 80%",
      }
    });
  }, [digit, duration]);

  return (
    <div className="overflow-hidden h-[10vw] tablet:h-[8.8vw] max-sm:h-[20vw] max-sm:mb-[2.1vw] inline-block relative w-[0.6em]">
      <div ref={containerRef} className="flex flex-col">
        {[...Array(10).keys()].map((d) => (
          <span
            key={d}
            style={{
              background: "linear-gradient(to right, #FF5100, #FE6E00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="h-fit text-inherit">{d}</span>
        ))}
      </div>
    </div>
  );
}