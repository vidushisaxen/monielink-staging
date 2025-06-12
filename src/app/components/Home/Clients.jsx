"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Clients() {
  const logos = [
    { src: "/assets/icons/logo/1.svg", width: "8vw", right: "20%", top: "5%" },
    { src: "/assets/icons/logo/2.svg", width: "5vw", right: "35%", top: "22%" },
    { src: "/assets/icons/logo/3.svg", width: "9vw", right: "10%", top: "40%" },
    { src: "/assets/icons/logo/4.svg", width: "10vw", right: "40%", top: "50%" },
    { src: "/assets/icons/logo/5.svg", width: "7vw", right: "35%", top: "67.5%" },
    { src: "/assets/icons/logo/6.svg", width: "9vw", right: "15%", top: "80.5%" },
    { src: "/assets/icons/logo/7.svg", width: "8vw", right: "20%", top: "100%" },
  ];
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
      className="h-[130vh]  w-screen flex items-center justify-center relative bg-[#050505] pb-[4vw]"
    >
      <div className="w-screen  h-full py-2 ">
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
        <div className="w-1/2 h-full px-[3.75vw] flex flex-col pt-[12vw] items-start justify-start">
          <h2 className="text-[5.2vw] clientText font-display font-light text-[#D6D6D6] leading-[1.2] w-[90%]">
            Clients &  Partners We Work Alongside
          </h2>
        </div>
        <div className="w-1/2 relative px-20  h-full flex flex-col items-end justify-between ">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="absolute h-auto flex items-end justify-end"
              style={{
                width: logo.width,
                right: logo.right,
                top: logo.top,
              }}
            >
              <Image
                src={logo.src}
                alt={`client-logo-${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
