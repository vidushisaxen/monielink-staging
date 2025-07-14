/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function fadeUpAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = document.querySelectorAll(".fadeupanim");
      content.forEach((content) => {
        gsap.from(content, {
          scrollTrigger: {
            trigger: content,
            start: "top 75%",
          },
          opacity: 0,
          y: 50,
          ease: "power3.out",
          duration: 2,
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

export function lineAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineDraws = document.querySelectorAll(".lineDraw");
      lineDraws.forEach((lineDraw) => {
        gsap.from(lineDraw, {
          scrollTrigger: {
            trigger: lineDraw,
            start: "top 80%",
          },
          scaleX: 0,
          transformOrigin: "left",
          duration: 1,
          yPercent: 100,
          stagger: 0.07,
          ease: "power3.out",
        });
      });
    })
    return () => ctx.revert()
  }, []);
}

