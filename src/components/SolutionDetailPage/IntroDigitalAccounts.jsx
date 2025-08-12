'use client'
import Copy from "../Animations/Copy";
import { USP10, USP7, USP8, USP9} from "../Icons";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const IntroDigitalAccounts = ({introData}) => {
    const svgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const uspData = [
        {
            description: "Digital Accounts",
            width: "w-[40%]",
            svg: svgRefs[0],
            svgElement: <USP7/>
        },
        {
            description: "Prepaid & Credit Card Accounts",
            width: "w-[45%]",
            svg: svgRefs[1],
            svgElement: <USP8/>
        },
        {
            description: "Loan Accounts",
            width: "w-[40%]",
            svg: svgRefs[2],
            svgElement: <USP9/>
        },
        {
            description: "Rewards & Redemption Accounts",
            width: "w-[45%]",
            svg: svgRefs[3],
            svgElement: <USP10/>
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
        <section data-theme="orange" className="bg-gradient h-[75vw] max-md:h-fit relative max-sm:h-fit w-screen overflow-hidden">
            <div className="px-[4vw] py-[8vw] flex flex-col justify-between items-center h-full w-full relative max-sm:items-start max-sm:px-[5.5vw] max-sm:py-[15%] max-md:py-[15%]">
                <div className="text-center text-white w-[80%] flex flex-col items-center gap-10 max-sm:w-full max-sm:text-left max-sm:items-start">
                    <Copy>
                        <h2 className="text-head-100 font-display">Digital Accounts
                        </h2>
                    </Copy>
                    <Copy>
                        <p className="text-content-20 w-9/12 max-md:w-[100%] max-sm:w-[95%]">Monielink Account Management Platform supports all possible use-cases that our Partners may require to offer & manage Digital Accounts, Credit & Pre-paid card accounts, Loan Accounts & accounts for managing rewards & redemption . Monielink’s SDK simplifies front-end integration while ensuring secure, fast back-end processing. 
                        </p>
                    </Copy>
                </div>
                 <div className="flex flex-row max-sm:py-0 max-md:py-[10vw] flex-wrap  items-center justify-between max-sm:px-0 max-md:px-[4vw] w-[50%] max-md:w-full gap-y-[5vw] max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:mt-[15vw] max-sm:mb-[20vw]">
                                    {uspData.map(({ description, svg, svgElement,width }, index) => (
                                        <div key={index} className={`flex items-center max-sm:flex-row max-md:flex-col  max-md:w-[40%] justify-start gap-[1vw] max-md:gap-[2vw] max-sm:w-[80%] max-sm:gap-[7vw] ${width}`}>
                                            <div className="text-primary-2 mb-1 w-fit">
                                            <svg width="105" height="85" viewBox="0 0 105 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[6vw] w-[6vw] max-sm:w-[18vw] max-sm:h-[18vw] max-md:w-[12vw] max-md:h-[12vw]" ref={svg}>
                                                    {svgElement}
                                                </svg>
                                            </div>
                                            <Copy>
                                                <p className={`text-content-20 max-sm:text-left max-md:text-center `}>{description}</p>
                                            </Copy>
                                        </div>
                                    ))}
                                </div>
                <div className="text-center w-[85%] max-sm:text-left max-sm:w-full ">
                    <Copy>
                    <p className="text-head-60 max-sm:text-head-60 max-md:text-[4.5vw] max-sm:pt-0 max-md:pt-[4vw] font-display ">Build a powerful, multi-currency digital wallet or account ecosystem that connects consumers and merchants with seamless payments, security, and scale.                    </p>
                    </Copy>
                </div>
              
            </div>
        </section>
    )
}

export default IntroDigitalAccounts;