"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";
import { CloudImplementationIcon } from "@/components/Icons";
import { SecureEnvironmentIcon } from "@/components/Icons";
import { DedicatedSaaSIcon } from "@/components/Icons";
import { SeamlessIntegrationIcon } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

export default function USPs() {
  const svgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];


const uspData = [
  {
    title: "Cloud Based Implementation",
    description: "Deploy dedicated cloud instances with partner-managed access, security controls, and custom firewalls.",
    width: "w-[45%]",
    svg: svgRefs[0],
    svgElement: <CloudImplementationIcon />
  },
  {
    title: "Secure Environments",
    description: "Each partner maintains full control over their infrastructure’s security settings including network access, firewalls, and operating system configurations. They are responsible for enforcing measures that protect their data and applications from unauthorized access.",
    width: "w-[55%]",
    svg: svgRefs[1],
    svgElement: <SecureEnvironmentIcon />
  },
  {
    title: "Dedicated Instant SaaS",
    description: "Eliminate heavy upfront licensing costs with our revenue-sharing SaaS model. Each partner operates in a secure, isolated environment with full control over their data and infrastructure ensuring compliance, privacy, and operational flexibility.",
    width: "w-[55%]",
    svg: svgRefs[2],
    svgElement: <DedicatedSaaSIcon />
  },
  {
    title: "Seamless integration",
    description: "Seamlessly integrate digital banking experiences using our Super SDK front-end and dedicated cloud back-end fully managed on Monielink’s Infrastructure through deployment on  a dedicated Instance. ",
    width: "w-[55%]",
    svg: svgRefs[3],
    svgElement: <SeamlessIntegrationIcon />
  }
];

useGSAP(() => {
  
  svgRefs.forEach((ref) => {
    const paths = ref.current?.querySelectorAll(".usp-path");
    if (paths) {
      gsap.from(paths, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true, 
        },
        duration: 2,
        drawSVG: 0,
        ease: "power2.out"
      });
    }
  });

}, []); 


  return (
    <section data-theme="orange" id="usps" className="bg-gradient-to-r max-sm:w-screen from-[#FF5100] to-[#FE6E00] max-sm:py-[15%]">
      <div className="px-[4.5vw] py-[8vw] max-sm:py-[8vw] max-md:py-[12vw] w-full flex flex-col items-center justify-center space-y-[8vw] ">
        <div className="w-[80%] max-sm:w-[90%]">
          <Copy>
            <h2 className="text-white text-[5vw] max-sm:text-[10.5vw] max-sm:head-140 max-md:head-140 text-center font-display leading-[1.25]">
            Scalable, Secure, and Cost-Efficient Banking Infrastructure
            </h2>
          </Copy>
        </div>

        <div className="flex flex-col items-center justify-center w-full  gap-[10vw]">
          {uspData.map(({ title, description, width, svg, svgElement }, index) => (
            <div key={index} className="flex items-center max-sm:flex-col gap-20 max-md:gap-[12vw] max-sm:gap-0 w-full justify-center">
              <div className="w-[40%] max-md:w-[30%] max-sm:w-full flex items-end max-sm:items-center max-sm:justify-center justify-end h-full max-sm:h-fit max-sm:py-[4vw] ">
                <svg
                  ref={svg}
                  className="h-[13vw] w-[13vw] max-sm:h-[25vw] max-md:h-[20vw] max-md:w-[30vw] max-sm:w-[30vw]"
                  viewBox="0 0 249 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {svgElement}
                </svg>
              </div>
              <div className="flex flex-col gap-6 max-sm:gap-[5vw] max-md:gap-[1vw] h-full text-white w-[60%] max-md:w-[65%] max-sm:w-full font-body iconText justify-center items-start max-sm:items-center max-sm:text-center">
                <Copy>
                  <h3 className="text-[1.56vw] max-sm:w-[90%] capitalize max-sm:leading-[1.1] max-sm:text-center max-md:text-[3.5vw] max-sm:text-[8vw] subText font-display">{title}</h3>
                </Copy>
                <Copy>
                  <p className={`text-[1.04vw] max-sm:text-[4vw] max-md:text-[2vw] max-sm:text-center ${width} subText tracking-wide max-sm:w-[95%] max-md:w-full`}>{description}</p>
                </Copy>
              </div>
            </div>
          ))}
        </div>

        <div className="py-[8vw]">
          <Copy>
            <h2 className="text-[7.3vw] max-md:text-head-140 text-center max-sm:py-[20vw] max-md:py-[5vw] leading-[1.2] font-display">
              <span>One SDK. </span><br />
              <span className="inline-block max-sm:block">Endless </span> {" "}
              <span className="inline-block"> Possibilities. </span>
            </h2>
          </Copy>
        </div>
      </div>
    </section>
  );
}