"use client";
import Copy from "@/components/Animations/Copy";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const Diagram = () => {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);

  return (
    <>
      <section
        data-theme="orange"
        className="w-screen h-full overflow-hidden bg-gradient relative max-sm:py-[15%]"
        ref={sectionRef}
      >
        <div className="px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw] max-sm:px-[5.5vw]">
          <div className="w-[70%] max-sm:w-full">
            <Copy>
              <h2 className="text-head-100 font-display text-center capitalize max-sm:text-left">
                Flexible Card Payments with Tap, Dip, or Swipe
              </h2>
            </Copy>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <svg
              className="w-full h-full"
              ref={svgRef}
              width="669"
              height="395"
              viewBox="0 0 669 395"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="card">
                <path
                  d="M78.2726 197.716L2.32804 102.785C1.33146 101.539 2.12293 99.6855 3.71191 99.5436L248.099 77.7233C250.56 77.5036 252.985 78.4335 254.668 80.2428L339.266 171.186C340.391 172.395 339.65 174.368 338.008 174.538L85.3428 200.676C82.636 200.956 79.9725 199.841 78.2726 197.716Z"
                  fill="#FFFEFE"
                  stroke="white"
                />
              </g>
              <g className="device">
                <path
                  d="M637.5 120.5L641.968 221.28C641.989 221.751 641.88 222.218 641.652 222.631L634.376 235.818C634.131 236.263 633.759 236.624 633.308 236.857L417.737 348.072C416.031 348.952 414 347.714 414 345.796V328.5M637.5 120.5L624.609 112.943C623.65 112.381 622.438 112.502 621.608 113.242L419.856 293.236C419.312 293.722 419 294.418 419 295.148V319.765C419 320.245 418.865 320.716 418.611 321.123L414 328.5M637.5 120.5L622.181 108.785C621.205 108.039 619.837 108.091 618.92 108.908L414.858 290.736C414.312 291.222 414 291.918 414 292.649V328.5"
                  stroke="white"
                />
                <path
                  d="M107 261.193L112.421 315.4L144.945 337.083L329.248 394H359.062M107 261.193L120.552 272.034L329.248 326.241L359.062 320.821M107 261.193L411 10.5L437.662 1L651.779 38.9448L668.041 52.4966M359.062 394V320.821M359.062 394L668.041 238V52.4966M359.062 320.821L668.041 52.4966M125.972 309.979L123.262 285.586L139.524 289.762M125.972 309.979L323.828 365.5V350M125.972 309.979L142.234 301.848M142.234 301.848L323.828 350M142.234 301.848L139.524 289.762M323.828 350V337.083L139.524 289.762M144.945 250.352L359.062 301.848L638.228 57.9172L429.531 19.9724L144.945 250.352Z"
                  stroke="white"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Diagram;
