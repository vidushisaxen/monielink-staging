'use client'
import React from 'react'
import Copy from '../Animations/Copy'
import { DigitalAccounts1, DigitalAccounts2, DigitalAccounts3, DigitalAccounts4 } from "../Icons";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Wallet = ({heading}) => {
    const svgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const uspData = [
        {
            description: "Wallet creation and account management",
            width: "w-[48%]",
            svg: svgRefs[0],
            svgElement: <DigitalAccounts1 />
        },
        {
            description: "Peer-to-peer transfers and bill payments",
            width: "w-[45%]",
            svg: svgRefs[1],
            svgElement: <DigitalAccounts3 />
        },
        {
            description: "Airtime top-up and utility payments",
            width: "w-[40%]",
            svg: svgRefs[2],
            svgElement: <DigitalAccounts2 />
        },
        {
            description: "Real-time transaction history and alerts",
            width: "w-[40%]",
            svg: svgRefs[3],
            svgElement: <DigitalAccounts4 />
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
        <section data-theme="orange" className='w-screen bg-gradient h-full relative'>
            <div className='px-[4vw] py-[7vw] w-full h-full flex flex-col items-center justify-between space-y-[10vw] max-sm:py-[20%] max-sm:items-start max-sm:px-[5.5vw]'>
                <div className='w-[90%] max-sm:w-full'>
                    <Copy>
                        <h2 className='text-head-60 font-display text-center max-sm:text-head-80 capitalize max-sm:text-left'>
                           {heading}
                        </h2>
                    </Copy>
                </div>
                <div className='w-full space-y-[3vw]'>
                <div className="flex items-center justify-between gap-y-[5vw] w-full max-sm:flex-col max-sm:items-start max-sm:gap-y-[8vw] max-sm:py-[10vw] ">
                    {uspData.map(({ description, svg, svgElement }, index) => (
                        <div key={index} className="flex items-center w-[22%] justify-start gap-[2vw] max-sm:w-[85%] max-sm:gap-[6vw]">
                            <div className="text-primary-2 mb-1">
                                <svg width="105" height="85" viewBox="0 0 105 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[5vw] w-[5vw] max-sm:w-[18vw] max-sm:h-auto" ref={svg}>
                                    {svgElement}
                                </svg>
                            </div>
                            <Copy>
                                <p className={`text-content-20 `}>{description}</p>
                            </Copy>
                        </div>
                    ))}
                </div>

                <div className='h-[1px] w-full bg-white'></div>
                </div>
            </div>

        </section>
    )
}

export default Wallet