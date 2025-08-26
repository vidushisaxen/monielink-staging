"use client";
import Copy from "@/components/Animations/Copy";
import Image from "next/image";
import React, { useRef } from "react";

const MobileInfrastructure = () => {
  const sectionRef = useRef(null);
  const svgContainer = useRef(null);
  return (
    <section
      data-theme="orange"
      className="w-screen h-full max-md:h-fit max-md:mt-[-1px] max-md:block overflow-hidden bg-gradient relative hidden max-sm:block"
      ref={sectionRef}
    >
      <div className="px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw] max-sm:pb-[15%] max-sm:px-[5.5vw] max-sm:gap-[15vw]">
        <div className="w-[90%] max-sm:w-full">
          <Copy>
            <h2 className="text-head-100 font-display text-center max-sm:text-left max-md:text-left">
            All-in-One Wallet Infrastructure for Cards, Lending & Rewards
            </h2>
          </Copy>
        </div>
        <div className="w-screen overflow-x-scroll  flex flex-col items-center max-sm:items-start max-sm:px-[5vw] scrollbar-hidden">
          <div className="w-[85%] max-sm:w-[480%]  max-md:py-[5vw] translate-x-[60%] max-sm:translate-x-0 fadeupanim max-md:w-[220%] max-md:translate-x-[55%]" ref={svgContainer}>


<div className="w-full h-full max-md:scale-[1.5] max-sm:scale-[1.3]  max-md:pr-[15vw] max-sm:ml-[65vw]">
  <Image src={"/assets/icons/diagrams/balance-mobile-diagram.svg"} width={1708} height={130} alt="balance-mobile-diagram"/>

</div>

            <div className="w-full flex items-start justify-between py-[2vw] max-sm:px-[5vw] max-sm:pl-[10vw] max-sm:justify-between  max-sm:w-[130%] max-md:shrink-0 max-sm:gap-0 max-md:gap-[5vw]  max-md:translate-x-[-15%] max-sm:translate-x-0 max-md:mt-[5vw] max-md:w-[150%]">
              <div className=" w-[18%] max-md:w-[30%] ">
                <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body  max-md:w-full text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li  className="max-md:text-nowrap">Fund Transfers</li>
                  <li>Collect payments / Settlements</li>
                  <li className="max-md:text-nowrap">Digital Payments</li>
                </ul>
              </div>
              <div className=" w-[30%]  max-sm:w-[30%] max-sm:ml-[6vw] max-md:w-[30%] ">
                  <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Load Money</li>
                  <li>Card Controls</li>
                  <li className="max-md:text-nowrap">Spends</li>
                  <li>Card Statements</li>
                </ul>
              </div>{" "}
              <div className=" w-[30%] max-sm:pl-[6vw] max-sm:w-[30%] max-md:w-[30%] ">
                  <ul className="  list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Card Statement</li>
                  <li>Card Controls</li>
                  <li className="max-md:text-nowrap">Limit Management</li>
                  <li>Spends</li>
                  <li>Collection of Delinquent Amounts</li>
                  <li>Repayments</li>
                </ul>
              </div>{" "}
              <div className=" w-[18%]  max-sm:w-[30%] max-sm:ml-[5vw] max-md:w-[30%] ">
                  <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full  text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Loan Repayments</li>
                  <li >Collection of Delinquent Amount</li>
                  <li  className="max-md:text-nowrap">Loan Disbursement</li>
                  <li>Loan Statements</li>
                </ul>
              </div>{" "}
              <div className=" w-[18%] max-sm:w-[30%] max-sm:ml-[5vw] max-md:w-[30%] ">
                  <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full  text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Reward Points account Statement</li>
                  <li>Earn Reward Points</li>
                  <li className="max-md:text-nowrap">Tailored Loyalty Program</li>
                </ul>
              </div>
              <div className=" w-[30%] max-sm:w-[30%] max-md:ml-[4vw] max-sm:ml-[5vw] max-md:w-[30%] ">
                  <ul className="pl-[2vw] list-disc space-y-[0.8vw] font-medium text-content-24 font-body max-md:w-full  text-center text1 textanim  max-sm:text-content-20 max-sm:text-left max-md:text-left max-md:text-content-20">
                  <li className="max-md:text-nowrap">Usage of Redeemed Amount</li>
                  <li>Redeem Reward Points</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-full mx-auto h-full text-white relative z-10  items-center gap-5 justify-end hidden max-sm:flex max-md:flex max-sm:mt-[10vw]">
          <span className="text-content-18 max-md:text-content-20">Swipe</span>
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
    </section>
  );
};

export default MobileInfrastructure;
