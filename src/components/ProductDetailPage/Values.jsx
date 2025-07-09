'use client'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Copy from "../Animations/Copy";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Values = ({ data }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const bars = gsap.utils.toArray('.baranim');
  
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
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });
  
    return () => ctx.revert(); 
  }, []);
  return (
    <section data-theme="white" className="w-screen h-full bg-white-1" >
      <div className="w-full h-full px-[4vw] py-[7vw] flex items-start justify-between max-sm:flex-col max-sm:py-[20%] max-md:py-[10%] max-sm:pb-[30%] max-sm:px-[5.5vw]">
        <div className="w-1/2 max-md:w-[45%] flex items-start  justify-between max-sm:w-full max-sm:gap-[8vw]">
          <div>
            <Copy>
              <h2 className="text-head-100 font-display text-black-1">
                {data.heading}
              </h2>
            </Copy>
          </div>
        </div>
        <div className="w-[40%] pt-[5vw] max-sm:w-full max-md:w-[45%] max-sm:mt-[12vw]">
          <div className="space-y-[10vw] ">
            {data.list.map((item, index) => (
              <div
                key={index}
                className="w-full flex gap-[1.5vw] items-center overflow-hidden max-sm:items-start max-md:items-start max-sm:gap-[5vw] max-md:gap-[3vw]"
              >
                <span className="h-[2vw] w-[0.6vw] max-md:h-[5vw] max-md:w-[0.8vw] max-sm:w-[2vw] max-sm:h-[10vw] bg-[#FE6E00] baranim" />
                <Copy>
                  <div
                    className="text-content-20 max-md:mt-[-.5vw] text-black-1 font-body w-[80%]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </Copy>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
