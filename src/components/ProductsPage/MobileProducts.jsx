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
      "Monielink powers you to build a full-featured digital wallet ecosystem for both consumers and merchants, with support for multiple currencies. Instantly issue virtual Debit, Credit, or Prepaid cards through our integrated card issuing platform and SDK.",
      "You can also assign NUBAN account numbers linked to verified mobile numbers, allowing customers to receive inflow transfers using just their phone number."
  ],
    img: "/assets/images/products/product-balance.svg",
    href: "/products/balance",
  },
  {
    id: 2,
    title: "ScanPay",
    width:"w-[60%]",
    description: [
      "Merchants can instantly self-onboard to start accepting digital and card payments directly into their settlement accounts. Each merchant is issued an interoperable QR code compatible with any bank, ensuring seamless and universal payment acceptance via ScanPay.",
      "They receive instant payment notifications and can view all transactions in real time through the dashboard and account statement — fully accessible via our SDK within your mobile app."
  ],
    img: "/assets/images/products/product-scanpay.svg",
    href: "/products/scanpay",
  },
  {
    id: 3,
    title: "TapPay",
    width:"w-[60%]",
    description: [
      "With TapPay, merchants can digitally self-onboard and start accepting contactless card payments using Soft-POS directly on their NFC-enabled Android phones all within your mobile app via Monielink’s SDK.",
      "Merchants can also request a physical POS terminal. Eligibility is automatically scored based on rules set by your institution, with approvals handled seamlessly through the SDK.",
      "Every TapPay transaction triggers instant notifications, with real-time visibility into payments via the dashboard and collection account statement — all accessible through your app."
  ],
    img: "/assets/images/products/product-tappay.svg",
    href: "/products/tap-pay",
  },
  {
    id: 4,
    title: "Instacard",
    width:"w-[60%]",
    description: [
      "Issue virtual debit, credit, prepaid, and universal cards instantly via your mobile app. Instacard supports online and offline use, with enhanced security through dynamic CVV and tokenized contactless payments.",
      "Customers can link virtual cards to a physical Universal Instacard for global ATM and POS use",
      "All card controls including limits, block & unblock card, and instant linking are managed seamlessly through your app via our SDK."
   ],
    img: "/assets/images/products/product-instacard.svg",
    href: "/products/instacard",
  },
  {
    id: 5,
    title: "Verifyed",
    width:"w-[45%]",
    description: [
      "Verifyed simplifies digital KYC with instant onboarding, facial recognition, passive liveness detection, and soft-token-based two-factor authentication — all via the Monielink SDK.",
      " It supports ID and address verification, location checks, and CAC-based business verification for secure, compliant onboarding."
   ],
    img: "/assets/images/products/product-verifyed.svg",
    href: "/products/verifyed",
  },
  {
    id: 6,
    title: "SnapCred",
    width:"w-[60%]",
    description: [
      "SnapCred is Monielink’s cloud-based credit infrastructure that enables lenders and issuers to originate, disburse, manage, and collect towards creating profitable credit programs.",
      "Using our SDK and web portal, you can configure underwriting and collection rules, launch credit products, and automate disbursements directly through your mobile app.",
      "Borrowers can view statements, make repayments from any linked bank account, and manage obligations with ease",
      "SnapCred supports real-time portfolio tracking, automated collections (including from non-host banks via GSI), and full lifecycle management — from origination to recovery."
  ],
    img: "/assets/images/products/product-snapcred.svg",
    href: "/products/snapcred",
  },
  {
    id: 7,
    title: "Reward+",
    width:"w-[50%]",
    description: [
      "Boost adoption and engagement with Reward+ — a customizable loyalty program that credits usage-based points to a dedicated rewards account.",
      "Customers can view and track their points in real time through your mobile app via the Monielink SDK."
  ],
    img: "/assets/images/products/product-reward.svg",
    href: "/products/reward",
  },
  {
    id: 8,
    title: "ChatBox",
    width:"w-[50%]",
    description: [
      "Enhance user experience with interactive FAQs, product guides, and self-training videos — all accessible via the Monielink Super SDK. ",
      "Chatbox helps users explore features, get instant answers, and learn how to use services with ease, making it an essential support tool for banks and issuers."
  ],
    img: "/assets/images/products/product-chatbox.svg",
    href: "/products/chatbox",
  },
  {
    id: 8,
    title: "DUO",
    width:"w-[45%]",
    description: [
      "DUO transforms existing debit cards into powerful virtual credit cards using our patented Dual Transaction Service (DTS). ",
      "With DTS, pre-approved customers can access their virtual credit limit through their existing Visa, Mastercard, or Verve debit cards — without needing a new physical credit card.",
      "Once activated via your mobile app (using our SDK), users simply select 'Credit' when prompted at any POS or ATM. The transaction is seamlessly processed against the balance Credit Limit  offered on DUO virtual credit card."
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
