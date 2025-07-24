import React from "react";

function HamButton({ onClick, borderColor, menuOpen, className = "" , isInverted, isWhite, ...props }) {

    return (
        <button
            onClick={onClick}
            className={`text-white group bg-transparent border-none cursor-pointer p-0 ${className}`}
            {...props}
            aria-label="Open Menu"
        >
            <div className="relative flex items-center justify-center max-sm:w-[13vw] max-md:w-[8vw]">
                <svg
                    className="w-full h-full"
                    width="77"
                    height="67"
                    viewBox="0 0 77 67"
                    fill={`${isInverted || isWhite?"white":"[#050505]" }`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.6787 0.5H75.0049C75.8333 0.5 76.5049 1.17158 76.5049 2V44.5264C76.5049 44.9221 76.349 45.3021 76.0703 45.583L66.1035 55.6279L55.7939 65.9775C55.5125 66.2601 55.1303 66.4199 54.7314 66.4199H2C1.17193 66.4197 0.50026 65.748 0.5 64.9199V22.3535C0.500017 22.0156 0.614008 21.6891 0.821289 21.4258L0.916016 21.3164L11.8223 9.91504L11.8213 9.91406L20.6074 0.950195C20.8895 0.662321 21.2756 0.5 21.6787 0.5Z"
                        stroke={`${borderColor}`}
                    />
                </svg>

                <div className="absolute max-sm:inset-[20%] max-md:inset-[25%]">
                    <div className="h-full w-full flex items-center justify-center flex-col max-sm:gap-1.5 max-md:gap-2" >
                        <span className={`block h-[1.5px] w-[80%]  duration-300  ${menuOpen ? "max-sm:translate-y-[7px] rotate-45 max-md:translate-y-[9px]" : ""} ${isWhite ||isInverted ? "bg-[#050505]" :" bg-white"}`} />
                        <span className={`block h-[1.5px] w-[80%]  duration-300 ${menuOpen ? "scale-x-0" : ""} ${isWhite ||isInverted ? "bg-[#050505]" :" bg-white"} `} />
                        <span className={`block h-[1.5px] w-[80%]  duration-300 ${menuOpen ? "max-sm:-translate-y-[7px] -rotate-45 max-md:-translate-y-[9px]" : ""}  ${isWhite ||isInverted ? "bg-[#050505]" :" bg-white"}`} />
                    </div>
                </div>
            </div>
        </button>
    );
}

export default HamButton;