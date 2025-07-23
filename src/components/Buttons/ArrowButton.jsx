import Link from "next/link";
import React from "react";

function ArrowButton({ href, onClick, rotate,arrowColor,borderColor,hoverColor, className = "", ...props }) {
    const sharedContent = (
        <>
            <div className="relative flex items-center justify-center max-sm:w-[14vw]">
                <svg
                    className="w-full h-full"
                    width="77"
                    height="67"
                    viewBox="0 0 77 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.6787 0.5H75.0049C75.8333 0.5 76.5049 1.17158 76.5049 2V44.5264C76.5049 44.9221 76.349 45.3021 76.0703 45.583L66.1035 55.6279L55.7939 65.9775C55.5125 66.2601 55.1303 66.4199 54.7314 66.4199H2C1.17193 66.4197 0.50026 65.748 0.5 64.9199V22.3535C0.500017 22.0156 0.614008 21.6891 0.821289 21.4258L0.916016 21.3164L11.8223 9.91504L11.8213 9.91406L20.6074 0.950195C20.8895 0.662321 21.2756 0.5 21.6787 0.5Z"
                        stroke={`${borderColor}`}
                    />
                </svg>

                <div className="absolute inset-[6%]">
                    <div
                        style={{
                            clipPath:
                                "polygon(100% 0%, 100% 66%, 71% 100%, 0% 100%, 0% 33%, 28% 0%)",
                        }}
                        className={`w-full absolute flex items-center justify-center h-full  group-hover:scale-100 scale-50 transition-all duration-400 opacity-0 group-hover:opacity-100 ${hoverColor}`}
                    ></div>

                    <div className="rotate-180 w-full h-full ">
                        <div
                            className={`round flex items-center justify-center gap-0 w-full h-full ${rotate}`}
                        >
                            <svg
                                className="arrow primera next "
                                width="8"
                                height="15"
                                viewBox="0 0 8 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                                    fill={`${arrowColor}`}
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
                                    fill={`${arrowColor}`}
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
                className={`text-black group ${className}`}
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
                className={`text-black group bg-transparent border-none cursor-pointer p-0 ${className}`}
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
            className={`text-black group ${className}`}
            {...props}
            aria-label="Read More"
        >
            {sharedContent}
        </a>
    );
}

export default ArrowButton;