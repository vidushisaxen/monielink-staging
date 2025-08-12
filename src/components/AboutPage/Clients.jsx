"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        const clients = gsap.utils.toArray(".client");

        clients.forEach((client) => {
          // Randomly decide whether to animate on x or y axis
          const isX = Math.random() > 0.5;
          const axis = isX ? "x" : "y";
          const direction = Math.random() > 0.5 ? 1 : -1;
          const distance = 500 * direction;
          gsap.from(client, {
            // [axis]: distance,
            opacity: 0,
            ease: "power3.in",
            scrollTrigger: {
              trigger: "#clients",
              start: "top 40%",
              //   markers:true,
              toggleActions: "play none none reverse",
            },
            duration: 1,
          });
          gsap.from(client, {
            [axis]: distance,
            //   opacity: 0,
            ease: "power1.out",
            scrollTrigger: {
              trigger: "#clients",
              start: "top 50%",
              // markers:true,
              toggleActions: "play none none reverse",
            },
            duration: 1,
          });

          [1, 2, 3, 4, 5].forEach((i) => {
            gsap.to(`.line-drop-${i}`, {
              y: "100vh",
              duration: (Math.random() + 1) * 5, // Random duration between 6 and 10   // Random delay between 1 and 5
              ease: "none",
              repeat: -1, // Ensures randomness on every repeat
            });
          });
        });
      } else {
        const clients = gsap.utils.toArray(".client");

        clients.forEach((client) => {
          [1, 2, 3, 4, 5].forEach((i) => {
            gsap.to(`.line-drop-${i}`, {
              y: "80vh",
              duration: (Math.random() + 1) * 5, // Random duration between 6 and 10   // Random delay between 1 and 5
              ease: "none",
              repeat: -1, // Ensures randomness on every repeat
            });
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <section
      className="w-screen px-[4vw] overflow-hidden max-md:py-[15%] max-sm:px-[5.5vw] max-sm:py-[15%] max-sm:pb-[25%]"
      id="clients"
    >
      <div className="w-full h-[90vh] flex justify-between max-md:flex-col max-md:items-start max-md:h-fit max-md:gap-[12vw] items-center max-sm:flex-col max-sm:items-start max-sm:h-fit max-sm:px-0 max-md:px-[5vw] max-sm:gap-[12vw]">
        <Copy>
          <h2 className="w-[40%] text-[5.2vw] max-sm:px-0 font-display leading-[1.1] text-white py-[5vw] max-sm:text-head-100 max-sm:w-[89%] max-md:text-head-100 max-md:w-[80%] capitalize">
            Clients & Partners we work alongside
          </h2>
        </Copy>
        <div className="w-[50%] h-full grid grid-cols-4 grid-rows-5 relative max-sm:w-full max-sm:hidden max-md:w-full max-md:hidden">
          <div className="w-[1px] h-full absolute top-0 left-0 bg-white/10">
            <span className="w-[1px] h-[8vw] absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#fe5900] -translate-y-[200%] line-drop-1" />
          </div>
          <div className="w-[1px] h-full absolute top-0 left-1/4 bg-white/10">
            <span className="w-[1px] h-[8vw] absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#fe5900] -translate-y-[200%] line-drop-2" />
          </div>
          <div className="w-[1px] h-full absolute top-0 left-1/2 bg-white/10">
            <span className="w-[1px] h-[8vw] absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#fe5900] -translate-y-[200%] line-drop-3" />
          </div>
          <div className="w-[1px] h-full absolute top-0 left-3/4 bg-white/10">
            <span className="w-[1px] h-[8vw] absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#fe5900] -translate-y-[200%] line-drop-4" />
          </div>
          <div className="w-[1px] h-full absolute top-0 right-0 bg-white/10">
            <span className="w-[1px] h-[8vw] absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#fe5900] -translate-y-[200%] line-drop-5" />
          </div>
          <div className="col-start-2 col-span-1 row-start-2 border border-l-[0.5px] border-r-[0.5px] border-white/10 client p-[2vw]">
            <Image
              src={"/assets/icons/clients/fcmb.svg"}
              width={200}
              height={200}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="col-start-3 col-span-1 row-start-2 border border-white/10 border-l-[0.5px] border-r-[0.5px] client p-[3vw]">
            <Image
              src={"/assets/icons/clients/visa.svg"}
              width={200}
              height={200}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          {/* <div className="col-start-4 col-span-1 row-start-2 border border-white/10 border-l-[0.5px] border-r-[0.5px] client p-[2vw]">
            <Image
              src={"/assets/icons/logo/3.svg"}
              width={200}
              height={200}
              alt=""
              className="w-full h-full object-contain"
            />
          </div> */}
          <div className="col-start-1 col-span-1 row-start-3 border border-white/10 border-l-[0.5px] border-r-[0.5px] client p-[2.5vw]">
            <Image
              src={"/assets/icons/clients/mastercard.svg"}
              width={150}
              height={150}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="col-start-2 col-span-1 row-start-3 border border-white/10 border-l-[0.5px] border-r-[0.5px] client p-[2vw]">
            <Image
              src={"/assets/icons/clients/tranzact.svg"}
              width={200}
              height={200}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="col-start-3 col-span-1 row-start-3 border border-white/10 border-l-[0.5px] border-r-[0.5px] client p-[2vw]">
            <Image
              src={"/assets/icons/clients/interswitch.svg"}
              width={200}
              height={200}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="col-start-4 col-span-1 row-start-3 border border-white/10 border-l-[0.5px] border-r-[0.5px] client p-[2vw]">
            <Image
              src={"/assets/icons/clients/NIBSS.svg"}
              width={200}
              height={200}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          {/* <div className="col-start-1 col-span-1 row-start-4 border border-white/10 border-l-[0.5px] border-r-[0.5px] client p-[3vw]">
            <Image
              src={"/assets/icons/logo/9.svg"}
              width={200}
              height={200}
              alt=""
              className="w-full h-full object-contain"
            />
          </div> */}
          <div className="col-start-2 col-span-1 row-start-4 border border-white/10 border-l-[0.5px] border-r-[0.5px] client p-[2vw]">
            <Image
              src={"/assets/icons/clients/unified.svg"}
              width={200}
              height={200}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="col-start-3 col-span-1 row-start-4 border border-white/10 border-l-[0.5px] border-r-[0.5px] client p-[2vw]">
            <Image
              src={"/assets/icons/clients/access.svg"}
              width={200}
              height={200}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* <div className="col-start-4 col-span-1 border border-white/10 "></div> */}
        </div>
        <div className="w-full max-sm:h-full max-md:h-[60vh] max-sm:block max-sm:px-0 max-md:px-[4vw] max-md:block hidden">
          <div className="w-full h-full grid grid-cols-2 grid-rows-4 relative overflow-hidden">
            <div className="w-[1px] h-full absolute top-0 left-0 bg-white/10">
              <span className="w-[1px] h-[20vw] absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#fe5900] -translate-y-[200%] line-drop-1" />
            </div>
            <div className="w-[1px] h-full absolute top-0 right-[0.2%] bg-white/10">
              <span className="w-[1px] h-[20vw] absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#fe5900] -translate-y-[200%] line-drop-2" />
            </div>
            <div className="w-[1px] h-full absolute top-0 left-1/2 bg-white/10">
              <span className="w-[1px] max-sm:h-[20vw] max-md:h-[15vw] absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#fe5900] -translate-y-[200%] line-drop-3" />
            </div>
            <div className="col-start-1 p-[4vw] max-sm:p-[4vw] max-md:p-[7.5vw] max-sm:h-[20vh] max-md:h-[15vh] border border-l-[0.5px] border-r-[0.5px] border-white/10">
              <Image
                src={"/assets/icons/clients/fcmb.svg"}
                width={200}
                height={200}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-start-2 max-sm:p-[10vw] max-md:p-[6.5vw] max-sm:h-[20vh] max-md:h-[15vh] border border-l-[0.5px] border-r-[0.5px] border-white/10">
              <Image
                src={"/assets/icons/clients/visa.svg"}
                width={200}
                height={200}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-start-1 p-[4vw] max-sm:p-[10vw] max-md:p-[7vw] max-sm:h-[20vh] max-md:h-[15vh] border border-l-[0.5px] border-r-[0.5px] border-white/10">
              <Image
                src={"/assets/icons/clients/mastercard.svg"}
                width={200}
                height={200}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-start-2 max-sm:p-[4vw] max-md:p-[4vw] max-sm:h-[20vh] max-md:h-[15vh] border border-l-[0.5px] border-r-[0.5px] border-white/10">
              <Image
                src={"/assets/icons/clients/tranzact.svg"}
                width={200}
                height={200}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-start-1 p-[4vw] max-sm:p-[8vw] max-md:p-[8vw] max-sm:h-[20vh] max-md:h-[15vh] border border-l-[0.5px] border-r-[0.5px] border-white/10">
              <Image
                src={"/assets/icons/clients/interswitch.svg"}
                width={200}
                height={200}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-start-2 max-sm:p-[8vw] max-md:p-[4vw]  max-sm:h-[20vh] max-md:h-[15vh] border border-l-[0.5px] border-r-[0.5px] border-white/10">
              <Image
                src={"/assets/icons/clients/NIBSS.svg"}
                width={200}
                height={200}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-start-1 p-[4vw] max-sm:p-[7vw] max-md:p-[7.5vw] max-sm:h-[20vh] max-md:h-[15vh] border border-l-[0.5px] border-r-[0.5px] border-white/10">
              <Image
                src={"/assets/icons/clients/unified.svg"}
                width={200}
                height={200}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="col-start-2 max-sm:p-[10vw] max-md:p-[7vw] max-sm:h-[20vh] max-md:h-[15vh] border border-l-[0.5px] border-r-[0.5px] border-white/10">
              <Image
                src={"/assets/icons/clients/access.svg"}
                width={200}
                height={200}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
