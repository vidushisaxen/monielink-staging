import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function USPs() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#usps",
          start: "top top",
          end: "bottom top",
        },
      });
      const tl2= gsap.timeline({
        scrollTrigger: {
          trigger: "#usps",
          start: "65% top",
          end: "bottom top",
          once: true,
         
        },
      });
      gsap.set(".uspsText", {
        y: "100%",
      });
      tl.to(".uspsText", {
        y: "0%",
        duration: 0.5,
        ease: "none",
      });
     
      tl.to(".iconText", {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "none",
        stagger: 0.2,
      });
      tl2.to(".sdkText", {
        y: "0%",
        duration: 0.5,
        ease: "none",
      });
    });
    return () => ctx.revert();
   
  }, [])
  
  return (
    <section
      id="usps"
      className="h-fit  py-[11vw] flex items-center flex-col justify-center  w-screen bg-gradient-to-r from-[#FF5100] to-[#FE6E00]"
    >
      <div className="w-full overflow-hidden flex items-center justify-center">
        <p className="text-white w-[70%] text-[5vw] pb-[6vw] text-center font-display leading-none uspsText">
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
            <div className="flex items-start w-[60%] opacity-0 translate-y-20 iconText justify-center font-body flex-col gap-6 h-full  text-white">
              <p className="text-[1.6vw]">{item.title}</p>
              <p className="text-[1vw] w-[45%] leading-1.1 tracking-wide">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center overflow-hidden h-[70vh] pt-[10vw] text-white font-display flex-col justify-center mt-[5vw]">
        <p className="text-[7vw] sdkText translate-y-[210%] leading-[8vw]">One SDK.</p>
        <p className="text-[7vw] sdkText translate-y-[200%] leading-none">Endless Possibilities.</p>
      </div>
    </section>
  );
}
