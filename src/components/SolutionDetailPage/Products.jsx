import React from "react";
import Copy from "../Animations/Copy";
import Image from "next/image";

const Products = () => {
  return (
    <section
      data-theme="white"
      id="features"
      className="bg-white-1 text-black-1 w-screen overflow-hidden h-full max-sm:h-full"
    >
      <div className="px-[4.5vw] py-[8vw] w-full space-y-[8vw] max-sm:px-[5.5vw] max-sm:py-[15%] max-md:py-[15%] max-sm:space-y-[12vw]">
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-start max-md:items-start max-md:flex-col">
          <div className="w-[52%] max-md:w-[70%] text-left max-sm:w-full max-sm:mb-[20vw]">
            <Copy>
              <h2 className="text-head-100 font-display">
                Creating Lasting Value, Together
              </h2>
            </Copy>
          </div>
          <div className="flex flex-col gap-[2vw] pt-[4vw] items-start w-[30%] justify-start max-sm:w-full max-sm:pt-0 max-md:pt-[10vw] max-md:w-full max-sm:gap-[8vw] max-md:gap-[4vw]">
            <div className="h-[5vw] w-[15vw] max-md:w-[30vw] max-md:h-auto fadeupanim max-sm:w-[50vw] max-sm:h-auto">
              <Image
                src={"/assets/icons/balance-logo.svg"}
                height={100}
                width={100}
                alt="balance-logo"
                className="h-full w-full"
              />
            </div>

            <Copy>
              <p className={`text-content-20 max-sm:w-[100%] max-md:w-[85%]`}>
                Comprehensive solution for building a Digital Wallet Ecosystem
                Serving Both Consumers, & Merchants supporting multiple
                currencies. Comes with option to offer a Virtual Debit, Credit &
                Pre-Paid Card instantly through Card Issuing Platform & SDK
                integration.
              </p>
            </Copy>
          </div>
        </div>
        <div className="w-full flex items-center pt-[2vw] justify-between max-sm:flex-col max-sm:items-start max-md:flex-col max-md:items-start max-md:space-y-[8vw] max-sm:space-y-[12vw]">
          <div className="flex flex-col gap-[2vw] items-start w-[45%] justify-start max-sm:w-full max-md:w-full max-sm:gap-[8vw] max-md:gap-[4vw]">
            <div className="h-[5vw] w-[15vw] max-md:w-[30vw] max-md:h-auto fadeupanim max-sm:w-[50vw] max-sm:h-auto">
              <Image
                src={"/assets/icons/instacard-logo.svg"}
                height={100}
                width={100}
                alt="instacard-logo"
                className="h-full w-full"
              />
            </div>

            <Copy>
              <p className={`text-content-20 max-sm:w-[100%] max-md:w-[85%]`}>
                Comprehensive solution for building a Digital Wallet Ecosystem
                Serving Both Consumers, & Merchants supporting multiple
                currencies. Comes with option to offer a Virtual Debit, Credit &
                Pre-Paid Card instantly through Card Issuing Platform & SDK
                integration.
              </p>
            </Copy>
          </div>
          <div className="flex flex-col gap-[2vw] items-start w-[30%] justify-start max-sm:w-full max-md:w-full max-md:gap-[4vw] max-sm:gap-[8vw]">
            <div className="h-[5vw] w-[12vw] max-md:w-[25vw] max-md:h-auto fadeupanim max-sm:w-[35vw] max-sm:h-auto">
              <Image
                src={"/assets/icons/verifyed-logo.svg"}
                height={100}
                width={100}
                alt="verifyed-logo"
                className="h-full w-full"
              />
            </div>

            <Copy>
              <p className={`text-content-20 max-sm:w-[100%] max-md:w-[85%]`}>
                Comprehensive solution for building a Digital Wallet Ecosystem
                Serving Both Consumers, & Merchants supporting multiple
                currencies. Comes with option to offer a Virtual Debit, Credit &
                Pre-Paid Card instantly through Card Issuing Platform & SDK
                integration.
              </p>
            </Copy>
          </div>
        </div>
        <div className="w-full flex items-center pt-[2vw] justify-between max-sm:flex-col max-sm:items-start max-md:flex-col max-md:items-start max-md:space-y-[8vw] max-sm:space-y-[12vw]">
          <div className="flex flex-col gap-[2vw] items-start w-[45%] justify-start max-sm:w-full max-md:w-full max-sm:gap-[8vw] max-md:gap-[4vw]">
            <div className="h-[5vw] w-[15vw] max-md:w-[30vw] max-md:h-auto fadeupanim max-sm:w-[50vw] max-sm:h-auto">
              <Image
                src={"/assets/icons/instacard-logo.svg"}
                height={100}
                width={100}
                alt="instacard-logo"
                className="h-full w-full"
              />
            </div>

            <Copy>
              <p className={`text-content-20 max-sm:w-[100%] max-md:w-[85%]`}>
                Comprehensive solution for building a Digital Wallet Ecosystem
                Serving Both Consumers, & Merchants supporting multiple
                currencies. Comes with option to offer a Virtual Debit, Credit &
                Pre-Paid Card instantly through Card Issuing Platform & SDK
                integration.
              </p>
            </Copy>
          </div>
          <div className="flex flex-col gap-[2vw] items-start w-[30%] justify-start max-sm:w-full max-md:w-full max-md:gap-[4vw] max-sm:gap-[8vw]">
            <div className="h-[5vw] w-[12vw] max-md:w-[25vw] max-md:h-auto fadeupanim max-sm:w-[35vw] max-sm:h-auto">
              <Image
                src={"/assets/icons/verifyed-logo.svg"}
                height={100}
                width={100}
                alt="verifyed-logo"
                className="h-full w-full"
              />
            </div>

            <Copy>
              <p className={`text-content-20 max-sm:w-[100%] max-md:w-[85%]`}>
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


const productsData = [
  [
    {
      logo: "/assets/icons/balance-logo.svg",
      alt: "balance-logo",
      width: "w-[15vw]",
    },
    {
      logo: "/assets/icons/instacard-logo.svg",
      alt: "instacard-logo",
      width: "w-[15vw]",
    },
  ],
  [
    {
      logo: "/assets/icons/verifyed-logo.svg",
      alt: "verifyed-logo",
      width: "w-[12vw]",
    },
    {
      logo: "/assets/icons/instacard-logo.svg",
      alt: "instacard-logo",
      width: "w-[15vw]",
    },
  ],
  [
    {
      logo: "/assets/icons/verifyed-logo.svg",
      alt: "verifyed-logo",
      width: "w-[12vw]",
    },
    {
      logo: "/assets/icons/verifyed-logo.svg",
      alt: "verifyed-logo",
      width: "w-[12vw]",
    },
  ],
];

