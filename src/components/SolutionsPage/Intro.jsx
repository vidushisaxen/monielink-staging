'use client'
import Copy from "../Animations/Copy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Intro = () => {
    const svgRef = useRef(null);
    const group1Ref = useRef(null);
        const group2Ref = useRef(null);
    useGSAP(() => {
        const paths = svgRef.current?.querySelectorAll(".svg-path");
        const g1 = group1Ref.current;
        const g2 = group2Ref.current;
        if (paths) {
            // Animate drawing
            gsap.from(paths, {
                scrollTrigger: {
                    trigger: svgRef.current,
                    start: "top 80%",
                },
                duration: 2,
                drawSVG: 0,
                stagger: 0.1,
            });

            gsap.to(g1, {
                rotate: 360,
                transformOrigin: "50% 50%",
                repeat: -1,
                ease: "linear",
                duration: 15,
            });

            gsap.to(g2, {
                rotate: -360,
                transformOrigin: "50% 50%",
                repeat: -1,
                ease: "linear",
                duration: 15,
            });
        }
    }, []);

    return (
        <section data-theme="orange" className="bg-gradient h-[90vh] relative">
            <div className="px-[4vw] flex justify-center items-center h-full w-full relative">
                <div className="text-center text-white w-1/2 flex flex-col items-center gap-10 max-sm:w-full">
                    <Copy>
                        <h2 className="text-head-100 font-display">Find the Right Solution for You</h2>
                    </Copy>
                    <Copy>
                        <p className="text-content-20 w-9/12">Enable seamless digital banking experiences for your customers through your mobile app. The Moneylink Super SDK empowers banks and fintechs to launch B2B2C services quickly, securely, and at scale — all from a single integration.</p>
                    </Copy>
                </div>
                <div className="absolute w-1/2 max-sm:w-[150%]">
                    {/* <Image className="" src={"/assets/shapes/solutions-intro.svg"} alt="solutions intro image" width={900} height={900} /> */}
                    <svg ref={svgRef} className="h-full w-full" width="1040" height="1026" viewBox="0 0 1040 1026" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g ref={group1Ref}>
                    <rect className="svg-path" x="0.985747" y="652.069" width="759.89" height="759.891" rx="199.5" transform="rotate(-60 0.985747 652.069)" stroke="#FF8A4A" />
                    <path className="svg-path" d="M205.109 299.45L131.331 429.96" stroke="url(#paint1_linear_194_18599)" strokeWidth="2" strokeLinecap="round" />
                    <path className="svg-path" d="M869.018 276.469L739.221 200.854" stroke="url(#paint2_linear_194_18599)" strokeWidth="2" strokeLinecap="round" />
                    <path className="svg-path" d="M421.312 894.236L291.516 818.622" stroke="url(#paint3_linear_194_18599)" strokeWidth="2" strokeLinecap="round" />
                    <path className="svg-path" d="M880.887 646.676L807.108 777.186" stroke="url(#paint4_linear_194_18599)" strokeWidth="2" strokeLinecap="round" />
                    </g>
                        <g ref={group2Ref}>
                        <rect className="svg-path" x="0.788741" y="374.668" width="759.89" height="759.891" rx="199.5" transform="rotate(-30.0814 0.788741 374.668)" stroke="#FF8A4A" />
                        <path className="svg-path" d="M300.42 201.509L170.585 276.469" stroke="url(#paint0_linear_194_18599)" strokeWidth="2" strokeLinecap="round" />
                        <path className="svg-path" d="M903.82 730.845L773.985 805.805" stroke="url(#paint5_linear_194_18599)" strokeWidth="2" strokeLinecap="round" />
                        <path className="svg-path" d="M746.613 146.544L821.615 276.492" stroke="url(#paint6_linear_194_18599)" strokeWidth="2" strokeLinecap="round" />
                        <path className="svg-path" d="M168.617 663.862L243.619 793.81" stroke="url(#paint7_linear_194_18599)" strokeWidth="2" strokeLinecap="round" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_194_18599" x1="289.993" y1="208.683" x2="293.384" y2="216.319" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF5E02" stopOpacity="0" />
                                <stop offset="1" stopColor="white" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_194_18599" x1="199.771" y1="310.926" x2="206.57" y2="315.782" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#FF5E02" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_194_18599" x1="858.597" y1="269.241" x2="862.019" y2="261.619" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#FF5E02" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_194_18599" x1="410.892" y1="887.009" x2="414.314" y2="879.386" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF5E02" stopOpacity="0" />
                                <stop offset="1" stopColor="white" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_194_18599" x1="875.548" y1="658.152" x2="882.347" y2="663.008" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF5E02" stopOpacity="0" />
                                <stop offset="1" stopColor="white" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_194_18599" x1="893.393" y1="738.02" x2="896.784" y2="745.656" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#FF5E02" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_194_18599" x1="752.059" y1="157.98" x2="745.304" y2="162.897" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#FF5E02" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_194_18599" x1="174.063" y1="675.298" x2="167.308" y2="680.215" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF5E02" stopOpacity="0" />
                                <stop offset="1" stopColor="white" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
            </div>
        </section>
    )
}

export default Intro;