"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Image from "next/image";

export default function Loader2() {
  gsap.registerPlugin(SplitText, ScrambleTextPlugin);

  useEffect(() => {
    const tl = gsap.timeline();

    const splitText = new SplitText(".splitText", {
      type: "chars",
    });
    tl.from(splitText.chars, {
      opacity: 0,
      duration: 0.2,
      stagger: 0.05,
      filter: "blur(10px)",
      onComplete: () => {
        gsap.to(splitText.chars, {
          opacity: 0,
          delay:1,
        });
      },
    });

    tl.to(".loader-container", {
      opacity: 1,
      duration: 1,
      delay: 1,
    });
    tl.to(
      ".mainLogoLoader",
      {
        duration: 1,
        opacity: 1,
      },
      "<"
    );

    tl.to(".scrambleText", {
      duration: 3,
      scrambleText: {
        text: "Design elevated by a tech forward aesthetic.",
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      },
      onComplete: () => {
        gsap.to(".scrambleText", {
          duration: 0.5,
          opacity: 0,
          delay:.5
        });
        gsap.to(".loader-gate", {
          opacity: 1,
          duration: 1,
          delay: 1,
        });

      },
    },"<+1");

    tl.to(
      ".svg-secondPart",
      {
        duration: 1,
        opacity: 1,
      },
      "<"
    );

    tl.to(".scrambleText2", {
      duration: 1,
      delay: 1.2,
      scrambleText: {
        text: "By Enigma",
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      },
      onComplete:()=>{
        gsap.to("#LoaderScreen", {
         backgroundColor:"transparent",
        });
      }
    });

    tl.to([".gate1", ".gate2", ".text-gate1", ".text-gate2"], {
      duration: 1,
      x: (i) => (i % 2 === 0 ? "-100%" : "100%"),
      ease:"power3.out",
      duration:2,
      delay:1,
    });


    tl.to("#LoaderScreen", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to("#LoaderScreen", {
          visibility: "hidden",
        });
      },
    });
  }, []);

  return (
    <div
      id="LoaderScreen"
      className="h-screen fixed top-0 left-0 z-[999] bg-background  w-full flex items-center justify-center"
    >
      {/* Gate SVGS */}
      {/* <div className="w-[105vw] loader-gate opacity-0 h-screen -translate-x-[2%] absolute  inset-0  flex items-center justify-center ">
        <div className="w-full h-full gate1 translate-x-[4%]">
          <Image
            className="w-full h-full absolute z-[0] object-cover"
            src="/assets/gate-left.svg"
            alt="left-gate"
            width={100}
            height={100}
          />
         
        </div>
        <div className="w-full h-full gate2 -translate-x-[4%]">
          <Image
            className="w-full h-full object-cover"
            src="/assets/gate-right.svg"
            alt="right-gate"
            width={100}
            height={100}
          />
        </div>
      </div> */}

      <div className="w-full px-[10%] h-full relative flex">
        <p className=" absolute left-1/2 -translate-x-1/2   top-1/2 -translate-y-1/2 text-center text-zinc-400 text-[1vw] tracking-widest font-mono font-medium uppercase splitText">
          Design elevated by a tech forward aesthetic.
        </p>
        <div className="flex w-full  h-full opacity-0 loader-container">
          <div className="flex w-full text-gate1 mainLogoLoader items-center justify-center">
            <svg
              width="200"
              height="60"
              viewBox="0 0 253 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="svg-firstPart">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0507812 0.0696106L30.9446 17.8818L62.2195 0.129209L62.2195 41.9392L53.3014 46.9927L53.3014 15.446L30.91 28.1561L8.96884 15.5056L8.96884 46.9927L0.0507794 41.9392L0.0507812 0.0696106Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6279 37.8125L30.9201 48.9829L50.6413 37.6597L50.6413 48.2483L30.9201 59.5265L11.6279 48.3815L11.6279 37.8125Z"
                  fill="#FE6E00"
                />
              </g>

              <g className="opacity-0  svg-secondPart">
                <path
                  d="M111.768 32.7118L107.268 32.7118L107.268 18.0163L101.352 32.7118L99.4007 32.7118L93.4848 18.0163L93.4848 32.7118L89.0163 32.7118L89.0163 11.7227L95.2784 11.7227L100.376 24.4043L105.474 11.7227L111.768 11.7227L111.768 32.7118ZM125.88 33.0894C119.555 33.0894 114.929 28.5581 114.929 22.233C114.929 15.908 119.555 11.3766 125.88 11.3766C132.237 11.3766 136.862 15.908 136.862 22.233C136.862 28.5581 132.237 33.0894 125.88 33.0894ZM125.88 29.1245C129.751 29.1245 132.268 26.135 132.268 22.233C132.268 18.2995 129.751 15.3415 125.88 15.3415C122.009 15.3415 119.523 18.2995 119.523 22.233C119.523 26.135 122.009 29.1245 125.88 29.1245ZM158.784 32.7118L154.473 32.7118L144.466 19.0233L144.466 32.7118L139.998 32.7118L139.998 11.7227L144.592 11.7227L154.316 24.9078L154.316 11.7227L158.784 11.7227L158.784 32.7118ZM167.391 32.7118L162.923 32.7118L162.923 11.7227L167.391 11.7227L167.391 32.7118ZM186.411 32.7118L171.558 32.7118L171.558 11.7227L186.411 11.7227L186.411 15.6562L176.027 15.6562L176.027 20.0932L186.191 20.0932L186.191 24.0267L176.027 24.0267L176.027 28.7783L186.411 28.7783L186.411 32.7118Z"
                  fill="white"
                />
                <path
                  d="M202.649 32.7118L190.282 32.7118L190.282 11.7227L192.894 11.7227L192.894 30.3832L202.649 30.3832L202.649 32.7118ZM208.935 32.7118L206.323 32.7118L206.323 11.7227L208.935 11.7227L208.935 32.7118ZM231.222 32.7118L228.705 32.7118L216.464 15.9709L216.464 32.7118L213.852 32.7118L213.852 11.7227L216.527 11.7227L228.61 28.1175L228.61 11.7227L231.222 11.7227L231.222 32.7118ZM252.054 32.7118L248.813 32.7118L240.852 23.2715L238.743 25.663L238.743 32.7118L236.131 32.7118L236.131 11.7227L238.743 11.7227L238.743 22.5792L248.026 11.7227L251.299 11.7227L242.551 21.6981L252.054 32.7118Z"
                  fill="#FE6E00"
                />
              </g>
            </svg>
          </div>
          
          <div className=" h-full w-full flex text-gate2 text-loader relative items-center justify-center">
            <p className="text-left text-zinc-400 w-[40%]  text-[1vw] tracking-widest font-mono scrambleText font-medium uppercase"></p>
            <p className="text-center w-full  absolute right-0 text-zinc-400 text-[1vw] tracking-widest font-mono scrambleText2 font-medium uppercase"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
