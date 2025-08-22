"use client";
import Copy from "@/components/Animations/Copy";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Diagram = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  const paymentMethods = [
    { image: "/assets/icons/diagrams/tap.svg", text: "TAP", alt: "tap" },
    { image: "/assets/icons/diagrams/dip.png", text: "DIP", alt: "dip" },
    { image: "/assets/icons/diagrams/swipe.svg", text: "SWIPE", alt: "swipe" },
  ];


  return (
    <section 
    data-theme="orange"
      className="relative bg-gradient"
    >
      <div 
        
        className=" h-full w-full flex flex-col items-center justify-center gap-[2vw] px-[4vw] py-[7vw] max-md:py-[10vw] max-sm:px-[5.5vw]"
      >
        <div className="w-[70%] max-md:w-[95%] max-sm:w-full mx-auto mb-[3vw]">
          <Copy>
            <h2 className="text-head-100 font-display text-center max-sm:text-left">
            Flexible Card Payments with a POS Terminal
            </h2>
          </Copy>
        </div>
        <div className="relative w-2/5 h-full flex flex-col gap-[10vw] items-center justify-center max-sm:h-full max-sm:w-[80vw] max-sm:gap-[15vw] max-sm:py-[10vw]">
          {paymentMethods.map((method, index) => (
            <div
              key={`image-${index}`}
              
              className=" w-full h-full flex flex-col gap-[2vw] items-center justify-center fadeupanim max-sm:gap-[5vw]"
            >
              <img
                src={method.image}
                alt={method.alt}
                className="w-full h-full object-contain"
              />
               <Copy>
                <p className="capitalize text-head-40 font-display max-sm:text-[6vw]">
                  {method.text}
                </p>
              </Copy>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diagram;
