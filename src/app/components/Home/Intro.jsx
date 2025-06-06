import React from "react";
import ButtonComponent from "../ButtonComponent";

export default function Intro() {
  return (
    <section id="intro" className="flex flex-col items-center justify-between h-screen py-[9vw] gap-16 bg-[#050505]">
      <p className="text-[#D6D6D6] text-[5vw] w-[70%] text-center leading-none font-display">
        Empowering Banks & Fintechs with Scalable Solutions
      </p>
      <p className="text-[#A8A8A8] text-[1.1vw] w-[44%] text-center leading-1.2 font-display ">
        Our Plug & Play SDK can be Easily Integrated into Mobile Apps of Banks &
        FinTechs to deliver a wide variety of use cases without requiring them
        to build these functionalities from scratch. Our Back-End Applications
        may be deployed in a dedicated instance on our Cloud Infrastructure
        providing our partners full control over its access, management ,
        security , data-protection & business continuity.
      </p>
      <ButtonComponent
        text="Learn More"
        bgColor={false}
        borderColor="white"
      />
    </section>
  );
}
