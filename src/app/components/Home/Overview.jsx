"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

export default function Overview() {
  const svgPathsRef = useRef([]);

  useEffect(() => {
    let overviewText = SplitText.create(".overviewText", {
      type: "lines",
      linesClass: "overviewTextLines",
      mask: "lines",
    });
    let findText = SplitText.create(".findText", {
      type: "lines",
      linesClass: "findTextLines",
      mask: "lines",
    });
    let solutionText = SplitText.create(".solutionText", {
      type: "lines",
      linesClass: "solutionTextLines",
      mask: "lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#overview",
        start: "top 80%",
        end: "bottom top",
        once: true,
      },
    });
    let ctx = gsap.context(() => {
      gsap.set(".overviewTextLines", {
        y: "100%",
      });
      gsap.set(".findTextLines", {
        y: "100%",
      });
      gsap.set(".solutionTextLines", {
        y: "100%",
      });
      tl.to(".overviewTextLines", {
        y: "0%",
        duration: 1,
        stagger: 0.08,
        ease: "power3.inOut",
      });

      gsap.set(".subtitle", { y: "100%" });
      tl.to(
        ".subtitle",
        {
          y: "0%",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      );
      tl.to(
        [".numberTranslate", ".number6Translate"],
        {
          y: (i, target) => target.classList.contains("number6Translate") ? "-60vw" : "-20vw",
          duration: (i, target) => target.classList.contains("number6Translate") ? 2.2 : 2,
          ease: "power3.inOut",
        },'<-.5'
      );

      // Animate all SVG paths
      if (svgPathsRef.current && svgPathsRef.current.length > 0) {
        svgPathsRef.current.forEach((path, idx) => {
          if (path) {
            gsap.set(path, { drawSVG: "0%" });
          }
        });
        tl.to(
          svgPathsRef.current,
          {
            drawSVG: "100%",
            duration: 10,
            ease: "power2.inOut",
            stagger: 0.08,
            delay: 0.4,
          },
          "<-.5"
        );
      }

      tl.to(
        ".findTextLines",
        {
          y: "0%",
          duration: 1,
          stagger: 0.08,

          ease: "power3.inOut",
        },
        "<+.5"
      );
      tl.to(
        ".solutionTextLines",
        {
          y: "0%",
          duration: 1,
          ease: "power3.inOut",
        },
        "<+.5"
      );
    });
    return () => {
      ctx.revert();
      if (overviewText) overviewText.revert();
    };
  }, []);

  const setSvgPathRef = (el, idx) => {
    svgPathsRef.current[idx] = el;
  };

  const svgPaths = [
    {
      d: "M24.2852 232.223H760C870.181 232.223 959.5 321.542 959.5 431.723V1444.11H-175.215V431.723L-175.211 430.433C-174.517 320.845 -85.4654 232.223 24.2852 232.223Z",
      stroke: "#282828",
      
    },
    {
      d: "M-85.7148 116.635H650C760.181 116.635 849.5 205.955 849.5 316.135V1444.11H-285.215V316.135C-285.215 205.955 -195.896 116.636 -85.7148 116.635Z",
      stroke: "#282828",
    },
    {
      d: "M2010 116.635H1274.29C1164.1 116.635 1074.79 205.955 1074.79 316.135V1444.11H2209.5V316.135C2209.5 205.955 2120.18 116.636 2010 116.635Z",
      stroke: "#282828",
    },
    {
      d: "M-195.715 1.04834H540C650.181 1.04834 739.5 90.3675 739.5 200.548V1444.11H-395.215V200.548C-395.215 90.3676 -305.896 1.04835 -195.715 1.04834Z",
      stroke: "#282828",
    },
    {
      d: "M2120 1.04834H1384.29C1274.1 1.04834 1184.79 90.3675 1184.79 200.548V1444.11H2319.5V200.548C2319.5 90.3676 2230.18 1.04835 2120 1.04834Z",
      stroke: "#282828",
    },
    {
      d: "M1895.715 232.223H1160C1049.819 232.223 960.5 321.542 960.5 431.723V1444.11H2095.215V431.723L2095.211 430.433C2094.517 320.845 2005.465 232.223 1895.715 232.223Z",
      stroke: "#282828",
    },
    {
      d: "M392.143 1.41846H542.063",
      stroke: "url(#paint0_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M260.984 116.548H410.905",
      stroke: "url(#paint1_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M30.3906 232.548H180.311",
      stroke: "url(#paint2_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M-104.96 1.41846H44.9607",
      stroke: "url(#paint3_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M740 873.434L740 1023.35",
      stroke: "url(#paint4_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M849.13 612.276L849.13 762.197",
      stroke: "url(#paint5_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M960.13 381.682L960.13 531.602",
      stroke: "url(#paint6_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M740 236.332L740 386.252",
      stroke: "url(#paint7_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M1185.13 873.434L1185.13 1023.35",
      stroke: "url(#paint8_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M1075 612.276L1075 762.197",
      stroke: "url(#paint9_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M1185.13 236.332L1185.13 386.252",
      stroke: "url(#paint10_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M1532.9 1.41846H1382.98",
      stroke: "url(#paint11_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M1664.06 116.548H1514.13",
      stroke: "url(#paint12_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M1894.65 232.548H1744.73",
      stroke: "url(#paint13_linear_73_833949)",
      strokeLinecap: "round",
    },
    {
      d: "M2030 1.41846H1880.08",
      stroke: "url(#paint14_linear_73_833949)",
      strokeLinecap: "round",
    },
  ];

  return (
    <section id="overview" className="h-fit w-full pt-[10vw] bg-background">
      <div className="py-[5vw] flex items-center flex-col justify-center gap-[2vw]">
        <h2 className="text-[#D6D6D6] text-center text-[3.12vw] w-[55%] leading-[1.3] capitalize font-display overviewText ">
          Enabling Digital Transformation to help You Realize 6X Revenue Growth
        </h2>
        <div className="flex items-center justify-between w-[60%] pt-10">
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <div className="text-[10.4vw] overflow-hidden  leading-none">
              <div className="flex h-[9.5vw] items-start w-fit justify-center">
                <div className="flex flex-col  numberTranslate -translate-y-[0vw] items-center justify-center">
                  {[0, 1, 2].map((num) => (
                    <div
                      key={num}
                      style={{
                        background:
                          "linear-gradient(to right, #FF5100, #FE6E00)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-[10vw] leading-none"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    background: "linear-gradient(to right, #FF5100, #FE6E00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  x
                </p>
              </div>
            </div>
            <div className="overflow-hidden w-full flex items-center justify-center h-fit">
              <p className="text-[#A8A8A8] subtitle  text-center text-[1.04vw] tracking-wider font-display">
                Your Retail Customers
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <div className="text-[10.4vw]  leading-none">
              <div className="flex h-[9.5vw] overflow-hidden items-start w-fit justify-center">
                <div className="flex flex-col numberTranslate -translate-y-[0vw] items-center justify-center">
                  {[0, 1, 2].map((num) => (
                    <div
                      key={num}
                      style={{
                        background:
                          "linear-gradient(to right, #FF5100, #FE6E00)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-[10vw] leading-none"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    background: "linear-gradient(to right, #FF5100, #FE6E00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  x
                </p>
              </div>
            </div>
            <div className="overflow-hidden w-full flex items-center justify-center h-full">
              <p className="text-[#A8A8A8] subtitle  text-center text-[1.04vw] tracking-wider font-display">
                Your X-Selling Ratio
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <div className="text-[10.4vw]  leading-none">
              <div className="flex h-[9.5vw] overflow-hidden items-start w-fit justify-center">
                <div className="flex flex-col number6Translate -translate-y-[0vw] items-center justify-center">
                  {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={num}
                      style={{
                        background:
                          "linear-gradient(to right, #FF5100, #FE6E00)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-[10vw] leading-none"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    background: "linear-gradient(to right, #FF5100, #FE6E00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  x
                </p>
              </div>
            </div>
            <div className="overflow-hidden w-full flex items-center justify-center h-fit">
              <p className="text-[#A8A8A8] subtitle  text-center text-[1.04vw] tracking-wider font-display">
                Revenue from Retail Products
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit relative pt-[4vw] text-foreground flex items-end justify-end w-full ">
        <div className="w-[100vw] h-auto flex items-center justify-center">
          <svg
            className="w-full h-full object-cover"
            width="1920"
            height="1051"
            viewBox="0 0 1920 1051"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {svgPaths.map((props, idx) => (
              <path key={idx} ref={(el) => setSvgPathRef(el, idx)} {...props} />
            ))}
          </svg>
        </div>
        <div className="flex absolute bottom-0 left-0 gap-2 h-fit w-screen px-[4.5vw] items-end justify-between pb-[5vw]">
          <div className="flex flex-col pb-[3.5vw] text-[5vw] w-[50%] gap-2">
            <p className="leading-[1.25] font-display text-[#D6D6D6] findText text-[5.2vw]">
              Find the Right Solution for You
            </p>
          </div>
          <div className="h-fit  w-[42%]">
            <p className="text-[1.04vw]  solutionText  w-[95%] text-[#A8A8A8] ">
              Enable seamless digital banking experiences for your customers
              through your mobile app. The Moneylink Super SDK empowers banks
              and fintechs to launch B2B2C services quickly, securely, and at
              scale — all from a single integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
