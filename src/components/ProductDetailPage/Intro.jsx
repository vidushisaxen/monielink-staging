import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";

const Intro = ({ content }) => {
  return (
    <section data-theme="white" className="w-screen h-full bg-white-1">
      <div className="w-full h-full px-[4vw] py-[7vw] flex items-start justify-start max-sm:flex-col max-sm:py-[15%] max-sm:gap-[8vw] max-sm:px-[5.5vw]">
        <div className="w-[45%] flex items-start justify-start max-sm:w-full">
          <div className="w-[15vw] h-[5vw] fadeupanim max-sm:w-[50vw] max-sm:h-auto ">
            <Image
              src={content.logo}
              height={100}
              width={100}
              alt="balance"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="w-1/2 flex items-start justify-start max-sm:w-full">
          <div className="flex flex-col w-[70%] space-y-[5vw] max-sm:w-full max-sm:space-y-[12vw]">
            <Copy>
              <h2 className="text-head-60 font-display text-black-1 max-sm:w-[90%]">
                {content.heading}
              </h2>
            </Copy>

            <div className="space-y-[2vw] max-sm:space-y-[8vw] ">
              {content.list.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex gap-[1.5vw] items-center overflow-hidden max-sm:gap-[5vw]"
                >
                  <span className="h-[2vw] w-[0.6vw] max-sm:h-[10vw] max-sm:w-[2vw]  bg-[#FE6E00] fadeupanim " />
                  <Copy>
                    <p className="text-content-20 text-black-1 font-body w-[75%] max-sm:w-full">
                      {item}
                    </p>
                  </Copy>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
