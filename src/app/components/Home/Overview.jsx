"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Overview2 from "./Overview2";
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
        // markers:true,
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



  return (
    <section id="overview" className="h-fit w-full pt-[10vw] bg-background relative z-[1]">
      <div className="pt-[5vw] flex items-center flex-col justify-center gap-[2vw]">
        <h2 className="text-[#D6D6D6] text-center text-[3.12vw] w-[55%] leading-[1.3] capitalize font-display overviewText ">
          Enabling Digital Transformation to help You Realize 6X Revenue Growth
        </h2>
        <div className="flex items-center justify-between w-[60%] pt-10 relative z-[2]">
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
      <div className="h-fit relative text-foreground flex items-end justify-end w-full  z-[1] mt-[-5%]">
        <div className="w-[100vw] h-auto flex items-center justify-center ">
         <Overview2/>
        </div>
        <div className="flex absolute bottom-[30%] left-0 gap-2 h-fit w-screen px-[4.5vw] items-end justify-between pb-[5vw]">
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
