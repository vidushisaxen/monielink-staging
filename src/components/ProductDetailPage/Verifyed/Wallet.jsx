'use client'
import React from 'react'

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Copy from '@/components/Animations/Copy';
import { lineAnim } from '@/components/Animations/gsapAnimations';
import { USP8, USP9 } from '@/components/Icons';


gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Wallet = () => {
    lineAnim();
    const svgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const uspData = [
        {
            description: "Self assisted Soft-Token set-up on VERIFYED app for 2FA",
            width: "w-[40%]",
            svg: svgRefs[0],
            svgElement: <USP8/>
        },
        {
            description: "Omnichannel 2FA solution for Fraud Protection",
            width: "w-[40%]",
            svg: svgRefs[1],
            svgElement: <USP9 />
        },
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
            <div className='px-[4vw] py-[7vw] w-full h-full flex flex-col items-center justify-between space-y-[10vw] max-md:py-[10vw] max-sm:py-[20%] max-sm:items-start max-sm:px-[5.5vw]'>
                <div className='w-[90%] max-md:w-[95%] max-sm:w-full'>
                    <Copy>
                        <h2 className='text-head-60 font-display text-center max-sm:text-head-80 capitalize max-sm:text-center max-md:text-center'>
                        With Verifyed Authenticator, enhance user security by turning on two-factor authentication
                        </h2>
                    </Copy>
                </div>
                <div className='w-full space-y-[3vw]'>
                <div className="flex items-center justify-center gap-[8vw] gap-y-[5vw] w-full max-sm:flex-col max-md:justify-center max-md:gap-[4vw] max-md:gap-y-[10vw]  max-md:flex-wrap max-sm:items-start  max-sm:gap-y-[15vw] max-sm:py-[10vw] ">
                    {uspData.map(({ description, svg, svgElement }, index) => (
                        <div key={index} className="flex items-center w-[23%] justify-start gap-[1vw] max-sm:w-full max-md:w-[45%] max-md:flex-col max-sm:flex-col max-md:items-center max-md:gap-[5vw] max-sm:gap-[6vw]">
                            <div className="text-primary-2 mb-1">
                                <svg width="105" height="85" viewBox="0 0 105 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[5vw] w-[5vw] max-md:h-[15vw] max-md:w-[15vw] max-sm:w-[18vw] max-sm:h-auto" ref={svg}>
                                    {svgElement}
                                </svg>
                            </div>
                            <Copy>
                                <p className={`text-content-20 max-md:text-center max-sm:text-center max-sm:text-content-20 max-md:text-[2.5vw]`}>{description}</p>
                            </Copy>
                        </div>
                    ))}
                </div>

                <div className='h-[1px] w-full max-md:mt-[5vw] bg-white lineDraw'></div>
                </div>
            </div>

        </section>
    )
}

export default Wallet