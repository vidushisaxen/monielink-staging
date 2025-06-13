import Link from "next/link";
import React from "react";
import DecryptedText from "../DecryptedText";

export default function ButtonComponent({
  text,
  bgColor,
  borderTrue,
  borderColor,
  darkTheme,
  textSize,
  chevronSize,
  link
}) {
  return (
    <Link href={`${link}`} className="flex cursor-pointer justify-center items-center w-fit h-fit">
      <div
        style={{
          clipPath: "polygon(0 0, 92% 0, 100% 19%, 100% 100%, 7% 100%, 0 83%)",
        }}
        className={`${bgColor ? "bg-transparent" : "bg-gradient"} ${
          borderTrue ? `border border-${borderColor}` : ""
        } p-1 rounded-sm `}
      >
        <div
          style={{
            clipPath:
              "polygon(0 0, 92% 0, 100% 19%, 100% 100%, 7% 100%, 0 83%)",
            WebkitClipPath:
              "polygon(0 0, 92% 0, 100% 19%, 100% 100%, 7% 100%, 0 83%)",
            clipPath:
              "polygon(0 0, 92% 0, 100% 19%, 100% 100%, 7% 100%, 0 83%)",
            border: `1px solid ${borderColor}`,
          }}
          className=" py-4 px-8"
        >
          <div className="flex items-center gap-2">
            <p
              style={{
                fontSize: textSize ? textSize : ".9vw",
              }}
              className={` ${
                darkTheme ? "text-black" : "text-white"
              }`}
            >
              <DecryptedText text={text}/>
            </p>
            <div style={{
              width: chevronSize ? chevronSize : "1.5vw",
            }} className="w-[1.5vw] h-full flex items-center justify-center">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.05225 19.3763L11.0522 12.3763L6.05225 5.37634H8.50225L13.5022 12.3763L8.50225 19.3763H6.05225ZM12.0022 19.3763L17.0022 12.3763L12.0022 5.37634H14.4522L19.4522 12.3763L14.4522 19.3763H12.0022Z"
                  fill={darkTheme ? "black" : "white"}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
