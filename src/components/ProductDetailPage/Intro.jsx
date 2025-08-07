'use client'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Copy from "../Animations/Copy";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = ({ content }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bars = gsap.utils.toArray('.bar-anim');
  
      bars.forEach((bar) => {
        gsap.fromTo(
          bar,
          {
            scaleY: 0,
            opacity: 0,
            transformOrigin: 'center',
          },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 80%',
              // toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });
  
    return () => ctx.revert();
  }, []);
  return (
    <section ref={containerRef} data-theme="white" className="w-screen h-full bg-white-1">
      <div className="w-full h-full px-[4vw] py-[7vw] flex items-start justify-start  max-md:py-[10vw] max-sm:flex-col max-sm:py-[20%] max-sm:gap-[8vw] max-md:gap-[5vw] max-md:px-[5vw]  max-sm:px-[5.5vw]">
        <div className="w-[45%]  flex items-start justify-start max-md:w-[40%] max-sm:w-full">
          <div className="w-[15vw] h-[5vw] max-md:w-[25vw] max-md:h-[10vw] fadeupanim max-sm:w-[50vw] max-sm:h-auto ">
            <Image
              src={content.logo}
              height={100}
              width={100}
              alt="balance"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="w-1/2 flex items-start justify-start max-sm:w-full">
          <div className={`flex flex-col  max-md:w-[100%] space-y-[5vw] max-sm:w-full max-sm:space-y-[12vw] ${content.width || "w-[70%]"}`}>
            <Copy>
              <h2 className="text-head-60 font-display text-black-1 max-sm:w-[90%]">
                {content.heading}
              </h2>
            </Copy>

            <div className="space-y-[2vw]  max-md:space-y-[5vw] max-sm:space-y-[8vw] ">
              {content.list.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex gap-[1.5vw] items-start max-md:items-start overflow-hidden max-md:gap-[5vw] max-sm:gap-[5vw]"
                >
                  <span className="h-[2vw] w-[0.6vw]  max-md:h-[5vw] max-md:w-[1vw] max-sm:h-[7vw] max-sm:w-[2vw]  bg-[#FE6E00] bar-anim inline-block" />
                  <Copy>
                    <p className={`text-content-20 items-start text-black-1 max-md:w-full font-body  max-sm:w-full ${content.width || "w-[75%]"}`}>
                      {item}
                    </p>
                  </Copy>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
