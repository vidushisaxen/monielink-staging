"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
// import { LinkButton } from "../Buttons";

const features = [
  {
    id: 1,
    title: "Digital Account",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/digital-account",
  },
  {
    id: 2,
    title: "Loyalty",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/loyalty",
  },
  {
    id: 3,
    title: "Merchant Acquiring",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/merchant-acquiring",
  },
  {
    id: 4,
    title: "Digital Lending",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/digital-lending",
  },
  {
    id: 5,
    title: "Card Issuing",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/card-issuing",
  },
  {
    id: 6,
    title: "KYC",
    description:
      "Comprehensive solution for building a Digital Wallet Ecosystem Serving Both Consumers, & Merchants supporting multiple currencies. Comes with option to offer a Virtual Debit, Credit & Pre-Paid Card instantly through Card Issuing Platform & SDK integration. Customers can be offered a NUBAN Account Number Linked to a Verified Mobile Number such that customer can use this Mobile Number for receiving Inflow Transfers.",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/kyc",
  },
];

export default function MobileSolutions({ allowMultiple = false }) {
  // keep track of which indexes are open
  const [openIndexes, setOpenIndexes] = useState([0]);
  const sectionRef = useRef(null);

  function toggleIndex(i) {
    if (allowMultiple) {
      // multiple: toggle in/out of the array
      setOpenIndexes((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      );
    } else {
      // single: either clear or only keep this one
      setOpenIndexes((prev) => (prev.includes(i) ? [] : [i]));
    }
  }

  return (
    <section
      ref={sectionRef}
      className="px-[7vw] max-sm:py-[15%] w-screen max-sm:overflow-x-hidden h-fit relative max-md:py-[7%] hidden max-md:block "
    >
      <div className="w-full space-y-[2vw]">
        {features.map((f, i) => (
          <Accordion
            key={i}
            title={f.title}
            description={f.description}
            img={f.img}
            href={f.href}
            isOpen={openIndexes.includes(i)}
            onToggle={() => toggleIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Accordion({ title, description, img, href, isOpen, onToggle }) {
  return (
    <div className={`w-full group overflow-hidden`}>
      <div className="w-full mr-auto  ">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full max-sm:pt-[7vw] max-sm:pb-[12vw] flex items-start justify-between max-md:pt-[3vw] max-md:pb-[5vw]"
        >
          <div className="w-full flex gap-[5vw]">
            <div className="w-[2vw] h-[10vw] max-sm:h-[8vw] max-md:h-[6vw] bg-primary-2 mt-[1vw]"/>
            <h3 className="max-sm:text-head-60 font-display capitalize max-md:text-[5.5vw] text-left text-gray-1">
              {title}
            </h3>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden text-gray-2"
            >
              <div className="w-full flex flex-col max-sm:gap-[2vw] max-sm:pb-[5vw] max-md:items-center max-md:pb-[5vw] max-md:gap-[3vw]">
                <div className="max-sm:w-[80%] max-sm:h-[70vw] max-md:w-[45%] max-md:h-[50vw] max-md:ml-[-10vw] max-sm:ml-0">
                  <Image
                    src={img}
                    alt=""
                    width={600}
                    height={900}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div
                  className="py-4 space-y-[4vw] text-content-20 leading-[1.5]"
                  dangerouslySetInnerHTML={{ __html: description }}
                />

                <div className="w-full">
                  {/* <LinkButton text={"Learn More"} href={contentLink} /> */}
                  <PrimaryButton text={"Learn More"} href={href}/>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-[1px] bg-white/20" />
      </div>
    </div>
  );
}
