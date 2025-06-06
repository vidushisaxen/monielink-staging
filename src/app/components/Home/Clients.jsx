import Image from "next/image";
import React from "react";

export default function Clients() {
  return (
    <section id="clients" className="h-fit  w-screen flex items-center justify-center relative bg-[#050505] ">
      <div className="w-screen h-screen ">
        <Image
          src={"/assets/lines (1).svg"}
          alt="linesClients"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
        <div className="w-1/2 h-full pt-[5vw] px-[3.75vw] flex flex-col items-start justify-start">
          <p className="text-[5vw] font-display font-light text-[#D6D6D6] leading-[5vw]">
            Clients &
          </p>
          <p className="text-[5vw] font-display font-light text-[#D6D6D6] leading-[5vw]">
            Partners We
          </p>
          <p className="text-[5vw] font-display font-light text-[#D6D6D6] leading-[5vw]">
            Work Alongside
          </p>
        </div>
        <div className="w-1/2 px-20 py-[2vw] h-full flex flex-col items-end justify-between ">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div key={num} className={`${num % 2 ? "mr-0" : "mr-20"} w-[8vw] h-[8vw] flex items-end justify-end`}>
              <Image
                src={`/assets/logo/${num}.svg`}
                alt="clients"
                width={100}
                height={100}
                className={`pr-[${Math.floor(Math.random() * 20)}vw] w-full h-full object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
