"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

export default function Overview2() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const gradients = svgRef.current.querySelectorAll('linearGradient');
    gradients.forEach((gradient, index) => {
      const stops = gradient.querySelectorAll('stop');
      const tl = gsap.timeline({ 
        repeat: -1, 
        repeatDelay: 0, 
        delay: index * 0.4 
      });
      
      tl.set([stops[0], stops[1], stops[2]], {
        attr: { 
          offset: (i) => [-0.1, -0.05, 0][i] 
        }
      })
      .to([stops[0], stops[1], stops[2]], {
        attr: { 
          offset: (i) => [1, 1.05, 1.1][i] 
        },
        duration: 5,
        ease: "none"
      });
    });

  }, []);

  return (
    <section id="overview" className="h-fit w-full pt-[10vw] bg-background">
      <div className="h-fit relative pt-[4vw] text-foreground flex items-end justify-end w-full ">
        <div className="w-[100vw] h-auto flex items-center justify-center">
          <svg 
            ref={svgRef}
            width="1922" 
            height="1446" 
            viewBox="0 0 1922 1446" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1H541C651.457 1 741 90.543 741 201V1445" stroke="#282828"/>
            <path d="M1 1H541C651.457 1 741 90.543 741 201V1445" stroke="url(#paint0_linear_398_152431)" strokeLinecap="round"/>
            <path d="M1921 1H1381C1270.54 1 1181 90.543 1181 201V1445" stroke="#282828"/>
            <path d="M1921 1H1381C1270.54 1 1181 90.543 1181 201V1445" stroke="url(#paint1_linear_398_152431)" strokeLinecap="round"/>
            <path d="M1 116H651C761.457 116 851 205.543 851 316V1445" stroke="#282828"/>
            <path d="M1 116H651C761.457 116 851 205.543 851 316V1445" stroke="url(#paint2_linear_398_152431)" strokeLinecap="round"/>
            <path d="M1921 116H1271C1160.54 116 1071 205.543 1071 316V1445" stroke="#282828"/>
            <path d="M1921 116H1271C1160.54 116 1071 205.543 1071 316V1445" stroke="url(#paint3_linear_398_152431)" strokeLinecap="round"/>
            <path d="M1 232H761C871.457 232 961 321.543 961 432V1445" stroke="#282828"/>
            <path d="M1 232H761C871.457 232 961 321.543 961 432V1445" stroke="url(#paint4_linear_398_152431)" strokeLinecap="round"/>
            <path d="M1921 232H1161C1050.54 232 961 321.543 961 432V1445" stroke="#282828"/>
            <path d="M1921 232H1161C1050.54 232 961 321.543 961 432V1445" stroke="url(#paint5_linear_398_152431)" strokeLinecap="round"/>
            <defs>
              <linearGradient id="paint0_linear_398_152431" x1="1" y1="1" x2="741" y2="1445" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#282828" stopOpacity="0"/>
                <stop offset="0.05" stopColor="#FE6E00"/>
                <stop offset="0.1" stopColor="#282828" stopOpacity="0"/>
                <stop offset="1" stopColor="#282828" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_398_152431" x1="1921" y1="1" x2="1181" y2="1445" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#282828" stopOpacity="0"/>
                <stop offset="0.05" stopColor="#FE6E00"/>
                <stop offset="0.1" stopColor="#282828" stopOpacity="0"/>
                <stop offset="1" stopColor="#282828" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint2_linear_398_152431" x1="1" y1="116" x2="851" y2="1445" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#282828" stopOpacity="0"/>
                <stop offset="0.05" stopColor="#FE6E00"/>
                <stop offset="0.1" stopColor="#282828" stopOpacity="0"/>
                <stop offset="1" stopColor="#282828" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint3_linear_398_152431" x1="1921" y1="116" x2="1071" y2="1445" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#282828" stopOpacity="0"/>
                <stop offset="0.05" stopColor="#FE6E00"/>
                <stop offset="0.1" stopColor="#282828" stopOpacity="0"/>
                <stop offset="1" stopColor="#282828" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint4_linear_398_152431" x1="1" y1="232" x2="961" y2="1445" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#282828" stopOpacity="0"/>
                <stop offset="0.05" stopColor="#FE6E00"/>
                <stop offset="0.1" stopColor="#282828" stopOpacity="0"/>
                <stop offset="1" stopColor="#282828" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint5_linear_398_152431" x1="1921" y1="232" x2="961" y2="1445" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#282828" stopOpacity="0"/>
                <stop offset="0.05" stopColor="#FE6E00"/>
                <stop offset="0.1" stopColor="#282828" stopOpacity="0"/>
                <stop offset="1" stopColor="#282828" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}