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
        "Deploy dedicated cloud instances with partner-managed access, security controls, and custom firewalls.",
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
      title: "Secure Environments",
      description:
        "Maintain regulatory compliance through isolated, cloud-based environments designed for high efficiency and reduced operational costs compared to on-premise infrastructure.",
      width: "w-[40%]",
      svg: svgRefs[2],
      svgElement: <SecureEnvironmentIcon />,
    },
    {
      title: "Seamless integration",
      description:
        "Seamlessly integrate digital banking experiences using our Super SDK front-end and dedicated cloud back-end — fully managed on Monielink’s Infrastructure.",
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
            // markers:true,
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
        { drawSVG: "-100%", duration: 1 },
        ">-0.8"
      )
        .fromTo(
          ".line2",
          { drawSVG: "0%" },
          { drawSVG: "-100%", duration: 1 },
          ">-0.8"
        )
        .fromTo(
          ".line3",
          { drawSVG: "0%" },
          { drawSVG: "-100%", duration: 1 },
          ">-0.8"
        )
        .fromTo(
          ".line4",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 1 },
          ">-0.8"
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
        <div className="flex flex-row flex-wrap  items-center justify-between max-md:justify-between max-md:w-full  w-[85%]  gap-y-[10vw] max-md:gap-y-[5vw] mx-auto">
          {uspData.map(({ title, description, svg, svgElement }, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[35%] max-md:w-[50%] justify-start max-sm:w-full"
            >
              <div className="mb-1 max-md:mb-[4vw] max-sm:mb-[6vw]">
                <svg
                  ref={svg}
                  className="h-[6vw] w-[6vw] max-md:w-[15vw] max-md:h-[15vw] max-sm:w-[25vw] max-sm:h-auto"
                  viewBox="0 0 249 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {svgElement}
                </svg>
              </div>
              <Copy>
                <h3 className="text-content-30 font-medium font-display mb-5 w-[50%] text-center capitalize max-sm:text-head-80 max-md:w-[85%] max-sm:w-full max-sm:!leading-[1.2] max-sm:mb-[4vw]">
                  {title}
                </h3>
              </Copy>
              <Copy>
                <p
                  className={`text-content-20 text-center w-[98%] max-md:w-[85%] `}
                >
                  {description}
                </p>
              </Copy>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 h-[70%] w-[90%] max-md:top-[20%] max-md:hidden max-sm:hidden">
        <svg
          ref={bgsvgRef}
          className="h-full w-full"
          width="1445"
          height="861"
          viewBox="0 0 1445 861"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.03125 430.43L722.584 430.258"
            stroke="#FF8A4A"
            strokeLinecap="round"
            className="line1 rotate-[360deg]"
          />
          <path
            d="M1444.14 430.43L722.588 430.258"
            stroke="#FF8A4A"
            strokeLinecap="round"
            className="line2"
          />
          <path
            d="M721.227 1.12891L721.227 427.193"
            stroke="#FF8A4A"
            strokeLinecap="round"
            className="line3"
          />
          <path
            d="M721.227 427.191L721.227 860.396"
            stroke="#FF8A4A"
            strokeLinecap="round"
            className="line4"
          />
          <g className="outer-paths">
            <g filter="url(#filter0_d_160_653)">
              <path
                d="M683.119 349.463H807.885C812.374 349.463 816.014 353.102 816.014 357.592V456.04C816.014 458.185 815.166 460.242 813.655 461.765L790.429 485.174L766.379 509.319C764.854 510.851 762.781 511.711 760.619 511.711H637.288C632.799 511.711 629.159 508.072 629.159 503.583L629.158 404.999C629.158 402.906 629.966 400.893 631.413 399.38L656.979 372.651L677.312 351.902C678.841 350.342 680.935 349.463 683.119 349.463Z"
                stroke="#FF8A4A"
                strokeWidth="1.01996"
                shapeRendering="crispEdges"
              />
            </g>
            <g filter="url(#filter1_d_160_653)">
              <path
                d="M675.354 333.509H824.656C830.028 333.509 834.384 337.864 834.384 343.236V461.044C834.384 463.611 833.369 466.074 831.562 467.896L803.767 495.908L774.987 524.801C773.162 526.633 770.682 527.664 768.096 527.664H620.511C615.139 527.664 610.783 523.309 610.783 517.937L610.782 399.966C610.782 397.461 611.749 395.052 613.48 393.242L644.068 361.263L644.069 361.264L668.406 336.428C670.236 334.561 672.74 333.509 675.354 333.509Z"
                stroke="#FF8A4A"
                strokeWidth="1.22054"
                shapeRendering="crispEdges"
              />
            </g>
          </g>
          <g className="center-group">
            <g filter="url(#filter2_d_160_653)">
              <path
                d="M667.386 381.821L684.401 364.458C685.76 363.071 687.621 362.289 689.563 362.289L793.944 362.289C797.935 362.289 801.171 365.525 801.171 369.516V451.879C801.171 453.786 800.417 455.616 799.074 456.969L779.642 476.554L759.521 496.754C758.165 498.116 756.322 498.881 754.401 498.881H651.22C647.229 498.881 643.993 495.645 643.993 491.654L643.992 409.178C643.992 407.317 644.71 405.527 645.997 404.182L667.386 381.821Z"
                fill="white"
              />
              <path
                d="M689.562 362.65H793.943C797.735 362.65 800.81 365.725 800.81 369.517V451.879C800.81 453.691 800.093 455.429 798.817 456.715L779.385 476.3L759.265 496.499C757.976 497.792 756.226 498.52 754.4 498.52H651.221C647.429 498.52 644.355 495.446 644.354 491.654L644.354 409.178C644.354 407.41 645.036 405.709 646.258 404.432L667.644 382.073L667.645 382.074L684.659 364.711C685.95 363.393 687.718 362.65 689.562 362.65Z"
                stroke="white"
                strokeWidth="0.722723"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M690.312 403.73L721.206 421.543L752.481 403.79L752.481 445.6L743.563 450.654L743.563 419.107L721.172 431.817L699.231 419.166L699.231 450.654L690.312 445.6L690.312 403.73Z"
              fill="#1D1D1D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M701.891 441.473L721.183 452.644L740.904 441.32L740.904 451.909L721.183 463.187L701.891 452.042L701.891 441.473Z"
              fill="#FE6E00"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_160_653"
              x="606.447"
              y="327.616"
              width="237.461"
              height="212.856"
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
                result="effect1_dropShadow_160_653"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_160_653"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_160_653"
              x="583.604"
              y="307.365"
              width="284.158"
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
                result="effect1_dropShadow_160_653"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_160_653"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_160_653"
              x="625.418"
              y="344.438"
              width="198.664"
              height="178.078"
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
                result="effect1_dropShadow_160_653"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_160_653"
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
