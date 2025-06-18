import React from "react";

function SocialMediaBtn({ href, children, className = "", ...props }) {
    return (
        <a href={href || "#"} className={`group ${className}`} {...props} aria-label="Read More" target="_blank">
            <div className="text-[#A8A8A8] group-hover:text-[#FF5100] duration-300 transition-colors relative flex items-center justify-center w-[4.2vw]">
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
                        stroke="#636363"
                    />
                </svg>

                <div className="absolute inset-[6%]">
                    <div style={{clipPath: "polygon(100% 0%, 100% 66%, 71% 100%, 0% 100%, 0% 33%, 28% 0%)"}} className="w-full absolute flex items-center justify-center h-full bg-[#636363]/20 group-hover:scale-100 scale-50 transition-all duration-400 opacity-0 group-hover:opacity-100" />
                    <div className="w-full h-full py-[28%] group-hover:scale-110 duration-300">
                        {children}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default SocialMediaBtn;