"use client";
import React, { useEffect, useState } from "react";

export default function BackgroundLine() {
  const initialOpacities2 = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.1,
    0.15,
    0.5,
    1,
    0.5,
    0.15,
    0.1,
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
  ];
  const initialOpacities = [
    null,
    null,
    0.1,
    0.15,
    0.5,
    1,
    0.5,
    0.15,
    0.1,
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
    null,
    null,
    null,
    null,
  ];
  const [opacities, setOpacities] = useState(initialOpacities);
  const [opacities2, setOpacities2] = useState(initialOpacities2);
  const moveElementsByOne = () => {
    const newOpacities = [...opacities];
    const newOpacities2 = [...opacities2];
    const firstElement = newOpacities.shift();
    const firstElement2 = newOpacities2.shift();
    newOpacities.push(firstElement);
    newOpacities2.push(firstElement2);
    setOpacities(newOpacities);
    setOpacities2(newOpacities2);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveElementsByOne();
    }, 120);
    return () => clearInterval(interval);
  }, [moveElementsByOne]);

  return (
    <div className="h-screen w-screen overflow-hidden max-sm:hidden">
      <div className="flex flex-row items-center px-10 justify-between">
        <div className="flex flex-col px-5 gap-1  h-full">
          {opacities2.map((opacity, index) => (
            <div
              key={index}
              className={`w-[.5vw] transition-all duration-500 h-[1.5vw] `}
              style={{
                backgroundColor: opacity != null ? "#FF5100" : "transparent",
                opacity: opacity ?? 0,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col px-5  gap-1 w-fit  h-full">
          {opacities.map((opacity, index) => (
            <div
              key={index}
              className="w-[.5vw] transition-all duration-500 h-[1.5vw]"
              style={{
                backgroundColor: opacity != null ? "#FF5100" : "transparent",
                opacity: opacity ?? 0.5,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col px-5  gap-1 w-fit h-full">
          {opacities2.map((opacity, index) => (
            <div
              key={index}
              className="w-[.5vw] transition-all duration-500 h-[1.5vw]"
              style={{
                backgroundColor: opacity != null ? "#FF5100" : "transparent",
                opacity: opacity ?? 0,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col px-5  gap-1 w-fit h-full">
          {opacities.map((opacity, index) => (
            <div
              key={index}
              className="w-[.5vw] transition-all duration-500 h-[1.5vw]"
              style={{
                backgroundColor: opacity != null ? "#FF5100" : "transparent",
                opacity: opacity ?? 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
