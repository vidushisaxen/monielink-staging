"use client";
import { useSound } from "@/fancy/SFX/SoundProvider";
import Image from "next/image";
import React from "react";
import { useHoverSound, useTickSound } from "./SFX";

export default function SoundButton() {
  const { enabled, toggle } = useSound();
   const {playSoundHover} =useHoverSound()
   const {playSoundTick} = useTickSound()

  return (
    <div
      onClick={() => {
        toggle()
        playSoundTick()
      }}
      onMouseEnter={playSoundHover}
      className="fixed cursor-pointer max-sm:h-[12vw] max-sm:w-[12vw] max-sm:right-[4vw] max-sm:bottom-[4vw] max-sm:rounded-[2vw] max-md:h-[12vw] max-md:w-[12vw] max-md:right-[4vw] max-md:bottom-[4vw] max-md:rounded-[2vw] z-[99] flex items-center justify-center bottom-[1vw] right-[1vw] h-[3vw] w-[3vw] rounded-[.5vw] bg-white/10 border border-white/20 text-white"
    >
      {enabled ? (
        <Image
          className="h-1/2 w-1/2"
          src="/sound/soundON.svg"
          alt="Sound On"
          width={50}
          height={50}
        />
      ) : (
        <Image
          className="h-1/2 w-1/2"
          src="/sound/soundOFF.svg"
          alt="Sound Off"
          width={50}
          height={50}
        />
      )}
    </div>
  );
}
