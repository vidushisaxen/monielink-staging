'use client'
import Copy from "../Animations/Copy";
import { DigitalAccounts1, DigitalAccounts2, DigitalAccounts3, DigitalAccounts4} from "../Icons";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Intro = () => {
    const svgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const uspData = [
        {
            description: "Wallet creation and account management",
            width: "w-[48%]",
            svg: svgRefs[0],
            svgElement: <DigitalAccounts1/>
        },
        {
            description: "Instant fund transfers",
            width: "w-[45%]",
            svg: svgRefs[1],
            svgElement: <DigitalAccounts2/>
        },
        {
            description: "Bill payments & top-ups",
            width: "w-[40%]",
            svg: svgRefs[2],
            svgElement: <DigitalAccounts3/>
        },
        {
            description: "Transaction history & notifications",
            width: "w-[40%]",
            svg: svgRefs[3],
            svgElement: <DigitalAccounts4/>
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
        <section className="bg-gradient h-[75vw] relative">
            <div className="px-[4vw] py-[8vw] flex flex-col justify-between items-center h-full w-full relative">
                <div className="text-center text-white w-[80%] flex flex-col items-center gap-10">
                    <Copy>
                        <h2 className="text-head-100 font-display">Digital Accounts</h2>
                    </Copy>
                    <Copy>
                        <p className="text-content-20 w-9/12">Enable customers to open accounts, make transfers, pay bills, and top up airtime directly from your app. Moneylink’s SDK simplifies front-end integration while ensuring secure, fast back-end processing.</p>
                    </Copy>
                </div>
                 <div className="flex flex-row flex-wrap  items-center justify-between w-[50%] gap-y-[5vw]">
                                    {uspData.map(({ description, svg, svgElement }, index) => (
                                        <div key={index} className="flex items-center w-[40%] justify-start gap-[1vw]">
                                            <div className="text-primary-2 mb-1">
                                            <svg width="105" height="85" viewBox="0 0 105 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[6vw] w-[6vw]" ref={svg}>
                                                    {svgElement}
                                                </svg>
                                            </div>
                                            <Copy>
                                                <p className={`text-content-20 `}>{description}</p>
                                            </Copy>
                                        </div>
                                    ))}
                                </div>
                <div className="text-center w-[85%] ">
                    <Copy>
                    <p className="text-head-60 font-display capitalize">Build a powerful, multi-currency digital wallet ecosystem that connects consumers and merchants with seamless payments, security, and scale.</p>
                    </Copy>
                </div>
              
            </div>
        </section>
    )
}

export default Intro;