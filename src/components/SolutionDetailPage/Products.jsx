import React from "react";
import Copy from "../Animations/Copy";
import Image from "next/image";

const Products = () => {
  return (
    <section
      data-theme="white"
      id="features"
      className="bg-white-1 text-black-1 w-screen overflow-hidden"
    >
      <div className="px-[4.5vw] py-[8vw] w-full space-y-[8vw] max-sm:px-[5.5vw] max-sm:py-[15%] max-sm:space-y-[12vw]">
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-start">
          <div className="w-[52%] text-left max-sm:w-full max-sm:mb-[20vw]">
            <Copy>
              <h2 className="text-head-100 font-display">
                Creating Lasting Value, Together
              </h2>
            </Copy>
          </div>
          <div className="flex flex-col gap-[2vw] items-start w-[30%] justify-start max-sm:w-full max-sm:gap-[8vw]">
            <div className="h-[4vw] w-[10vw] fadeupanim max-sm:w-[50vw] max-sm:h-auto">
              <Image
                src={"/assets/icons/balance-logo.svg"}
                height={100}
                width={100}
                alt="balance-logo"
                className="h-full w-full"
              />
            </div>

            <Copy>
              <p className={`text-content-20`}>
                Comprehensive solution for building a Digital Wallet Ecosystem
                Serving Both Consumers, & Merchants supporting multiple
                currencies. Comes with option to offer a Virtual Debit, Credit &
                Pre-Paid Card instantly through Card Issuing Platform & SDK
                integration.
              </p>
            </Copy>
          </div>
        </div>
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:space-y-[12vw]">
          <div className="flex flex-col gap-[2vw] items-start w-[45%] justify-start max-sm:w-full max-sm:gap-[8vw]">
            <div className="h-[4vw] w-[10vw] fadeupanim max-sm:w-[50vw] max-sm:h-auto">
              <Image
                src={"/assets/icons/instacard-logo.svg"}
                height={100}
                width={100}
                alt="instacard-logo"
                className="h-full w-full"
              />
            </div>

            <Copy>
              <p className={`text-content-20`}>
                Comprehensive solution for building a Digital Wallet Ecosystem
                Serving Both Consumers, & Merchants supporting multiple
                currencies. Comes with option to offer a Virtual Debit, Credit &
                Pre-Paid Card instantly through Card Issuing Platform & SDK
                integration.
              </p>
            </Copy>
          </div>
          <div className="flex flex-col gap-[2vw] items-start w-[30%] justify-start max-sm:w-full max-sm:gap-[8vw]">
            <div className="h-[4vw] w-[10vw] fadeupanim max-sm:w-[35vw] max-sm:h-auto">
              <Image
                src={"/assets/icons/verifyed-logo.svg"}
                height={100}
                width={100}
                alt="verifyed-logo"
                className="h-full w-full"
              />
            </div>

            <Copy>
              <p className={`text-content-20`}>
                Comprehensive solution for building a Digital Wallet Ecosystem
                Serving Both Consumers, & Merchants supporting multiple
                currencies. Comes with option to offer a Virtual Debit, Credit &
                Pre-Paid Card instantly through Card Issuing Platform & SDK
                integration.
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
