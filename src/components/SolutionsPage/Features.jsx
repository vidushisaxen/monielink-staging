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
            <div className="px-[4.5vw] pt-[8vw] w-full">
                <div className="w-[52%] text-left mb-[4vw]">
                    <Copy>
                        <h2 className="text-head-60 font-display">
                            Scalable, Secure, and Cost- Efficient Banking Infrastructure
                        </h2>
                    </Copy>
                </div>

                <div className="flex flex-row flex-wrap ml-auto items-center justify-between w-[65%] gap-y-[5vw]">
                    {uspData.map(({ title, description, svg, svgElement }, index) => (
                        <div key={index} className="flex flex-col items-start w-[45%] justify-start">
                            <div className="text-primary-2 mb-1">
                                <svg
                                    ref={svg}
                                    className="h-[5vw] w-[5vw]"
                                    viewBox="0 0 249 250"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {svgElement}
                                </svg>
                            </div>
                            <Copy>
                                <h3 className="text-content-30 font-display mb-5">{title}</h3>
                            </Copy>
                            <Copy>
                                <p className={`text-content-20`}>{description}</p>
                            </Copy>
                        </div>
                    ))}
                </div>

                <div className="py-[12vw]">
                    <Copy>
                        <h2 className="text-head-140 text-center text-primary-1 font-display">
                            <span>One SDK.</span><br />
                            <span>Endless Possibilities.</span>
                        </h2>
                    </Copy>
                </div>
            </div>
        </section>
    );
}