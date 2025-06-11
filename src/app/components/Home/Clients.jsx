"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Clients() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const clientText = SplitText.create(".clientText", {
        type: "lines",
        linesClass: "clientTextLines",
        mask: "lines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#clients",
          start: "top 80%",
          end: "bottom top",
        },
      });
      gsap.set(".clientTextLines", {
        y: "100%",
      });
      tl.to(".clientTextLines", {
        y: "-8%",
        duration: 1,
        stagger: 0.08,
      });
     
    });
    return () => ctx.revert();
    clientText.revert();
  }, []);

  return (
    <section
      id="clients"
      className="h-fit  w-screen flex items-center justify-center relative bg-[#050505] "
    >
      <div className="w-screen  h-auto ">
        <svg
          className="w-full h-full object-cover"
          id="mySVG"
          width="1920"
          height="1080"
          viewBox="0 0 1920 1248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="rings">
            <rect
              x="-0.5"
              y="0.5"
              width="1853.81"
              height="1246.93"
              rx="623.463"
              transform="matrix(-1 0 0 1 3044.1 0.015625)"
              stroke="#282828"
            />
            <rect
              x="-0.5"
              y="0.5"
              width="1853.81"
              height="1068.54"
              rx="534.268"
              transform="matrix(-1 0 0 1 3044.1 89.2109)"
              stroke="#282828"
            />
            <rect
              x="-0.5"
              y="0.5"
              width="1853.81"
              height="874.343"
              rx="437.171"
              transform="matrix(-1 0 0 1 3044.1 186.307)"
              stroke="#282828"
            />
            <rect
              x="-0.5"
              y="0.5"
              width="1853.81"
              height="695.088"
              rx="347.544"
              transform="matrix(-1 0 0 1 3044.1 275.904)"
              stroke="#282828"
            />
            <rect
              x="-0.5"
              y="0.5"
              width="1853.81"
              height="515.833"
              rx="257.916"
              transform="matrix(-1 0 0 1 3044.1 365.531)"
              stroke="#282828"
            />
            <rect
              x="-0.5"
              y="0.5"
              width="1853.81"
              height="351.515"
              rx="175.758"
              transform="matrix(-1 0 0 1 3044.1 447.691)"
              stroke="#282828"
            />
            <rect
              x="-0.5"
              y="0.5"
              width="1853.81"
              height="181.113"
              rx="90.5565"
              transform="matrix(-1 0 0 1 3044.1 529.852)"
              stroke="#282828"
            />
          </g>

          <line
            x1="-12.8145"
            y1="624.833"
            x2="2159.68"
            y2="624.833"
            stroke="#282828"
            className="center-line"
          />
        </svg>
      </div>
      <div className=" absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
        <div className="w-1/2 h-full pt-[9vw] px-[3.75vw] flex flex-col items-start justify-start">
          <h2 className="text-[5vw] clientText font-display font-light text-[#D6D6D6] leading-[1.1]">
            Clients & <br /> Partners We <br /> Work Alongside
          </h2>
        </div>
        <div className="w-1/2 px-20 py-[2vw] h-full flex flex-col items-end justify-between ">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div
              key={num}
              className={`${
                num % 2 ? "mr-0" : "mr-20"
              } w-[10vw] h-[10vw] flex items-end justify-end`}
            >
              <Image
                src={`/assets/logo/${num}.svg`}
                alt="clients"
                width={5}
                height={5}
                // className={`pr-[${Math.floor(
                //   Math.random() * 20
                // )}vw] w-1/2 h-1/2 object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
