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
    0.3,
    0.75,
    1,
    0.75,
    0.3,
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
    0.3,
    0.75,
    1,
    0.75,
    0.3,
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
    const lastElement = newOpacities.pop();
    const lastElement2 = newOpacities2.pop();
    newOpacities.unshift(lastElement);
    newOpacities2.unshift(lastElement2);
    setOpacities(newOpacities);
    setOpacities2(newOpacities2);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveElementsByOne();
    }, 100);
    return () => clearInterval(interval);
  }, [moveElementsByOne]);

  return (
    <div className="h-screen overflow-hidden w-full">
      <div className="flex flex-row items-center px-10 justify-between">
        <div className="flex flex-col px-5 gap-1  h-full">
          {opacities2.map((opacity, index) => (
            <div
              key={index}
              className={`w-[.5vw] transition-all duration-500 h-[1.5vw] `}
              style={{
                backgroundColor: opacity != null ? "#FF2900" : "transparent",
                opacity: opacity ?? 1,
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
                backgroundColor: opacity != null ? "#FF2900" : "transparent",
                opacity: opacity ?? 1,
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
                backgroundColor: opacity != null ? "#FF2900" : "transparent",
                opacity: opacity ?? 1,
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
                backgroundColor: opacity != null ? "#FF2900" : "transparent",
                opacity: opacity ?? 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
