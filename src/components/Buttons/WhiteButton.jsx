import Link from "next/link";
import React from "react";

function WhiteButton({ href, onClick, rotate, text, className = "", ...props }) {
    const sharedContent = (
        <>
            <style jsx>{`
              @keyframes bounceAlpha {
                0% {
                  opacity: 1;
                  transform: translateX(0px) scale(1);
                }
                25% {
                  opacity: 0;
                  transform: translateX(-10px) scale(0.9);
                }
                26% {
                  opacity: 0;
                  transform: translateX(10px) scale(0.9);
                }
                55% {
                  opacity: 1;
                  transform: translateX(0px) scale(1);
                }
              }

              .round:hover .arrow {
                animation-name: bounceAlpha;
                animation-duration: 1.4s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
              }
              .round:hover .arrow.segunda {
                animation-delay: 0.2s;
              }
            `}</style>

            <div className="round relative flex items-center justify-center w-[12.5vw] h-[4.3vw]">
                <div className="absolute left-0 top-0 flex justify-start">
                    <svg className="w-[5.5vw] h-auto" width="101" height="55" viewBox="0 0 101 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 53.7144V27.3059C1 26.7807 1.20654 26.2766 1.57503 25.9025L25.5126 1.59662C25.8886 1.21493 26.4019 1 26.9376 1H100.242" stroke="#A8a8a8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="absolute right-0 bottom-0 flex justify-end">
                    <svg className="w-[5.5vw] h-auto rotate-180" width="101" height="55" viewBox="0 0 101 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 53.7144V27.3059C1 26.7807 1.20654 26.2766 1.57503 25.9025L25.5126 1.59662C25.8886 1.21493 26.4019 1 26.9376 1H100.242" stroke="#A8a8a8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="absolute inset-0 z-10">
                    <div
                        style={{
                            clipPath: 'polygon(100% 0%, 100% 2.9vw, 11.1vw 100%, 0% 100%, 0% 1.4vw, 1.4vw 0%)',
                        }}
                        className="w-full absolute flex items-center justify-center h-full bg-trasnparent transition-all rounded-xs group-hover:scale-100 scale-x-[92%] scale-y-[82%] group-hover:bg-white duration-400 border border-[#a8a8a8] after:h-[1.5px] after:bg-[#A8a8a8] after:w-[2vw] after:-rotate-45 after:top-[14%] after:absolute after:left-[-3%] before:absolute before:h-[1.5px] before:w-[2vw] before:bg-[#A8a8a8] before:-rotate-45 before:right-[-3%] before:bottom-[14%]"
                    >
                    </div>
                    <div className="w-[80%] mx-auto h-full text-black relative z-10 flex items-center gap-5 justify-center">
                        <span className="text-[1vw] text-end">{text}</span>
                        <div className="rotate-180 text-black flex items-center justify-center gap-0 w-fit h-full">
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

export default WhiteButton;