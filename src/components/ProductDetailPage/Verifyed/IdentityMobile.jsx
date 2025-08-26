"use client";
import Copy from "@/components/Animations/Copy";
import React, { useRef } from "react";
import Biometrics from "./Biometrics";
import Image from "next/image";

const IdentityMobile = () => {
  const sectionRef = useRef(null);

  return (
    <section
      data-theme="orange"
      className="w-screen h-full max-md:mt-[-1px] overflow-hidden bg-gradient relative hidden max-sm:block max-md:block"
      ref={sectionRef}
    >
      <div className="px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw] max-sm:pb-[15%] max-sm:px-[5.5vw] max-md:px-[5vw] max-md:gap-[10vw] max-sm:gap-[15vw]">
        <div className="w-[90%] max-md:w-[100%] max-sm:w-full">
          <Copy>
            <h2 className="text-head-100 font-display text-center capitalize max-sm:text-left max-md:text-left">
              Verifyed: Instant Digital KYC & Customer Upgrade Solution
            </h2>
          </Copy>
        </div>
        <div className="flex flex-col gap-[4vw] w-full">
          <Copy>
            <h3 className="text-head-60 font-display max-md:text-center max-sm:text-left">Step 1: Sign-up</h3>
          </Copy>
          <Copy>
            <p className="max-md:text-content-20 max-md:text-center max-sm:text-left">
              Customers start the onboarding process on Partner&apos;s Mobile App.
            </p>
          </Copy>
        </div>
        <Copy>
          <p className='text-head-60 font-display  font-light'>Step 2: Facial Biometrics & Liveness Detection</p>
        </Copy>
        <Biometrics />
        <div className="flex flex-col gap-[8vw]">
          <div className="w-full pl-[5.5vw] max-md:pl-[5vw]">
            <Copy>
              <h3 className="text-head-80 font-display w-[90%] leading-[1.25]  max-sm:text-left max-md:text-center">
                Step 3: Identity Capture & Matching (KYC Level 1 & 2)
              </h3>
            </Copy>
          </div>
          <div className="w-screen overflow-x-scroll  flex flex-col items-center max-sm:items-start max-sm:px-[5vw] max-md:py-[5vw] max-sm:gap-[8vw] max-md:px-[5vw] scrollbar-hidden">
            <div className="w-[85%] max-sm:w-[150%] max-md:w-[180%] max-md:translate-x-[45%] max-sm:translate-x-0  max-md:px-[5vw] fadeupanim max-sm:ml-[5vw]">
             
              <div className="h-full w-full max-sm:w-full max-md:scale-[1.5] max-sm:scale-[1.2]">
                <Image src={"/assets/icons/diagrams/verifyed-step-3-mobile.svg"} height={130} width={462} alt="verifyed identity capture"/>

              </div>

              <div className="w-full flex max-md:translate-x-[-25%] max-sm:translate-x-[-3%] max-md:mt-[5vw] items-start justify-between py-[2vw]  max-md:px-[3vw] max-md:gap-[10vw] max-sm:justify-start max-md:justify-start max-sm:gap-0 max-sm:ml-[-5vw] max-sm:w-[120%]">
                <div className=" w-[18%] max-md:w-[30%] max-sm:w-[70vw]">
                  <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 max-md:text-content-20 max-md:w-full font-body  text-center   max-sm:text-content-20 max-sm:text-left max-md:text-left">
                    <li>Customer scans or inputs NIN</li>
                    <li>OCR captures and matches data to NIMC</li>
                    <li>Facial biometrics used to verify identity</li>
                  </ul>
                </div>
                <div className=" w-[15%] max-md:w-[20%] max-sm:w-[70vw] max-sm:ml-[10vw]">
                  <ul className="pl-[2vw] max-sm:pl-[8vw] list-disc  space-y-[0.8vw] font-medium text-content-24 max-md:text-content-20 max-md:w-full font-body  text-center   max-sm:text-content-20 max-sm:text-left max-md:text-left">
                    <li className="">Customer enters BVN; details fetched from NIBSS</li>
                    <li>Facial biometrics matched with BVN profile</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto h-full text-white relative z-10  items-center gap-5 justify-end hidden max-sm:flex  max-sm:mt-[5vw] max-sm:pr-[5vw]">
            <span className="text-content-18">Swipe</span>
            <div className="rotate-180 text-white flex items-center justify-center gap-0 w-fit h-full">
              <svg
                className="arrow primera next"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="arrow segunda next"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8vw]">
          <div className="w-full pl-[5.5vw]">
            <Copy>
              <h3 className="text-head-80 font-display w-[90%] leading-[1.25] max-sm:text-left max-md:text-center">
                Step 4: Full ID & Address Verification (KYC Level 3)
              </h3>
            </Copy>
          </div>
          <div className="w-screen overflow-x-scroll flex flex-col items-center  max-sm:items-start max-sm:px-[5vw] max-sm:gap-[8vw] max-md:px-[5vw] scrollbar-hidden">
            <div className="w-[85%] max-sm:w-[150%] max-md:translate-x-[15%]  max-sm:translate-x-[25%] max-md:py-[10vw] max-md:w-[120%] max-md:px-[5vw] fadeupanim max-sm:ml-[10vw]">
             
 
              <div className="h-full w-full max-sm:w-full max-md:scale-[1.5] max-sm:scale-[1.75] max-sm:translate-x-0 max-md:translate-x-[20%]">
                <Image src={"/assets/icons/diagrams/verifyed-step-4-mobile.svg"} height={130} width={785} alt="verifyed identity capture" className="h-full w-full"/>

              </div>

              <div className="w-full flex items-start justify-between max-md:justify-start max-md:gap-[15vw]  max-md:px-[2vw] py-[2vw] max-sm:px-[5vw] max-md:mt-[5vw] max-md:translate-x-[-5%] max-sm:translate-x-[-18%] max-sm:justify-between max-sm:w-[210%] max-sm:gap-[0vw] max-md:w-[170%]">
                <div className=" w-[18%] max-md:w-[50%]  max-sm:w-[90vw]">
                  <ul className="pl-[2vw] max-md:w-full max-md:pl-[3vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body  text-center   max-sm:text-content-20 max-sm:text-left max-md:text-content-20 max-md:text-left">
                    <li>OCR reads ID; facial biometrics matched</li>
                    <li>Customer scans acceptable ID (e.g., driver’s license, voter’s card)</li>
                  </ul>
                </div>
                <div className=" w-[15%] max-md:w-[30%] max-sm:w-[90vw]">
                  <ul className="max-sm:pl-[10vw] max-md:pl-[7vw] max-md:w-full list-disc space-y-[0.8vw] font-medium text-content-24 font-body  text-center   max-sm:text-content-20 max-sm:text-left max-md:text-content-20 max-md:text-left">
                    <li className="max-md:text-nowrap">OCR captures and matches data</li>
                    <li>Customer uploads utility bill or acceptable proof of address</li>
                    <li className="max-md:text-nowrap">Customer selects residence on map</li>
                  </ul>
                </div>
                 <div className=" w-[15%] max-md:w-[30%] max-sm:w-[90vw]">
                  <ul className="max-sm:pl-[10vw] max-md:pl-[7vw] max-md:w-full list-disc space-y-[0.8vw] font-medium text-content-24 font-body  text-center   max-sm:text-content-20 max-sm:text-left max-md:text-content-20 max-md:text-left">
                    <li className="max-md:text-nowrap">CAC or other document is verified</li>
                    <li>Customer enters registration details</li>
                    <li className="max-md:text-nowrap">Location is selected on map</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto h-full text-white relative z-10  items-center gap-5 justify-end hidden max-sm:flex max-sm:mt-[5vw] max-sm:pr-[5vw] max-md:flex max-md:pr-[5vw]">
            <span className="text-content-18">Swipe</span>
            <div className="rotate-180 text-white flex items-center justify-center gap-0 w-fit h-full">
              <svg
                className="arrow primera next"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="arrow segunda next"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

            <div className="flex flex-col gap-[4vw] w-full px-[5vw]">
          <Copy>
            <h3 className="text-head-80 font-display  max-sm:text-left max-md:text-center">Step 5: Verification Done</h3>
          </Copy>
          <Copy>
            <p className="max-md:text-content-20  max-sm:text-left max-md:text-center">
              Upon passing all checks, customer’s profile gets approved and fully verified.
            </p>
          </Copy>
        </div>
        </div>
      </div>
    </section>
  );
};

export default IdentityMobile;
