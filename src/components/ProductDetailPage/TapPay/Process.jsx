"use client";
import Copy from "@/components/Animations/Copy";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Diagram = () => {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);

  return (
    <>
      <section
        data-theme="orange"
        className="w-screen h-full max-md:mt-[-1px] overflow-hidden bg-gradient relative max-sm:py-[15%]"
        ref={sectionRef}
      >
        <div className="px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw] max-md:py-[10vw] max-sm:px-[5.5vw]">
          <div className="w-[70%] max-md:w-[95%] max-sm:w-full">
            <Copy>
              <h2 className="text-head-100 font-display text-center capitalize max-sm:text-left">
                Flexible Card Payments with Tap, Dip, or Swipe
              </h2>
            </Copy>
          </div>
          <div className="w-2/5 space-y-[5vw]">
          <div className="w-full flex flex-col items-center justify-center gap-[2vw]">
            <Image src={"/assets/icons/diagrams/tap.svg"} height={393} width={686} className="w-full h-full fadeupanim" alt="tap"/>
            <Copy>
              <p className="capitalize text-head-40 font-display"> TAP</p>
            </Copy>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[2vw]">
            <Image src={"/assets/icons/diagrams/dip.png"} height={393} width={686} className="w-full h-full fadeupanim" alt="dip"/>
            <Copy>
              <p className="capitalize text-head-40 font-display"> DIP </p>
            </Copy>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[2vw]">
            <Image src={"/assets/icons/diagrams/swipe.svg"} height={393} width={686} className="w-full h-full fadeupanim" alt="swipe"/>
            <Copy>
              <p className="capitalize text-head-40 font-display"> SWIPE </p>
            </Copy>
          </div>
         
          </div>
        </div>
      </section>
    </>
  );
};

export default Diagram;
