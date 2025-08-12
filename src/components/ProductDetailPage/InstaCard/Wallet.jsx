'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Copy from '@/components/Animations/Copy';
import { lineAnim } from '@/components/Animations/gsapAnimations';
import {
  USP11,
  USP12,
  USP13,
  USP14,
  USP15,
} from '@/components/Icons';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const Wallet = () => {
  lineAnim();

  const marqueeRef = useRef(null);
  const svgRefs = useRef([]);

  const uspData = [
    {
      description:
        'Issue Virtual Instacards in a Digital card Wallet – Debit, Credit & pre-paid forms',
      svgElement: <USP15 />,
    },
    {
      description:
        'Secure online payments from virtual Instcards using Dynamic CVV ',
      svgElement: <USP14 />,
    },
    {
      description:
        'Offline contactless Payments using virtual Instacards',
      svgElement: <USP13 />,
    },
    {
      description:
        'Universal Instacard – pay using linked virtual Instcards to a single physical universal Instacard',
      svgElement: <USP12 />,
    },
    {
      description:
        'Card Control settings – for setting up daily transaction limits, blocking & unblocking virtual Instcards',
      svgElement: <USP11/>,
    },
  ];

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
    const marqueeWidth = marqueeRef.current.scrollWidth / 2; // Because we duplicate the content
    gsap.to(marqueeRef.current, {
      x: -marqueeWidth,
      duration: 30, // Adjust speed here
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <section data-theme="orange" className="w-screen bg-gradient h-full relative">
      <div className="px-[4vw] py-[7vw] w-full h-full flex flex-col items-center justify-between space-y-[10vw] max-md:py-[10vw] max-sm:py-[20%] max-sm:items-start max-sm:px-[5.5vw]">
        <div className="w-[90%] max-md:w-[95%] max-sm:w-full">
          <Copy>
            <h2 className="text-head-60 font-display text-center max-sm:text-head-80 capitalize max-sm:text-left max-md:text-left">
              Empowering issuers to enable instant issuance of virtual cards for
              making online and offline payments, the Universal Instacard links
              multiple virtual cards to a single secure physical card — delivering
              seamless, secure, and flexible usage.
            </h2>
          </Copy>
        </div>

        <div className="w-full space-y-[3vw]">
          {/* Marquee container */}
          <div className="w-full overflow-hidden">
            <div
              className="marquee-track flex items-center gap-[8vw]"
              ref={marqueeRef}
            >
              {[...uspData, ...uspData].map(({ description, svgElement }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-[1vw] flex-shrink-0 w-[300px] max-sm:w-[85%] max-md:w-[45%] max-md:flex-col max-sm:flex-row max-md:items-center max-md:gap-[5vw] max-sm:gap-[6vw]"
                >
                  <div className="text-primary-2 mb-1 flex-shrink-0">
                    <svg
                      width="105"
                      height="85"
                      viewBox="0 0 105 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[5vw] w-[5vw] max-md:h-[15vw] max-md:w-[15vw] max-sm:w-[18vw] max-sm:h-auto"
                      ref={(el) => (svgRefs.current[index] = el)}
                    >
                      {svgElement}
                    </svg>
                  </div>
                  <Copy>
                    <p className="text-content-20 max-md:text-center">{description}</p>
                  </Copy>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] w-full max-md:mt-[5vw] bg-white lineDraw"></div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
