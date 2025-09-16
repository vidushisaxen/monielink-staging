'use client'
import { useHoverSound, useTickSound } from "@/fancy/SFX/SFX";
import Link from "next/link";
import React from "react";

function BlackButton({
  href,
  onClick,
  ariaLabel,
  rotate,
  text,
  className = "",
  ...props
}) {
  const { playSoundTick } = useTickSound();
  const {playSoundHover } =useHoverSound()

  const sharedContent = (
    <>
      <div
        // onMouseEnter={playSoundHover}
        // onClick={playSoundTick}
        className="round relative flex items-center justify-center w-[13.5vw] h-[4.3vw] max-sm:h-[17vw] max-sm:min-w-[55vw] max-md:w-[27vw] max-md:h-[7vh]"
      >
        <div className="absolute left-0 top-0 flex justify-start">
          <svg
            className="w-[5.5vw] h-auto max-sm:w-[25vw] max-md:w-[10vw]"
            width="101"
            height="55"
            viewBox="0 0 101 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 53.7144V27.3059C1 26.7807 1.20654 26.2766 1.57503 25.9025L25.5126 1.59662C25.8886 1.21493 26.4019 1 26.9376 1H100.242"
              stroke="#A8a8a8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute right-0 bottom-0 flex justify-end">
          <svg
            className="w-[5.5vw] h-auto rotate-180 max-sm:w-[25vw] max-md:w-[10vw]"
            width="101"
            height="55"
            viewBox="0 0 101 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 53.7144V27.3059C1 26.7807 1.20654 26.2766 1.57503 25.9025L25.5126 1.59662C25.8886 1.21493 26.4019 1 26.9376 1H100.242"
              stroke="#A8a8a8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute inset-0 z-10">
          <div className="btn-clipPath w-full absolute flex items-center justify-center h-full bg-black transition-all rounded-xs group-hover:scale-100 scale-x-[92%] scale-y-[82%] max-sm:scale-x-[93%] max-sm:scale-y-[80%] duration-400 border border-[#a8a8a8] after:h-[1.2px] after:bg-[#A8a8a8] after:w-[2vw] after:-rotate-[47.2deg] after:top-[14%] after:absolute after:left-[-3%] before:absolute before:h-[1.2px] before:w-[2vw] before:bg-[#A8a8a8] before:-rotate-[48.3deg] before:right-[-3.4%] before:bottom-[14%]"></div>
          <div className="w-[90%] mx-auto h-full text-white relative z-10 flex items-center gap-[1vw] justify-center max-sm:gap-[3vw] max-md:gap-[1.5vw]">
            <span className="text-content-18 text-end capitalize pl-[0.2vw]">
              {text}
            </span>
            <div className="rotate-180 text-white flex items-center justify-center gap-0 w-[1vw] h-full max-sm:w-[4vw] max-md:w-[1.5vw]">
              <svg
                className="arrow primera next"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="arrow segunda next"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[1px] h-[1px] overflow-hidden">{ariaLabel}</div>
      </div>
    </>
  );

  // Use <Link> only when it's a valid internal route
  if (href && typeof href === "string" && !href.startsWith("javascript")) {
    return (
      <Link
        href={href}
        className={`text-[#FF5100] pointer-events-auto group ${className}`}
        {...props}
        aria-label="Read More"
      >
        {sharedContent}
      </Link>
    );
  }

  // Use <button> when no href is provided
  if (typeof onClick === "function") {
    return (
      <button
        onClick={onClick}
        className={`text-[#FF5100] group bg-transparent border-none cursor-pointer pointer-events-auto p-0 ${className}`}
        {...props}
        aria-label="Read More"
      >
        {sharedContent}
      </button>
    );
  }

  // Fallback to <a> if href is present but not usable in <Link>
  return (
    <a
      href={href || "#"}
      onClick={(e) => e.preventDefault()}
      className={`text-[#FF5100] group pointer-events-auto ${className}`}
      {...props}
      aria-label="Read More"
    >
      {sharedContent}
    </a>
  );
}

export default BlackButton;
