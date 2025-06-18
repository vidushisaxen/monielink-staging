"use client"
import React from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import Image from "next/image";
import Solutions3 from "./Solutions3";

export default function Solutions() {
  return (
    <section
      className="w-screen h-fit flex flex-col bg-background relative z-[2] pb-[10%]"
      id="overview"
    >
      <div className="border-t w-full flex items-center justify-center border-b border-[#282828]  ">
        {[
          "Digital Banking & Payments",
          "Security & Support",
          "Dual Transaction Services",
          "Lending",
          "Merchant Acquiring",
          "Card Issuing",
          "KYC"
        ].map((item, index) => (
          <div
            key={index}
            className="border-l py-5 px-[3.3vw] border-r border-[#282828]"
          >
            <p key={index} className="text-[#A8A8A8] text-[0.95vw]">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="w-screen h-[500vh]" id="solutions">

      <Solutions3/>
      </div>
      {/* <div className="h-screen relative w-full py-[5vw] bg-background">
        <div className="h-full w-full flex   items-center justify-center ">
          <div className="w-[70vw]  h-auto flex items-center justify-center">
            <Image
              src={"/assets/icons/frameScroll.svg"}
              alt="frameScoll"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>
          <div className="h-screen w-screen flex items-center justify-center absolute inset-0 ">
            <div className="  flex flex-col items-start px-[18vw] justify-evenly   h-[80%]  w-full ">
              <p className=" text-foreground  text-[1vw] ">001</p>
              <div className="flex items-start justify-start  gap-10 ">
                <div className="h-full w-[2vw] ">
                  <img
                    className="w-full h-[70%]"
                    src="/assets/images/solutionsLights.png"
                    alt="solutionLights"
                  />
                </div>
                <div className="w-[50%] flex flex-col items-start justify-center ">
                  <p className="text-[#D6D6D6] font-display leading-none text-[3.12vw]">
                    Digital Account
                  </p>
                  <p className="pt-10 text-[1.04vw] text-[#A8A8A8] w-[80%]">
                  From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.
                  </p>
                  <div className="pt-30">
                    <ButtonComponent
                      text="Talk to an expert"
                      borderTrue={true}
                      bgColor={true}
                      borderColor="#636363"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
