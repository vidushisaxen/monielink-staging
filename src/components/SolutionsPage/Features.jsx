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

export default function Features() {
    const svgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const uspData = [
        {
            title: "Cloud Based Implementation",
            description: "Deploy dedicated cloud instances with partner- managed access control and firewalls.",
            width: "w-[48%]",
            svg: svgRefs[0],
            svgElement: <CloudImplementationIcon />
        },
        {
            title: "Secure environments",
            description: "Meet regulatory compliance with secure, isolated environments at lower cost and higher efficiency than on-premise systems.",
            width: "w-[45%]",
            svg: svgRefs[1],
            svgElement: <SecureEnvironmentIcon />
        },
        {
            title: "Dedicated Instant SaaS",
            description: "Eliminate heavy upfront licensing costs with our revenue-sharing SaaS model.",
            width: "w-[40%]",
            svg: svgRefs[2],
            svgElement: <DedicatedSaaSIcon />
        },
        {
            title: "Seamless integration",
            description: "Seamlessly integrate digital banking experiences using our Super SDK front-end and dedicated cloud back-end — fully managed on Monielink Infrastructure.",
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
                    },
                    duration: 2,
                    drawSVG: 0,
                });
            }
        });
    });

    return (
        <section data-theme="white" id="features" className="bg-white-1 text-black-1">
            <div className="px-[4.5vw] pt-[8vw] max-md:py-[15%] w-full max-sm:py-[15%] max-sm:px-[6vw]">
                <div className="w-[52%] max-md:w-[100%] max-md:text-center max-sm:text-left text-left mb-[4vw] max-sm:w-full max-sm:mb-[12vw]">
                    <Copy>
                        <h2 className="text-head-60 font-display">
                            Scalable, Secure, and Cost- Efficient Banking Infrastructure
                        </h2>
                    </Copy>
                </div>

                <div className="flex flex-row flex-wrap ml-auto max-sm:pt-0 max-md:pt-[10vw] items-center justify-between w-[65%] max-sm:px-0 max-md:px-[2vw] max-md:items-start max-sm:items-center max-md:w-full max-md:flex-wrap gap-y-[5vw] max-sm:flex-col max-sm:w-full max-sm:gap-y-[8vw] max-md:gap-y-[12vw]">
                    {uspData.map(({ title, description, svg, svgElement }, index) => (
                        <div key={index} className="flex flex-col items-start w-[45%] max-md:w-[45%] max-md:justify-between justify-start max-sm:w-full">
                            <div className={`text-primary-2 mb-1 max-md:pb-[2vw] max-sm:mb-[2.5vw] ${index!=0?"max-sm:ml-[-2vw]":"max-sm:ml-[-1vw]"}`}>
                                <svg
                                    ref={svg}
                                    className="h-[5vw] w-[5vw] max-md:w-[12vw] max-md:h-[12vw] max-sm:w-[15vw] max-sm:h-[15vw]"
                                    viewBox="0 0 249 250"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {svgElement}
                                </svg>
                            </div>
                            <Copy>
                                <h3 className="text-content-30 font-display mb-5 max-sm:mb-[4vw] max-md:mb-[3vw]">{title}</h3>
                            </Copy>
                            <Copy>
                                <p className={`text-content-20`}>{description}</p>
                            </Copy>
                        </div>
                    ))}
                </div>

                <div className="py-[12vw] max-md:py-[2vw] max-sm:pt-0 max-md:pt-[20vw] max-sm:py-[40%]">
                    <Copy>
                        <h2 className="text-head-140 text-center text-primary-1 font-display max-sm:text-black-1">
                            <span>One SDK.</span><br />
                            <span>Endless Possibilities.</span>
                        </h2>
                    </Copy>
                </div>
            </div>
        </section>
    );
}