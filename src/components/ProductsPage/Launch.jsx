"use client";
import React, { useEffect, useRef } from "react";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CloudImplementationIcon } from "@/components/Icons";
import { SecureEnvironmentIcon } from "@/components/Icons";
import { DedicatedSaaSIcon } from "@/components/Icons";
import { SeamlessIntegrationIcon } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Launch = () => {
  const svgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const bgsvgRef = useRef(null);

  const uspData = [
    {
      title: "Cloud Based Implementation",
      description:
        "Deploy dedicated cloud instances with partner-managed access control and firewalls.",
      width: "w-[40%]",
      svg: svgRefs[0],
      svgElement: <CloudImplementationIcon />,
    },
    {
      title: "Dedicated Instant SaaS",
      description:
        "Eliminate heavy upfront licensing costs with our revenue-sharing SaaS model.",
      width: "w-[45%]",
      svg: svgRefs[1],
      svgElement: <DedicatedSaaSIcon />,
    },
    {
      title: "secure environments",
      description:
        "Meet regulatory compliance with secure, isolated environments at lower cost and higher efficiency than on-premise systems.",
      width: "w-[40%]",
      svg: svgRefs[2],
      svgElement: <SecureEnvironmentIcon />,
    },
    {
      title: "Seamless integration",
      description:
        "Seamlessly integrate digital banking experiences using our Super SDK front-end and dedicated cloud back-end — fully managed on Monielink Infrastructure.",
      width: "w-[55%]",
      svg: svgRefs[3],
      svgElement: <SeamlessIntegrationIcon />,
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".center-group", { autoAlpha: 0 });
      gsap.set(".outer-paths path", { transformOrigin: "center" });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bgsvgRef.current,
          start: "top 70%",
        },
      });

      tl.fromTo(
        ".line1",
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 1 }
      ).fromTo(
        ".line2",
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 1 },
        ">-0.5"
      );
      tl.to(".center-group", { autoAlpha: 1, duration: 1 }, ">-0.3");

      gsap.to(".outer-paths path", {
        scale: 1.08,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      });
    }, bgsvgRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      data-theme="orange"
      className="w-screen h-full bg-gradient relative"
      id="launch"
    >
      <div className="px-[4vw] py-[7vw] w-full h-full flex flex-col items-center justify-between pb-[10vw] gap-[10vw] max-sm:py-[15%] max-sm:items-start">
        <div className="text-center text-white w-[80%] max-sm:w-full  ">
          <Copy>
            <h2 className="text-head-60 font-display max-md:text-head-60 max-sm:text-head-100">
              Everything You Need to Launch & Scale
            </h2>
          </Copy>
        </div>
        <div className="flex flex-row flex-wrap  items-center justify-between max-md:justify-evenly max-md:w-full  w-[85%]  gap-y-[10vw] max-md:gap-y-[5vw] mx-auto">
          {uspData.map(({ title, description, svg, svgElement }, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[35%] max-md:w-[50%] justify-start max-sm:w-full"
            >
              <div className="mb-1 max-md:mb-[4vw] max-sm:mb-[6vw]">
                <svg
                  ref={svg}
                  className="h-[7vw] w-[7vw] max-md:w-[15vw] max-md:h-[15vw] max-sm:w-[25vw] max-sm:h-auto"
                  viewBox="0 0 249 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {svgElement}
                </svg>
              </div>
              <Copy>
                <h3 className="text-content-30 font-display mb-5 w-[50%] text-center capitalize max-sm:text-head-80 max-md:w-[70%] max-sm:w-full max-sm:!leading-[1.2] max-sm:mb-[4vw]">
                  {title}
                </h3>
              </Copy>
              <Copy>
                <p className={`text-content-20 text-center w-[98%] max-md:w-[70%] `}>{description}</p>
              </Copy>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 h-[70%] w-[90%] max-md:top-[20%] max-md:hidden max-sm:hidden">
        <svg ref={bgsvgRef}
          className="h-full w-full"
          width="1440"
          height="860"
          viewBox="0 0 1440 860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            className=" line1"
            x1="0.0330839"
            y1="429.43"
            x2="1439.42"
            y2="429.087"
            stroke="#FF8A4A"
          />
          <line
            className=" line2"
            x1="720.23"
            y1="0.128906"
            x2="720.23"
            y2="859.398"
            stroke="#FF8A4A"
          />
          <g className="outer-paths">
          <g filter="url(#filter0_d_43_65)">
            <path
              d="M682.119 348.461H806.885C811.374 348.461 815.014 352.1 815.014 356.59V455.038C815.014 457.183 814.166 459.24 812.656 460.763L789.429 484.172L765.379 508.317C763.854 509.849 761.781 510.709 759.619 510.709H636.288C631.799 510.709 628.16 507.07 628.159 502.581L628.158 403.997C628.158 401.904 628.966 399.891 630.413 398.378L655.979 371.649L676.313 350.9C677.842 349.34 679.935 348.461 682.119 348.461Z"
              stroke="#FF8A4A"
              strokeWidth="1.01996"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#filter1_d_43_65)">
            <path
              d="M674.357 332.509H823.66C829.032 332.509 833.388 336.864 833.388 342.236V460.044C833.388 462.611 832.373 465.074 830.565 466.896L802.771 494.908L773.991 523.801C772.166 525.633 769.686 526.664 767.1 526.664H619.515C614.143 526.664 609.787 522.309 609.787 516.937L609.786 398.966C609.786 396.461 610.753 394.052 612.484 392.242L643.072 360.263L643.073 360.264L667.41 335.428C669.24 333.561 671.744 332.509 674.357 332.509Z"
              stroke="#FF8A4A"
              strokeWidth="1.22054"
              shapeRendering="crispEdges"
            />
          </g>
          </g>
          <g className="center-group">
          <g filter="url(#filter2_d_43_65)">
            <path
              d="M666.39 380.823L683.405 363.46C684.764 362.073 686.624 361.291 688.567 361.291L792.948 361.291C796.939 361.291 800.175 364.527 800.175 368.518V450.881C800.175 452.788 799.421 454.618 798.078 455.971L778.646 475.556L758.525 495.756C757.169 497.118 755.326 497.883 753.405 497.883H650.224C646.233 497.883 642.997 494.647 642.997 490.656L642.996 408.18C642.996 406.319 643.714 404.529 645.001 403.184L666.39 380.823Z"
              fill="white"
            />
            <path
              d="M688.566 361.652H792.947C796.739 361.652 799.813 364.727 799.813 368.519V450.881C799.813 452.692 799.097 454.431 797.821 455.717L778.389 475.302L758.269 495.501C756.98 496.794 755.23 497.521 753.404 497.521H650.225C646.433 497.521 643.359 494.448 643.358 490.656L643.357 408.18C643.357 406.412 644.04 404.711 645.262 403.434L666.647 381.075L666.648 381.076L683.663 363.713C684.954 362.395 686.721 361.652 688.566 361.652Z"
              stroke="white"
              strokeWidth="0.722723"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M689.318 402.73L720.212 420.543L751.487 402.79L751.487 444.6L742.569 449.654L742.569 418.107L720.178 430.817L698.236 418.166L698.236 449.654L689.318 444.6L689.318 402.73Z"
            fill="#1D1D1D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M700.896 440.473L720.189 451.644L739.91 440.32L739.91 450.909L720.189 462.187L700.896 451.042L700.896 440.473Z"
            fill="#FE6E00"
          />
          </g>
          <defs>
            <filter
              id="filter0_d_43_65"
              x="605.447"
              y="326.614"
              width="237.461"
              height="212.854"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2.59161" dy="3.45548" />
              <feGaussianBlur stdDeviation="12.3965" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_43_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_43_65"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_43_65"
              x="582.608"
              y="306.365"
              width="284.159"
              height="254.712"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="3.10126" dy="4.13501" />
              <feGaussianBlur stdDeviation="14.8343" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_43_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_43_65"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_43_65"
              x="624.422"
              y="343.44"
              width="198.663"
              height="178.076"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2.16817" dy="2.89089" />
              <feGaussianBlur stdDeviation="10.3711" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_43_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_43_65"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Launch;
