"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";

// import { LinkButton } from "../Buttons";

const products = [
  {
    id: 1,
    title: "Balance",
    width:"w-[60%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
      "Merchants receive instant notifications for every payment received via ScanPay.",
      "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app.",
    ],
    img: "/assets/images/products/product-balance.svg",
    href: "/products/balance",
  },
  {
    id: 2,
    title: "ScanPay",
    width:"w-[60%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
      "Merchants receive instant notifications for every payment received via ScanPay.",
      "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app.",
    ],
    img: "/assets/images/products/product-scanpay.svg",
    href: "/products/scanpay",
  },
  {
    id: 3,
    title: "TapPay",
    width:"w-[60%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
      "Merchants receive instant notifications for every payment received via ScanPay.",
      "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app.",
    ],
    img: "/assets/images/products/product-tappay.svg",
    href: "/products/tap-pay",
  },
  {
    id: 4,
    title: "Instacard",
    width:"w-[60%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
      "Merchants receive instant notifications for every payment received via ScanPay.",
      "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app.",
    ],
    img: "/assets/images/products/product-instacard.svg",
    href: "/products/instacard",
  },
  {
    id: 5,
    title: "Verifyed",
    width:"w-[45%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
      "Merchants receive instant notifications for every payment received via ScanPay.",
      "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app.",
    ],
    img: "/assets/images/products/product-verifyed.svg",
    href: "/products/verifyed",
  },
  {
    id: 6,
    title: "SnapCred",
    width:"w-[60%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
      "Merchants receive instant notifications for every payment received via ScanPay.",
      "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app.",
    ],
    img: "/assets/images/products/product-snapcred.svg",
    href: "/products/snapcred",
  },
  {
    id: 7,
    title: "Reward",
    width:"w-[50%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
      "Merchants receive instant notifications for every payment received via ScanPay.",
      "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app.",
    ],
    img: "/assets/images/products/product-reward.svg",
    href: "/products/reward",
  },
  {
    id: 8,
    title: "ChatBox",
    width:"w-[50%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
      "Merchants receive instant notifications for every payment received via ScanPay.",
      "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app.",
    ],
    img: "/assets/images/products/product-chatbox.svg",
    href: "/products/chatbox",
  },
  {
    id: 8,
    title: "DUO",
    width:"w-[45%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments into their own settlement accounts. Each merchant receives an open-loop, interoperable QR code that works with any bank — enabling seamless, universal payment acceptance.",
      "Merchants receive instant notifications for every payment received via ScanPay.",
      "Merchants can instantly view received payments on the dashboard and account statement—seamlessly accessible via our SDK within the partner's mobile app.",
    ],
    img: "/assets/icons/duo-logo.svg",
    href: "/products/duo",
  },
];

export default function MobileProducts({ allowMultiple = false }) {
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
      className="px-[7vw] max-sm:py-[15%] w-full h-full max-sm:max-h-[215vh] relative max-md:py-[7%] bg-white hidden max-md:block "
    >
      <div className="w-full space-y-[2vw]">
        {products.map((f, i) => (
          <Accordion
            key={i}
            title={f.title}
            description={f.description}
            img={f.img}
            href={f.href}
            width={f.width}
            isOpen={openIndexes.includes(i)}
            onToggle={() => toggleIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Accordion({ title, description, img, href, isOpen, onToggle, width }) {
  return (
    <div className={`w-full group overflow-hidden`}>
      <div className="w-full mr-auto  ">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full max-sm:pt-[7vw] max-sm:pb-[12vw] flex items-start justify-between max-md:pt-[3vw] max-md:pb-[5vw]"
        >
          <div className={` w-[44%] max-sm:${width}  max-md:w-[35%] flex gap-[5vw] `}>
            <Image
              src={img}
              alt="products-icons"
              width={600}
              height={900}
              className="w-full h-full object-contain"
            />
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
              className="overflow-hidden text-black-1"
            >
              <div className="w-full flex flex-col max-sm:gap-[2vw] max-sm:pb-[4vw] max-md:items-start max-md:pb-[5vw] max-md:gap-[3vw]">
                <div className="py-4 space-y-[4vw] text-content-20 leading-[1.5]">
                  {description.map((des, id) => (
                    <p key={id}>{des}</p>
                  ))}
                </div>
                <PrimaryButton text={"Know More"} href={href}/>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-[1px] bg-black/20" />
      </div>
    </div>
  );
}
