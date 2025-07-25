"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackgroundScrollTransition = ({
  from = "#1a1a1a",
  to = "#ffffff",
  trigger,
  start = "top bottom",
  end = "bottom top",
  className = "",
  children,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial background color
    el.style.backgroundColor = from;

    gsap.to(el, {
      backgroundColor: to,
      scrollTrigger: {
        trigger: trigger || el,
        start,
        end,
        scrub: true,
        // markers: true,
      },
    });
  }, [from, to, trigger, start, end]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default BackgroundScrollTransition;
