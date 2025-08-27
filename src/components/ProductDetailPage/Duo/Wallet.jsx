'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Copy from '@/components/Animations/Copy';
import { lineAnim } from '@/components/Animations/gsapAnimations';
import {
  USP1,
  USP11,
  USP12,
  USP5,
  USP6,
  USP7,
  USP8,
  USP9,
} from '@/components/Icons';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const Wallet = () => {
  lineAnim();

  const marqueeRef = useRef(null);
  const svgRefs = useRef([]);

  const uspData = [
    {
      description:
        'Instant Virtual Credit Card Issuance',
      svgElement: <USP5 />,
    },
    {
      description:
        'DTS enabling usage of issued virtual Credit Cards from existing Debit Cards',
      svgElement: <USP6 />,
    },
    {
      description:
        'Access DUO virtual credit card on the SDK for making online payments',
      svgElement: <USP8 />,
    },
    {
      description:
        'Access Credit Card statement & card control settings for setting up of transaction limits',
      svgElement: <USP7/>,
    },
    {
      description:
        'Pan remapping service to link newly issued Debit Cards to an existing DUO card',
      svgElement: <USP1 />,
    },
    {
        description:
          'Process repayment requested by customers on the SDK',
        svgElement: <USP9 />,
      },
      {
        description:
          'Collection of Due & Delinquent amount',
        svgElement: <USP11 />,
      },
      {
        description:
          'Dynamic Limit Management',
        svgElement: <USP12/>,
      },
  ];

  const [isDesktop, setIsDesktop] = useState(false);
  
    useEffect(() => {
      const checkScreen = () => {
        setIsDesktop(window.innerWidth >= 1024); 
      };
  
      checkScreen();
      window.addEventListener("resize", checkScreen);
  
      return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const dataToRender = isDesktop ? [...uspData, ...uspData] : uspData;

  useGSAP(() => {
    // SVG line draw animation
    svgRefs.current.forEach((ref) => {
      if (ref) {
        const paths = ref.querySelectorAll('.usp-path');
        if (paths) {
          gsap.from(paths, {
            scrollTrigger: {
              trigger: ref,
              start: 'top 80%',
            },
            duration: 2,
            drawSVG: 0,
          });
        }
      }
    });

    // Marquee animation
     if(globalThis.innerWidth>1024){
    const marqueeWidth = marqueeRef.current.scrollWidth / 2; 
    gsap.to(marqueeRef.current, {
      x: -marqueeWidth,
      duration: 30, // Adjust speed here
      ease: 'none',
      repeat: -1,
    });
  }
  }, []);

  return (
    <section data-theme="orange" className="w-screen bg-gradient h-full relative">
      <div className="px-[4vw] py-[7vw] w-full h-full flex flex-col items-center justify-between space-y-[10vw] max-md:py-[10vw] max-sm:py-[20%] max-sm:items-start max-sm:px-[5.5vw]">
        <div className="w-[90%] max-md:w-[95%] max-sm:w-full">
          <Copy>
            <h2 className="text-head-60 font-display text-center max-sm:text-head-80 capitalize max-sm:text-center max-md:text-center">
            Offer a seamless DUO card experience with dual credit and debit capabilities on a single card, powered by our patented Dual Transaction Service (DTS) 
            </h2>
          </Copy>
        </div>

        <div className="w-full space-y-[3vw]">
          {/* Marquee container */}
          <div className="w-full overflow-hidden">
            <div
              className="marquee-track w-fit flex-nowrap flex items-center gap-[8vw] max-sm:flex-col max-md:flex-col max-sm:gap-[15vw] max-sm:items-center max-md:w-full"
              ref={marqueeRef}
            >
              {dataToRender.map(({ description, svgElement }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-[1vw] w-[25vw] max-sm:w-full max-md:w-full max-md:flex-col max-sm:flex-col max-md:items-center max-md:gap-[5vw] max-sm:gap-[6vw] max-md:flex-wrap"
                >
                  <div className="text-primary-2 mb-1">
                    <svg
                      width="105"
                      height="85"
                      viewBox="0 0 105 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[5vw] w-[5vw] max-md:h-[15vw] max-md:w-[15vw] max-sm:w-[20wvw] max-sm:h-auto"
                      ref={(el) => (svgRefs.current[index] = el)}
                    >
                      {svgElement}
                    </svg>
                  </div>
                  <Copy>
                    <p className="text-content-20 max-sm:text-content-20  max-md:text-center max-sm:text-center max-sm:w-full max-md:text-[2.5vw] max-md:w-[60%]">{description}</p>
                  </Copy>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] w-full max-md:mt-[5vw] bg-white lineDraw max-sm:mt-[10vw]" ></div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
