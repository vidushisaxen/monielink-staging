import React from "react";

function SwiperButton({ isRight , rotate, removeBg, onClick}) {
  return (
    <div
      className="border border-[#636363] cursor-pointer p-5 px-6"
      style={{
        clipPath: "polygon(25% 0%, 100% 0, 100% 76%, 75% 100%, 0 100%, 0 26%)",
        backgroundColor: removeBg ? "#F5F5F5" : "#050505",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <svg
        className={`${isRight ? "rotate-180" : ""} ${rotate ? "-rotate-45" : ""}`}
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.05225 19.3763L11.0522 12.3763L6.05225 5.37634H8.50225L13.5022 12.3763L8.50225 19.3763H6.05225ZM12.0022 19.3763L17.0022 12.3763L12.0022 5.37634H14.4522L19.4522 12.3763L14.4522 19.3763H12.0022Z"
          fill={removeBg ? "#050505" : "white"}
        />
      </svg>
    </div>
  );
}

export default SwiperButton;
