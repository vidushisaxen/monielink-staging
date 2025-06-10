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

function Column({ opacities, hoveredCell, setHoveredCell, colIdx }) {
  return (
    <div className="flex flex-col flex-wrap">
      {opacities.map((opacity, rowIdx) => {
        const isHovered =
          hoveredCell &&
          hoveredCell.col === colIdx &&
          hoveredCell.row === rowIdx;
        return (
          <div
            key={rowIdx}
            className={`w-[1vw] transition-all duration-300 h-[2.5vw] mb-1.5`}
            style={{
              backgroundColor: opacity != null ? "#FF2900" : "transparent",
              opacity:
                opacity != null
                  ? isHovered
                    ? 1
                    : opacity
                  : 1,
              boxShadow: isHovered
                ? "0 0 16px 4px #FF2900, 0 0 0 2px #fff"
                : undefined,
              zIndex: isHovered ? 2 : 1,
              cursor: opacity != null ? "pointer" : "default",
              transition:
                "opacity 0.3s, box-shadow 0.3s, z-index 0.3s, background-color 0.3s",
            }}
            onMouseEnter={() => {
              if (opacity != null) setHoveredCell({ col: colIdx, row: rowIdx });
            }}
            onMouseLeave={() => {
              if (opacity != null) setHoveredCell(null);
            }}
          />
        );
      })}
    </div>
  );
}

export default function HeroBackground() {
  const [columns, setColumns] = useState(initialOpacitiesList);
  const [columnsFromMiddle, setColumnsFromMiddle] = useState(initialOpacitiesListFromMiddle);
  const [hoveredCell, setHoveredCell] = useState(null);
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

  // Helper to render columns with correct colIdx offset
  const renderColumns = (columnsArr, colOffset = 0) =>
    columnsArr.map((col, idx) => (
      <Column
        key={idx}
        opacities={col}
        hoveredCell={hoveredCell}
        setHoveredCell={setHoveredCell}
        colIdx={colOffset + idx}
      />
    ));

  return (
    <div
      ref={containerRef}
      className="h-screen absolute inset-0 overflow-hidden w-full"
    >
      <div className="flex gap-1 justify-between px-10">
        <div className="flex gap-1">
          {renderColumns(columns, 0)}
        </div>
        <div className="flex gap-1">
          {renderColumns(columnsFromMiddle, columns.length)}
        </div>
        <div className="flex gap-1">
          {renderColumns(columns, columns.length + columnsFromMiddle.length)}
        </div>
        <div className="flex gap-1">
          {renderColumns(
            columnsFromMiddle,
            columns.length * 2 + columnsFromMiddle.length
          )}
        </div>
      </div>
    </div>
  );
}
