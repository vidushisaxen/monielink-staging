"use client"
import React from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import Image from "next/image";


const data = [
  {
    tag:"Digital Account",
    index:"0",
    number:"001",
    title:"Digital Account",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"Loyalty",
    index:"1",
    number:"002",
    title:"Loyalty",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"Merchant Acquiring",
    index:"2",
    number:"003",
    title:"Merchant Acquiring",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"Digital Lending",
    index:"3",
    number:"004",
    title:"Digital Lending",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"Card Issuing",
    index:"4",
    number:"005",
    title:"Card Issuing",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
  {
    tag:"KYC",
    index:"5",
    number:"006",
    title:"KYC",
    para:"From strategy to execution, we help businesses thrive with expert IT consulting and cutting-edge technology solutions.",
    link:"/"
  },
]
const SolutionsCard =({number , title, para ,link})=>{
  return (
    <>
     <div className="h-full w-full flex   items-center justify-center ">
          <div className="w-[70vw]  h-auto flex items-center justify-center">
            <Image
              src={"/frameScroll.svg"}
              alt="frameScoll"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>
          <div className="h-screen w-screen flex items-center justify-center absolute inset-0 ">
            <div className="  flex flex-col items-start px-[18vw] justify-evenly   h-[80%]  w-full ">
              <p className=" text-foreground  text-[1vw] ">{number}</p>
              <div className="flex items-start justify-start  gap-10 ">
                <div className="h-full w-[2vw] ">
                  <img
                    className="w-full h-[70%]"
                    src="./assets/solutionsLights.png"
                    alt=""
                  />
                </div>
                <div className="w-[50%] flex flex-col items-start justify-center ">
                  <p className="text-[#D6D6D6] font-display leading-none text-[3vw]">
                    {title}
                  </p>
                  <p className="pt-10 text-[1vw] text-[#A8A8A8]">
                    {para}
                  </p>
                  <div className="pt-30">
                    <ButtonComponent
                    link={link}
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
    </>
  )
}

export default function Solutions() {
  return (
    <section
      className="w-screen h-fit flex flex-col  items-center justify-center"
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
        ].map((item, index) => (
          <div
            key={index}
            className="border-l py-5 px-[3.5vw] border-r border-[#282828]"
          >
            <p key={index} className="text-foreground text-[.9vw]">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="h-screen relative w-full py-[5vw] bg-background">
      {data.map(({ number, title, para, link }, idx) => (
          <div key={idx} className="h-screen py-[5vw]">
            <SolutionsCard
              number={number}
              title={title}
              para={para}
              link={link}
            />
          </div>
        ))}
      
      </div>
    </section>
  );
}
