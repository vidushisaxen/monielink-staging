import React from "react";

export default function HeroBackground() {
  return (
    <div className="h-screen absolute inset-0 overflow-hidden w-full">
      <div className="grid grid-cols-80 gap-1 w-full h-full">
        {[...Array(2000)].map((_, i) => {
          const row = Math.floor(i / 80);
          return (
            <div 
              key={i} 
              className={`w-[0.7vw] h-[2.1875vw] border border-[#121212] ${
                row % 2 === 1 ? 'ml-[.5vw]' : ''
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
