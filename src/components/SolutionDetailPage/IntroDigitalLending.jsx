'use client'
import Copy from "../Animations/Copy";
import { USP11, USP12, USP13, USP14, USP8} from "../Icons";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const IntroDigitalLending = () => {
    const svgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const uspData = [
        {
            description: "Credit Origination with instant under-writing based on customized rules",
            width: "w-[40%]",
            svg: svgRefs[0],
            svgElement: <USP11/>
        },
        {
            description: "Credit Disbursement with instant & work-flow based approval process",
            width: "w-[45%]",
            svg: svgRefs[1],
            svgElement: <USP12/>
        },
        {
            description: "Loan Management over the lifecycle of Credit Products",
            width: "w-[45%]",
            svg: svgRefs[2],
            svgElement: <USP13/>
        },
        {
            description: "Collection services for due & delinquent payments as well as multi-bank collections ",
            width: "w-[45%]",
            svg: svgRefs[3],
            svgElement: <USP8/>
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
        <section data-theme="orange" className="bg-gradient h-[75vw] max-md:h-fit relative max-sm:h-fit w-screen overflow-hidden">
            <div className="px-[4vw] py-[8vw] flex flex-col justify-between items-center h-full w-full relative max-sm:items-start max-sm:px-[5.5vw] max-sm:py-[15%] max-md:py-[15%]">
                <div className="text-center text-white w-[80%] flex flex-col items-center gap-10 max-sm:w-full max-sm:text-center max-sm:items-center">
                    <Copy>
                        <h2 className="text-head-100 font-display">Digital Lending
                        </h2>
                    </Copy>
                    <Copy>
                        <p className="text-content-20 w-9/12 max-md:w-[100%] max-sm:w-[95%] max-md:text-center">Our cloud-based loan management system enables lenders to Instantly Originate and Disburse / Issue loans & credit cards, Manage them throughout their lifecycle, and collect both due and delinquent payments from customers’ bank accounts across multiple banks.
                        </p>
                    </Copy>
                </div>
                 <div className="flex flex-row max-sm:py-0 max-md:py-[10vw] flex-wrap  items-center justify-between max-sm:px-0 max-md:px-[4vw] w-[60%] max-md:w-full gap-y-[5vw] max-sm:gap-y-[15vw] max-md:gap-y-[10vw] max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:mt-[15vw] max-sm:mb-[20vw]">
                                    {uspData.map(({ description, svg, svgElement,width }, index) => (
                                        <div key={index} className={`flex items-center max-sm:flex-col max-md:flex-col  max-md:w-full  justify-start gap-[1vw] max-md:gap-[2vw] max-sm:w-full max-sm:gap-[7vw] ${width}`}>
                                            <div className="text-primary-2 mb-1 w-fit">
                                            <svg width="105" height="85" viewBox="0 0 105 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[6vw] w-[6vw] max-sm:w-[20vw] max-sm:h-auto max-md:w-[12vw] max-md:h-[12vw]" ref={svg}>
                                                    {svgElement}
                                                </svg>
                                            </div>
                                            <Copy>
                                                <p className={`text-content-20 max-sm:text-content-20 max-sm:text-center max-md:text-center  max-md:text-[2.5vw] max-md:w-[60%] max-sm:w-full`}>{description}</p>
                                            </Copy>
                                        </div>
                                    ))}
                                </div>
                <div className="text-center w-[85%] max-sm:text-center max-sm:w-full max-md:text-center">
                    <Copy>
                    <p className="text-head-60 max-sm:text-head-60 max-md:text-[4.5vw] max-sm:pt-0 max-md:pt-[4vw] font-display ">Providing comprehensive Credit Management throughout the entire lifecycle of a credit product.
                    </p>
                    </Copy>
                </div>
              
            </div>
        </section>
    )
}

export default IntroDigitalLending;