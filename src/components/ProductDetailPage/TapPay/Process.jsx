"use client";
import Copy from "@/components/Animations/Copy";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Diagram = () => {
  const sectionRef = useRef(null);
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
    const section = sectionRef.current;
    const imageElements = imageRefs.current;
    const textElements = textRefs.current;

    if (!section || !imageElements.length || !textElements.length) return;

    gsap.set(imageElements.slice(1), { opacity: 0 ,scale:0.5});
    gsap.set(textElements.slice(1), { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300vh",
        scrub: 1,
      },
    });

    paymentMethods.forEach((method, index) => {
      if (index === 0) return;

      tl.to([imageElements[index - 1], textElements[index - 1]], {
        opacity: 0,
        scale:0.5,
        duration: 1,
        ease: "power2.out",
      })
        .to([imageElements[index], textElements[index]], {
          opacity: 1,
          scale:1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 1 });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-screen h-[120vh] bg-gradient relative pb-[5vw]"
    >
      {/* Heading (normal scroll) */}
      <div className="px-[4vw] py-[7vw] max-md:py-[10vw] max-sm:px-[5.5vw]">
        <div className="w-[70%] max-md:w-[95%] max-sm:w-full mx-auto">
          <Copy>
            <h2 className="text-head-100 font-display text-center capitalize max-sm:text-left">
              Flexible Card Payments with Tap, Dip, or Swipe
            </h2>
          </Copy>
        </div>
      </div>

      {/* Sticky Image & Text */}
      <div className="sticky top-[20vh] h-[60vh] flex flex-col items-center justify-center gap-[2vw]">
        {/* Images */}
        <div className="relative w-2/5 h-[393px] flex items-center justify-center">
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

        {/* Text */}
        <div className="relative h-[60px] flex items-center justify-center">
          {paymentMethods.map((method, index) => (
            <div
              key={`text-${index}`}
              ref={addToTextRefs}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Copy>
                <p className="capitalize text-head-40 font-display">
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
