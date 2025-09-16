"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useLenis } from "lenis/react";
import { useSound } from "@/fancy/SFX/SoundProvider";
import { useTickSound } from "@/fancy/SFX/SFX";

export default function Loader() {
  gsap.registerPlugin(SplitText, ScrambleTextPlugin);
  const [MouseCordinates, setMouseCordinates] = useState({
    x:0,
    y: 0,
  });
  const lenis = useLenis();
  const {enabled,toggle} = useSound()
  const {playSoundTick} = useTickSound()

  useEffect(() => {
    const preloaderShown = sessionStorage.getItem("preloaderShown");
    const toggleLoaderBtn = sessionStorage.getItem(".loader-sound-btn")

    if (preloaderShown) {
      const loaderElement = document.getElementById("LoaderScreen");
      if (loaderElement) {
        loaderElement.style.display = "none";
      }
      if (toggleLoaderBtn) {
        document.querySelector('.loader-sound-btn').style.display = 'none'
      }
      if (lenis) {
        lenis.start();
      }
      return;
    }

    if (lenis) {
      lenis.stop();
    }

    const tl = gsap.timeline();

    const splitText = new SplitText(".splitText", {
      type: "words , chars",
    });

    document.querySelectorAll(".splitText").forEach((elem) => {
      elem.removeAttribute("aria-label");
    });

    splitText.chars.forEach((char) => {
      char.removeAttribute("aria-label");
    });

    gsap.set(splitText.chars, {
      opacity: 0,
      filter: "blur(10px)",
    });
    tl.to(splitText.chars, {
      onStart: () => {
        gsap.to(".text-wrap-loader", {
          opacity: 1,
        });
      },
      opacity: 1,
      duration: 0.2,
      stagger: 0.05,
      filter: "blur(0px)",
      onComplete: () => {
        gsap.to(splitText.chars, {
          opacity: 0,
          delay: 0.5,
        });
      },
    });
    if (globalThis.innerWidth > 1024) {
      tl.to(".loader-container", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        onComplete: () => {
          gsap.to(".plus", {
            rotate: 360,
            duration: 1,
            delay: 2,
            repeat: 2,
            repeatDelay: 1.5,
            ease: "power2.inOut",
          });
        },
      });
      tl.to(
        ".mainLogoLoader",
        {
          duration: 1,
          opacity: 1,
          filter: "blur(0px)",
        },
        "<"
      );

      tl.to(
        ".scrambleText",
        {
          duration: 2,
          delay: 0.2,
          filter: "blur(0px)",
          scrambleText: {
            text: "Offering Plug & Play SDKs that 6x Your Revenue",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          },
          onComplete: () => {
            gsap.to(".scrambleText", {
              duration: 0.5,
              opacity: 0,
            });
          },
        },
        "<"
      );
      tl.to(".svg-secondPart", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        filter: "blur(0px)",
      });

      tl.to(
        ".scrambleText2",
        {
          duration: 1,
          scrambleText: {
            text: "By Montra, Inc.",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          },
        },
        "<"
      );
      tl.to("#LoaderScreen", {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to("#LoaderScreen", {
            visibility: "hidden",
            onComplete: () => {
              sessionStorage.setItem('preloaderShown', 'true');
              sessionStorage.setItem('.loader-sound-btn', 'true')
              if (lenis) {
                lenis.start();
              }
            },
          });
          gsap.to('.loader-sound-btn',{
            opacity:0,
            duration:.5,
            onComplete:()=>{
              document.querySelector('.loader-sound-btn').style.display = 'none'
            }
          })
        },
      });
    } else {
      gsap.set(".svg-firstPart", {
        xPercent: 150,
      });
      tl.to(".loader-container", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        onComplete: () => {
          gsap.to(".plus", {
            rotate: 360,
            duration: 1,
            delay: 2,
            repeat: 2,
            repeatDelay: 1.5,
            ease: "power2.inOut",
          });
        },
      });
      tl.to(
        ".mainLogoLoader",
        {
          duration: 1,
          opacity: 1,
          filter: "blur(0px)",
        },
        "<"
      );

      tl.to(
        ".scrambleText",
        {
          duration: 2,
          delay: 0.2,
          filter: "blur(0px)",
          scrambleText: {
            text: "Offering Plug & Play SDKs that 6x Your Revenue",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          },
          onComplete: () => {
            gsap.to(".scrambleText", {
              duration: 0.5,
              opacity: 0,
            });
          },
        },
        "<"
      );
      tl.to(".svg-firstPart", {
        duration: 0.8,
        xPercent: 0,
      }).to(".svg-secondPart", {
        duration: 1,
        opacity: 1,
        delay: -0.5,
        // xPercent:50,
        //  scaleX:1,
        //  transformOrigin:"left",
        filter: "blur(0px)",
      });

      tl.to(
        ".scrambleText2",
        {
          duration: 1,
          scrambleText: {
            text: "By Montra, Inc.",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          },
        },
        "<"
      );
      tl.to("#LoaderScreen", {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to("#LoaderScreen", {
            visibility: "hidden",
            onComplete: () => {
              sessionStorage.setItem("preloaderShown", "true");
              if (lenis) {
                lenis.start();
              }
            },
          });
        },
      });
    }
  }, [lenis]);

  const handleSoundButtonMove = (e) => {
    gsap.to('.loader-sound-btn',{
     opacity:1,
     duration:.2,
    })
    const lerp = (start, end, t) => {
      return start * (1 - t) + end * t;
    };

    setMouseCordinates(prev => ({
      x: lerp(prev.x, e.clientX, 0.15),
      y: lerp(prev.y, e.clientY, 0.15)
    }));
  };

  const handleSound = () => {
    gsap.to('.loader-sound-btn', {
      duration: 1,
      opacity: 0,
      ease: 'power2.inOut',
      onComplete:()=>{
        document.querySelector('.loader-sound-btn').style.display = 'none'
      }
    });
    toggle()
    playSoundTick()
  };


  useEffect(() => {
    let animationFrameId;
    const updatePosition = (e) => {
      animationFrameId = requestAnimationFrame(() => handleSoundButtonMove(e));
    };
    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* <div
      //  onClick={handleSound}
        style={{
          left: MouseCordinates.x,
          top: MouseCordinates.y,
        }}
        className="font-bold opacity-0 max-md:hidden w-[50vw] loader-sound-btn flex-shrink-0  translate-x-[-10%] translate-y-[-50%] text-zinc-400 text-[1vw] z-[9999] absolute cursor-pointer "
      >
        <p>Click to enable sound</p>
      </div> */}
      <div
        id="LoaderScreen"
        className="h-screen bg-[#010101] fixed top-0 left-0 z-[9900]  w-full flex items-center justify-center"
      >
        <div className="w-[70%] max-sm:w-[100%] h-[40%] relative flex">
          <div className="opacity-0 text-wrap-loader bg-gray-500">
            <p className=" absolute  w-[68%] max-sm:w-[55%] left-1/2 -translate-x-1/2 max-md:text-[3.2vw] max-md:w-[73%]  top-1/2 -translate-y-1/2 text-center text-zinc-400 text-[1vw] max-sm:text-[3.5vw]  tracking-widest font-mono font-medium uppercase  splitText max-sm:leading-[1.5]">
              Powerful Neobank Platform for Banks & Fintechs
            </p>
          </div>
          <div className="flex max-sm:flex-col max-sm:gap-[20vw] max-md:gap-[2vw] max-sm:py-[10vw] w-full h-full opacity-0 loader-container">
            <div className="flex w-full max-sm:w-full max-md:w-[60vw]  blur-[10px] max-sm:pt-[10%] mainLogoLoader items-center justify-start max-sm:justify-center">
              <svg
                className="h-full w-full max-sm:h-[10vw] max-md:h-[10vw]"
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

                <g className="opacity-0 blur-[2px] svg-secondPart">
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
            <div className="w-full h-full flex plus max-sm:w-full max-md:w-[20vw]   items-center justify-center">
              <div className="w-[2vw] h-[2vw] max-md:w-[4vw] max-md:h-[4vw] max-sm:h-[6vw] max-sm:w-[6vw] relative">
                <div className="absolute w-[0.05vw] h-full bg-zinc-400 left-1/2 -translate-x-1/2"></div>
                <div className="absolute h-[0.05vw] w-full bg-zinc-400 top-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            <div className=" h-full w-full flex max-sm:flex-col max-sm:gap-[10vw] text-loader  relative items-center max-sm:justify-center max-md:justify-start justify-end max-sm:w-full max-md:w-[60%]">
              <p className="text-left text-zinc-400 max-sm:text-[3.5vw] w-[68%] text-[1vw] max-md:text-[2.5vw]  max-md:w-[40vw] max-md:overflow-hidden  tracking-widest max-sm:w-[50%] max-sm:overflow-hidden font-mono scrambleText max-sm:text-center max-md:text-center font-medium uppercase"></p>
              <p className="text-left absolute right-0 max-md:right-[30%] max-sm:right-[15%] text-zinc-400 w-[50%] max-md:text-nowrap max-sm:text-[4vw] max-md:text-[2.5vw] text-[1vw] tracking-widest font-mono scrambleText2 font-medium uppercase"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
