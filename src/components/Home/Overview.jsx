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
    <section id="overview" className="h-fit w-full pt-[10vw] bg-background relative z-[1]">
      <div className="pt-[5vw] flex items-center flex-col justify-center gap-[2vw]">
        <Copy>
          <h2 className="text-[#D6D6D6] text-center text-[3.12vw] w-[55%] leading-[1.3] capitalize font-display overviewText ">
            Enabling Digital Transformation to help You Realize 6X Revenue Growth
          </h2>
        </Copy>
        <div className="flex items-center justify-between w-[60%] pt-10 relative z-[2]">
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <div className="flex h-[10vw] items-start w-fit justify-center text-[10.4vw] leading-none">
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
              <p className="text-[#A8A8A8] text-center text-[1.04vw] tracking-wider font-display">
                Your Retail Customers
              </p>
            </Copy>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <div className="flex h-[10vw] text-[10.4vw] leading-none overflow-hidden items-start w-fit justify-center">
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
              <p className="text-[#A8A8A8] subtitle  text-center text-[1.04vw] tracking-wider font-display">
                Your X-Selling Ratio
              </p>
            </Copy>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <div className="flex h-[10vw] text-[10.4vw] leading-none overflow-hidden items-start w-fit justify-center">
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
              <p className="text-[#A8A8A8] subtitle  text-center text-[1.04vw] tracking-wider font-display">
                Revenue from Retail Products
              </p>
            </Copy>
          </div>
        </div>
      </div>
      <div className="pt-[40%] mt-[7%] relative">
        <div className="flex gap-2 w-screen px-[4.5vw] items-end justify-between pb-[5vw]">
          <div className="pb-[3.5vw] w-[50%]">
            <Copy>
              <p className="leading-[1.25] font-display text-[#D6D6D6] text-[5.2vw]">
                Find the Right Solution for You
              </p>
            </Copy>
          </div>
          <div className="h-fit w-[40%]">
            <Copy>
              <p className="text-[1.04vw] text-[#A8A8A8]">
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
    <div className="overflow-hidden h-[10vw] tablet:h-[8.8vw] mobile:h-[14.4vw] mobile:mb-[2.1vw] inline-block relative w-[0.6em]">
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