"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

export default function USPs() {

  useEffect(() => {
    const headingText = SplitText.create(".uspsText", {
      type: "lines",
      linesClass: "uspsTextLines",
      mask: "lines",
    });

    const subText = SplitText.create(".subText", {
      type: "lines",
      linesClass: "subTextLines",
      mask: "lines",
    });

    const sdkText = SplitText.create(".sdkText", {
      type: "lines",
      linesClass: "sdkTextLines",
      mask: "lines",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#usps",
          start: "top 80%",
          end: "bottom top",
        },
      });

      // Initial states
      gsap.set([".subTextLines", ".uspsTextLines", ".sdkTextLines"], {
        y: "100%",
        opacity: (i, el) => (el.classList.contains("subTextLines") ? 0 : 1),
      });

      gsap.set(".usp-path", {
        drawSVG: "0%",
      });

      // Animations
      tl.to(".uspsTextLines", {
        y: "0%",
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.08,
      })
        .to(
          ".subTextLines",
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.08,
          },
          "<+.5"
        )
        .to(
          ".usp-path",
          {
            drawSVG: "100%",
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.08,
          },
          ""
        )
        .to(".sdkTextLines", {
          y: "0%",
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.08,
          delay: -2.5,
        });
    });

    return () => {
      ctx.revert();
      headingText.revert();
      subText.revert();
      sdkText.revert();
    };
  }, []);

  return (
    <section
      id="usps"
      className="h-fit py-[11vw] flex items-center flex-col justify-center w-screen bg-gradient-to-r from-[#FF5100] to-[#FE6E00] dark"
    >
      <h2 className="text-white w-[77%] text-[5vw] mb-[8vw] text-center font-display leading-[1.25] uspsText">
        Scalable, Secure, and Cost- Efficient Banking Infrastructure
      </h2>
      <div className="flex items-center justify-center w-full flex-col gap-16">
        <div className="flex items-center gap-20 h-full w-full justify-center">
          <div className="w-[40%] items-end justify-end flex h-full">
            <svg
              className="h-[13vw] w-[13vw]"
              width="249"
              height="250"
              viewBox="0 0 249 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7446 150.931C20.7446 157.06 21.9519 163.13 24.2976 168.793C26.6433 174.456 30.0814 179.601 34.4156 183.936C43.169 192.689 55.0412 197.607 67.4203 197.607H191.889C201.078 197.623 209.932 194.154 216.664 187.899C223.397 181.644 227.506 173.069 228.164 163.903C228.822 154.737 225.98 145.662 220.21 138.51C214.44 131.357 206.173 126.659 197.075 125.363C197.176 107.717 190.848 90.6383 179.273 77.319C167.697 63.9998 151.668 55.3519 134.18 52.9918C116.693 50.6318 98.9441 54.7211 84.2523 64.4954C69.5605 74.2697 58.9311 89.06 54.3511 106.101C44.6525 108.93 36.1334 114.829 30.0735 122.913C24.0137 130.997 20.7401 140.828 20.7446 150.931Z"
                stroke="white"
                 className="usp-path"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M97.5 135.5L114.612 153.04C116.191 154.658 118.797 154.647 120.362 153.015L152.5 119.5"
                stroke="white"
                 className="usp-path"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex items-start w-[60%] iconText justify-center font-body flex-col gap-6 h-full text-white">
            <p className="text-[1.56vw] subText font-display">Cloud Based Implementation</p>
            <p className="text-[1.04vw] w-[48%] subText  tracking-wide">
              Deploy dedicated cloud instances with partner- managed access
              control and firewalls.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-20 h-full w-full justify-center">
          <div className="w-[40%] items-end justify-end flex h-full">
            <svg
              className="h-[13vw] w-[13vw]"
              width="249"
              height="250"
              viewBox="0 0 249 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M82.979 104.192V73.075C82.979 62.0713 87.3502 51.5182 95.131 43.7374C102.912 35.9567 113.465 31.5854 124.469 31.5854C135.472 31.5854 146.025 35.9567 153.806 43.7374C161.587 51.5182 165.958 62.0713 165.958 73.075V104.192"
                stroke="white"
                className="usp-path"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M51.8618 104.192H197.075V197.543C197.075 203.045 194.889 208.322 190.999 212.212C187.109 216.102 181.832 218.288 176.33 218.288H72.6066C67.1047 218.288 61.8282 216.102 57.9378 212.212C54.0474 208.322 51.8618 203.045 51.8618 197.543V104.192Z"
                stroke="white"
                strokeWidth="4"
                 className="usp-path"
                strokeLinejoin="round"
              />
              <path
                d="M150.399 161.24H150.503V161.344H150.399V161.24Z"
                stroke="white"
                strokeWidth="10"
                 className="usp-path"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-start w-[60%] iconText justify-center font-body flex-col gap-6 h-full text-white">
            <p className="text-[1.56vw] subText font-display">Secure environments</p>
            <p className="text-[1.04vw] w-[40%] subText  tracking-wide">
              Meet regulatory compliance with secure, isolated environments at
              lower cost and higher efficiency than on-premise systems.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-20 h-full w-full justify-center">
          <div className="w-[40%] items-end justify-end flex h-full">
            <svg
              className="h-[13vw] w-[13vw]"
              width="249"
              height="250"
              viewBox="0 0 249 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.0513 210.673H168.677M204.043 210.673H212.885"
                stroke="white"
                strokeWidth="3.40971"
                strokeLinecap="round"
                 className="usp-path"
                strokeLinejoin="round"
              />
              <path
                d="M36.0513 170.001V56.8275C36.0513 55.4205 36.6102 54.0711 37.6051 53.0763C38.6 52.0814 39.9493 51.5225 41.3563 51.5225H207.58C208.987 51.5225 210.336 52.0814 211.331 53.0763C212.326 54.0711 212.885 55.4205 212.885 56.8275V170.001C212.885 171.408 212.326 172.757 211.331 173.752C210.336 174.747 208.987 175.306 207.58 175.306H41.3563C39.9493 175.306 38.6 174.747 37.6051 173.752C36.6102 172.757 36.0513 171.408 36.0513 170.001Z"
                stroke="white"
                 className="usp-path"
                strokeWidth="3.40971"
              />
              <path
                d="M124.501 120.442C128.76 120.442 132.213 116.99 132.213 112.731C132.213 108.472 128.76 105.019 124.501 105.019C120.242 105.019 116.79 108.472 116.79 112.731C116.79 116.99 120.242 120.442 124.501 120.442Z"
                stroke="white"
                 className="usp-path"
                strokeWidth="3.85579"
              />
              <path
                d="M128.803 146.5H120.197C118.328 146.5 116.708 145.205 116.296 143.381L114.514 135.492C113.979 133.12 111.468 131.771 109.194 132.633L102.224 135.277C100.371 135.98 98.2834 135.22 97.3153 133.492L93.4456 126.581C92.5866 125.047 92.8298 123.132 94.045 121.862L100.232 115.394C101.76 113.796 101.703 111.262 100.104 109.735L94.2436 104.142C92.9231 102.881 92.6235 100.887 93.5155 99.2938L97.4176 92.3258C98.3403 90.6781 100.29 89.9002 102.093 90.46L109.366 92.717C111.595 93.4086 113.939 92.0539 114.453 89.7778L116.296 81.619C116.708 79.7952 118.328 78.5 120.197 78.5H128.803C130.672 78.5 132.292 79.7952 132.704 81.619L134.556 89.8177C135.066 92.0791 137.386 93.4341 139.607 92.768L147.428 90.4217C149.223 89.8831 151.151 90.6633 152.067 92.2986L155.989 99.3017C156.879 100.891 156.583 102.88 155.269 104.142L148.291 110.841C146.547 112.514 146.675 115.34 148.562 116.85L154.852 121.881C156.38 123.104 156.799 125.252 155.843 126.959L152.166 133.525C151.206 135.239 149.143 136.003 147.299 135.326L139.776 132.568C137.509 131.737 135.029 133.087 134.497 135.442L132.704 143.381C132.292 145.205 130.672 146.5 128.803 146.5Z"
                stroke="white"
                 className="usp-path"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className="flex items-start w-[60%] iconText justify-center font-body flex-col gap-6 h-full text-white">
            <p className="text-[1.56vw] subText font-display">Dedicated Instant SaaS</p>
            <p className="text-[1.04vw] w-[35%] subText  tracking-wide">
              Eliminate heavy upfront licensing costs with our revenue-sharing
              SaaS model.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-20 h-full w-full justify-center">
          <div className="w-[40%] items-end justify-end flex h-full">
            <svg
              className="h-1/3 w-1/3"
              width="249"
              height="250"
              viewBox="0 0 249 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.5 74.5H202M47.5 74.5V192.5C47.5 198.023 51.9772 202.5 57.5 202.5H192C197.523 202.5 202 198.023 202 192.5V74.5M47.5 74.5L62.5129 57.402C64.4115 55.2396 67.1497 54 70.0273 54H180.302C183.278 54 186.099 55.3257 187.999 57.6166L202 74.5"
                stroke="white"
                 className="usp-path"
                strokeWidth="4"
              />
              <path
                d="M100.5 164.5L76.5 140.5L100.5 117.5"
                stroke="white"
                 className="usp-path"
                strokeWidth="4"
              />
              <path
                d="M149 164.5L173 140.5L149 117.5"
                stroke="white"
                 className="usp-path"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className="flex items-start w-[60%] iconText justify-center font-body flex-col gap-6 h-full text-white">
            <p className="text-[1.56vw] subText font-display">Seamless integration</p>
            <p className="text-[1.04vw] w-[50%] subText  tracking-wide">
              Seamlessly integrate digital banking experiences using our Super
              SDK front-end and dedicated cloud back-end — fully managed on
              Monielink Infrastructure.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center overflow-hidden pt-[10vw] text-white  flex-col justify-center">
        <h2 className="text-[7.3vw] sdkText leading-[1.2] font-display">One SDK.</h2>
        <h2 className="text-[7.3vw] sdkText leading-[1.2] font-display">
          Endless Possibilities.
        </h2>
      </div>
    </section>
  );
}
