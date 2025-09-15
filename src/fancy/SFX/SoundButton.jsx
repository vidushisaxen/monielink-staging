"use client";
import { useSound } from "@/fancy/SFX/SoundProvider";
import Image from "next/image";
import React from "react";
import { useHoverSound, useTickSound } from "./SFX";

export default function SoundButton() {
  const { enabled, toggle } = useSound();
  const { playSoundHover } = useHoverSound();
  const { playSoundTick } = useTickSound();

  return (
    <div
      onClick={() => {
        toggle();
        playSoundTick();
      }}
      onMouseEnter={playSoundHover}
      className="fixed cursor-pointer max-sm:h-[12vw] max-sm:w-[12vw] max-sm:right-[4vw] max-sm:bottom-[4vw] max-sm:rounded-[2vw] max-md:h-[8vw] max-md:w-[8vw] max-md:right-[7%] max-md:bottom-[4vw] max-md:rounded-[2vw] z-[99] flex items-center justify-center bottom-[1vw] right-[1vw] h-[3vw] w-[3vw] group rounded-[.5vw] text-white"
    >
      <svg
        className="w-full absolute inset-0 h-full"
        width="77"
        height="67"
        viewBox="0 0 77 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6787 0.5H75.0049C75.8333 0.5 76.5049 1.17158 76.5049 2V44.5264C76.5049 44.9221 76.349 45.3021 76.0703 45.583L66.1035 55.6279L55.7939 65.9775C55.5125 66.2601 55.1303 66.4199 54.7314 66.4199H2C1.17193 66.4197 0.50026 65.748 0.5 64.9199V22.3535C0.500017 22.0156 0.614008 21.6891 0.821289 21.4258L0.916016 21.3164L11.8223 9.91504L11.8213 9.91406L20.6074 0.950195C20.8895 0.662321 21.2756 0.5 21.6787 0.5Z"
          stroke={`white`}
        />
      </svg>
      <div className="absolute w-full h-full z-[5] inset-[0%]">
        <div
          style={{
            clipPath:
              
              "polygon(100% 5%, 100% 66%, 71% 95%, 0% 95%, 0% 33%, 28% 5%)",
          }}
          className={`w-full absolute flex items-center justify-center h-full  group-hover:scale-85 scale-50 transition-all duration-400 opacity-0 group-hover:opacity-100 bg-white/20`}
        ></div>
      </div>
      {enabled ? (
        <Image
          className="h-1/2 z-[20] w-1/2"
          src="/sound/soundON.svg"
          alt="Sound On"
          width={50}
          height={50}
        />
      ) : (
        <Image
          className="h-1/2 z-[20] w-1/2"
          src="/sound/soundOFF.svg"
          alt="Sound Off"
          width={50}
          height={50}
        />
      )}
    </div>
  );
}
