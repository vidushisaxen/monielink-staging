import Image from "next/image";
import React from "react";

export default function USPs() {
  return (
    <section
      id="usps"
      className="h-fit  py-[11vw] flex items-center flex-col justify-center  w-screen bg-gradient-to-r from-[#FF5100] to-[#FE6E00]"
    >
      <div className="w-full flex items-center justify-center">
        <p className="text-white w-[70%] text-[5vw] pb-[6vw] text-center font-display leading-none">
          Scalable, Secure, and Cost-Efficient Banking Infrastructure
        </p>
      </div>
      <div className="flex items-center  justify-center w-full  flex-col  gap-16">
        {[
          {
            svg: "/assets/cloud.svg",
            title: "Cloud Based Implementation",
            description:
              "Deploy dedicated cloud instances with partner-managed access control and firewalls.",
          },
          {
            svg: "/assets/secure.svg",
            title: "Secure  environments",
            description:
              "Meet regulatory compliance with secure, isolated environments at lower cost and higher efficiency than on-premise systems.",
          },
          {
            svg: "/assets/saas.svg",
            title: "Dedicated Instant SaaS",
            description:
              "Eliminate heavy upfront licensing costs with our revenue-sharing SaaS model.",
          },
          {
            svg: "/assets/integration.svg",
            title: "Seamless integration",
            description:
              "Seamlessly integrate digital banking experiences using our Super SDK front-end and dedicated cloud back-end — fully managed on Monielink Infrastructure.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-20 h-full w-full justify-center"
          >
            <div className=" w-[40%] items-end justify-end flex h-full ">
              <Image
                className="h-1/3 w-1/3"
                src={item.svg}
                alt={item.title}
                width={250}
                height={250}
              />
            </div>
            <div className="flex items-start w-[60%] justify-center font-body flex-col gap-6 h-full  text-white">
              <p className="text-[1.6vw]">{item.title}</p>
              <p className="text-[1vw] w-[45%] leading-1.1 tracking-wide">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center h-[70vh] pt-[10vw] text-white font-display flex-col justify-center mt-[5vw]">
        <p className="text-[7vw] leading-[8vw]">One SDK.</p>
        <p className="text-[7vw] leading-none">Endless Possibilities.</p>
      </div>
    </section>
  );
}
