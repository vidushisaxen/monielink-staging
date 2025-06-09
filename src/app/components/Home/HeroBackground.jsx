import React, { useEffect, useRef, useState } from "react";

const initialOpacitiesList = [
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.3,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.3,
    0.3,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    0.75,
    0.75,
    0.75,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    1,
    1,
    1,
    1,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    0.75,
    0.75,
    0.75,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.3,
    0.3,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.3,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
];

function rotateArrayToMiddle(arr) {
  const len = arr.length;
  const mid = Math.floor(len / 2);
  return arr.slice(mid).concat(arr.slice(0, mid));
}

const initialOpacitiesListFromMiddle = initialOpacitiesList.map(col => rotateArrayToMiddle(col));

function Column({ opacities }) {
  return (
    <div className="flex flex-col flex-wrap">
      {opacities.map((opacity, index) => (
        <div
          key={index}
          className={`w-[1vw]  transition-all duration-300 h-[2.5vw] mb-1.5`}
          style={{
            backgroundColor: opacity != null ? "#FF2900" : "transparent",
            opacity: opacity ?? 1,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroBackground() {
  const [columns, setColumns] = useState(initialOpacitiesList);
  const [columnsFromMiddle, setColumnsFromMiddle] = useState(initialOpacitiesListFromMiddle);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const startAnimation = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setColumns((prevColumns) =>
        prevColumns.map((col) => {
          const newCol = [...col];
          newCol.push(newCol.shift());
          return newCol;
        })
      );
      setColumnsFromMiddle((prevColumns) =>
        prevColumns.map((col) => {
          const newCol = [...col];
          newCol.push(newCol.shift());
          return newCol;
        })
      );
    }, 200);
  };

  // Helper to stop animation
  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let observer;
    if ("IntersectionObserver" in window) {
      observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation();
            } else {
              stopAnimation();
            }
          });
        },
        {
          threshold: 0.01,
        }
      );
      observer.observe(node);
    } else {
      // Fallback: always animate if IntersectionObserver not available
      startAnimation();
    }

    // Clean up
    return () => {
      stopAnimation();
      if (observer && node) observer.unobserve(node);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen absolute inset-0 overflow-hidden w-full"
    >
      <div className="flex gap-1 justify-between px-10">
        <div className="flex gap-1">
          {columns.map((col, idx) => (
            <Column key={idx} opacities={col} />
          ))}
        </div>
        <div className="flex gap-1">
          {columnsFromMiddle.map((col, idx) => (
            <Column key={idx} opacities={col} />
          ))}
        </div>
       
       
      </div>
    </div>
  );
}
