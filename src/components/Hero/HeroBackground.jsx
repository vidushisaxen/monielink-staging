"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBackground() {
  const cellCount = 3000;
  const cellsRef = useRef([]);

  useEffect(() => {
    const cells = cellsRef.current;

    // Store individual event handlers to properly remove them later
    const handlers = cells.map((_, index) => ({
      mouseEnter: () => handleMouseEnter(index),
      mouseLeave: () => handleMouseLeave(index),
    }));

    function handleMouseEnter(index) {
      const opacities = [0.5, 0.65, 0.8, 1, 0.8, 0.65, 0.5];

      for (let offset = -3; offset <= 3; offset++) {
        const i = index + offset;
        if (i >= 0 && i < cellCount && cells[i]) {
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
    }

    function handleMouseLeave(index) {
      const fadeGroups = [
        [-3, 3],
        [-2, 2],
        [-1, 1],
        [0],
      ];

      fadeGroups.forEach((group, i) => {
        group.forEach((offset) => {
          const targetIndex = index + offset;
          if (targetIndex >= 0 && targetIndex < cellCount && cells[targetIndex]) {
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
    }

    // Add event listeners
    cells.forEach((cell, index) => {
      if (cell) {
        cell.addEventListener("mouseenter", handlers[index].mouseEnter);
        cell.addEventListener("mouseleave", handlers[index].mouseLeave);
      }
    });

    // Cleanup
    return () => {
      cells.forEach((cell, index) => {
        if (cell) {
          cell.removeEventListener("mouseenter", handlers[index].mouseEnter);
          cell.removeEventListener("mouseleave", handlers[index].mouseLeave);
        }
      });
    };
  }, []);

  return (
    <div className="w-screen max-md:h-[80vh] h-screen absolute inset-0 bg-background overflow-hidden flex flex-wrap max-sm:hidden">
      {[...Array(cellCount)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (cellsRef.current[i] = el)}
          className="w-[12px] h-[43px] border duration-100 border-[#121212] max-sm:hidden"
          style={{
            opacity: 1,
            backgroundColor: "transparent",
            margin: "1.5px",
          }}
        />
      ))}
    </div>
  );
}
