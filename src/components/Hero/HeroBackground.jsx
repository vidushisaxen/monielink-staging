"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBackground() {
  const cellCount = 3000;
  const cellsRef = useRef([]);

  useEffect(() => {
    const cells = cellsRef.current;

    const handleMouseEnter = (index) => {
      const opacities = [0.5, 0.65, 0.8, 1, 0.8, 0.65, 0.5];

      for (let offset = -3; offset <= 3; offset++) {
        const i = index + offset;
        if (i >= 0 && i < cellCount) {
          gsap.killTweensOf(cells[i]);
          gsap.to(cells[i], {
            opacity: opacities[offset + 3],
            backgroundColor: "#FF5100",
            duration: 0,
            ease: "linear",
            overwrite: true,
          });
        }
      }
    };

    const handleMouseLeave = (index) => {
      const fadeGroups = [
        [-3, 3],
        [-2, 2],
        [-1, 1],
        [0],
      ];

      fadeGroups.forEach((group, i) => {
        group.forEach((offset) => {
          const targetIndex = index + offset;
          if (targetIndex >= 0 && targetIndex < cellCount) {
            gsap.killTweensOf(cells[targetIndex]);
            gsap.to(cells[targetIndex], {
              opacity: 1,
              backgroundColor: "transparent",
              duration: 0.5,
              ease: "expo.inOut",
              delay: i * 0.1,
              overwrite: true,
            });
          }
        });
      });
    };

    cells.forEach((cell, index) => {
      cell.addEventListener("mouseenter", () => handleMouseEnter(index));
      cell.addEventListener("mouseleave", () => handleMouseLeave(index));
    });

    return () => {
      cells.forEach((cell, index) => {
        cell.removeEventListener("mouseenter", () => handleMouseEnter(index));
        cell.removeEventListener("mouseleave", () => handleMouseLeave(index));
      });
    };
  }, []);

  return (
      <div className="w-screen h-screen absolute inset-0 bg-background  overflow-hidden flex flex-wrap max-sm:hidden">
      {[...Array(cellCount)].map((_, i) => {
        return (
          <div
            key={i}
            ref={(el) => (cellsRef.current[i] = el)}
            className="w-[12px] h-[43px] border duration-100 border-[#121212] max-sm:hidden"
            style={{
              opacity: 1,
              backgroundColor: "transparent",
              margin: "1.5px",
              // marginLeft: "3px",
              // marginBottom: "3px",
            }}
          />
        );
      })}
    </div>
  );
}
