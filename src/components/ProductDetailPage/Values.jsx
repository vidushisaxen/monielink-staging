import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";

const Values = ({ data }) => {
  return (
    <section data-theme="white" className="w-screen h-full bg-white-1">
      <div className="w-full h-full px-[4vw] py-[7vw] flex items-start justify-between max-sm:flex-col max-sm:py-[15%] max-sm:pb-[25%] max-sm:px-[5.5vw]">
        <div className="w-1/2 flex items-start justify-between max-sm:w-full max-sm:gap-[8vw]">
          <div>
            <Copy>
              <h2 className="text-head-100 font-display text-black-1">
                {data.heading}
              </h2>
            </Copy>
          </div>
        </div>
        <div className="w-[40%] pt-[5vw] max-sm:w-full max-sm:mt-[12vw]">
          <div className="space-y-[10vw] ">
            {data.list.map((item, index) => (
              <div
                key={index}
                className="w-full flex gap-[1.5vw] items-center overflow-hidden max-sm:items-start max-sm:gap-[5vw]"
              >
                <span className="h-[2vw] w-[0.6vw] max-sm:w-[2vw] max-sm:h-[10vw] bg-[#FE6E00] fadeupanim" />
                <Copy>
                  <div
                    className="text-content-20 text-black-1 font-body w-[80%]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </Copy>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
