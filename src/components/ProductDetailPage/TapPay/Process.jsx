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

  imageRefs.current = [];
  textRefs.current = [];

  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useGSAP(() => {
    const container = containerRef.current;
    const imageElements = imageRefs.current;
    const textElements = textRefs.current;
    if (!container || !imageElements.length || !textElements.length) return;
    gsap.set([imageElements[0], textElements[0]], { opacity: 1, scale: 1 });
    gsap.set([...imageElements.slice(1), ...textElements.slice(1)], { opacity: 0, scale: 0.8 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });
    paymentMethods.forEach((_, index) => {
      if (index === 0) {
        tl.to({}, { duration: 1 });
      } else {
        tl
          .to([imageElements[index - 1], textElements[index - 1]], {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power3.out"
          })
          .to([imageElements[index], textElements[index]], {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power3.out"
          }, "-=0.1") 
          .to({}, { duration: 1.2 }); 
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient"
      style={{ height: `${100 + (paymentMethods.length * 100)}vh` }}
    >
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center gap-[2vw] px-[4vw] py-[7vw] max-md:py-[10vw] max-sm:px-[5.5vw]"
      >
        <div className="w-[70%] max-md:w-[95%] max-sm:w-full mx-auto mb-[3vw]">
          <Copy>
            <h2 className="text-head-100 font-display text-center max-sm:text-left">
            Flexible Card Payments with a POS Terminal
            </h2>
          </Copy>
        </div>
        <div className="relative w-2/5 h-[393px] flex items-center justify-center max-sm:h-[80vw] max-sm:w-[75vw]">
          {paymentMethods.map((method, index) => (
            <div
              key={`image-${index}`}
              ref={addToImageRefs}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <img
                src={method.image}
                alt={method.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="relative h-[60px] flex items-center justify-center">
          {paymentMethods.map((method, index) => (
            <div
              key={`text-${index}`}
              ref={addToTextRefs}
              className="absolute inset-0 flex items-center justify-center"
            >
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
