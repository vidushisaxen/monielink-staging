'use client'
import Copy from "../Animations/Copy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useEffect, useRef } from "react";
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
                duration: 10,
            });

            gsap.to(g2, {
                rotate: -360,
                transformOrigin: "50% 50%",
                repeat: -1,
                ease: "linear",
                duration: 10,
            });
        }
    }, []);

    return (
        <section data-theme="orange" className="bg-gradient overflow-hidden h-screen max-md:h-[70vh] max-sm:h-[85vh] relative">
            <div className="px-[4vw] flex justify-center items-center h-full w-full relative">
                <div className="text-center text-white w-1/2 flex flex-col items-center gap-10 max-sm:w-full max-md:w-[60%]">
                    <Copy>
                        <h2 className="text-head-100 font-display">Find the Right Solution for You  </h2>
                    </Copy>
                    <Copy>
                        <p className="text-content-20 w-3/5 max-sm:w-[85%] max-md:w-full">A comprehensive suite of solutions, supported by powerful enablers like digital KYC, secure soft-token 2FA, personalized loyalty programs, and chatbot-based customer support. Together, our solutions drive scalable growth, boost operational efficiency, and deliver a superior customer experience. </p>
                    </Copy>
                </div>
                <div className="absolute w-[75%] max-sm:w-[190%] max-md:w-[150%]">
<svg ref={svgRef} className="h-full w-full" width="1453" height="1453" viewBox="0 0 1453 1453" fill="none" xmlns="http://www.w3.org/2000/svg">
<g ref={group1Ref}>
<path className="svg-path" d="M487.521 380.821C542.618 285.376 664.669 252.686 760.096 307.815L1071.63 487.793C1167.02 542.898 1199.69 664.884 1144.61 760.285L964.693 1071.93C909.599 1167.36 787.57 1200.05 692.147 1144.94L380.598 965.015C285.198 909.92 252.513 787.926 307.59 692.516L487.521 380.821Z" stroke="#FF8A4A"/>
<path className="svg-path" d="M486.655 380.321C542.029 284.398 664.691 251.544 760.596 306.949L1072.13 486.927C1168 542.308 1200.83 664.906 1145.48 760.785L965.559 1072.43C910.188 1168.33 787.548 1201.19 691.647 1145.81L380.098 965.88C284.22 910.509 251.371 787.905 306.724 692.016L486.655 380.321Z" stroke="url(#paint0_linear_1600_42)"/>
</g>
<g ref={group2Ref}>
<path className="svg-path" d="M740.504 306.705C841.636 262.912 959.119 309.417 1002.88 410.564L1145.74 740.774C1189.48 841.876 1143 959.295 1041.91 1003.06L711.682 1146.04C610.562 1189.83 493.095 1143.34 449.327 1042.21L306.425 712.034C262.667 610.931 309.142 493.496 410.237 449.72L740.504 306.705Z" stroke="#FF8A4A"/>
<path className="svg-path" d="M740.107 305.788C841.746 261.776 959.817 308.513 1003.8 410.166L1146.66 740.377C1190.61 841.986 1143.9 959.994 1042.3 1003.98L712.079 1146.96C610.452 1190.96 492.397 1144.24 448.409 1042.61L305.508 712.431C261.531 610.821 308.238 492.798 409.84 448.802L740.107 305.788Z" stroke="url(#paint1_linear_1600_42)"/>
</g>
<defs>
<linearGradient id="paint0_linear_1600_42" x1="293.259" y1="657.723" x2="485.055" y2="344.232" gradientUnits="userSpaceOnUse" gradientTransform="translate(0, 0)">

<stop stopColor="#FE8E51" stopOpacity="0"/>
<stop offset="0.5" stopColor="white"/>
<stop offset="1" stopColor="#FE8E51" stopOpacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_1600_42" x1="419.47" y1="413.241" x2="760.333" y2="275.857" gradientUnits="userSpaceOnUse" gradientTransform="translate(0, 0)">
<stop stopColor="#FE8E51" stopOpacity="0"/>
<stop offset="0.5" stopColor="white"/>
<stop offset="1" stopColor="#FE8E51" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>


                </div>
            </div>
        </section>
    )
}

export default Intro;