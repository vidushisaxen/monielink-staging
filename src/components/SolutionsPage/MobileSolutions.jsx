"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import { CardIssuing, DigitalBanking, DigitalLending, DualTransaction, KYC, Loyalty, MerchantAcquiring } from "../Icons";
// import { LinkButton } from "../Buttons";

const features = [
  {
    id: 1,
    title: "Digital Account",
    description:
      "<p>Monielink powers you to build a full-featured digital wallet ecosystem for both consumers and merchants, with support for multiple currencies. Instantly issue virtual Debit, Credit, or Prepaid cards through our integrated card issuing platform and SDK.</p><p>You can also assign NUBAN account numbers linked to verified mobile numbers, allowing customers to receive inflow transfers using just their phone number.</p>",
    img: "/assets/images/solutions/slide-2.svg",
    href: "/solutions/digital-accounts",
    svgRight: <DigitalBanking />,
  },
  {
    id: 2,
    title: "Merchant Acquiring ",
    description:
      "<p>Monielink enables instant, digital onboarding for merchants directly through your mobile app. Using SoftPOS on NFC-enabled Android phones, merchants can start accepting contactless card payments without additional hardware.</p><p>Our platform also supports ScanPay with static and dynamic QR codes, and traditional POS terminals for card dipping, tapping, or swiping</p>",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/merchant-acquiring",
    svgRight: <MerchantAcquiring/>,
  },
  {
    id: 3,
    title: "Card Issuing",
    description:
      "<p>Monielink enables instant issuance of virtual Debit, Credit, Prepaid, and Universal cards directly within your mobile app through our Super SDK. Each card is securely stored in a digital card wallet for seamless online and offline use. Card control settings on the SDK allows customers to set-up transaction.</p><p>With our Universal Instacard, users can access multiple virtual cards through a single physical card. delivering flexibility, security, and a superior user experience.</p>",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/card-issuing",
    svgRight: <CardIssuing/>,
  },
  {
    id: 4,
    title: "Digital Lending",
    description:
      "<p>End-to-end loan and credit card management through SnapCred, a purpose-built solution that helps lenders and issuers create and scale high-performing credit portfolios.</p><p>With full-spectrum service delivery, SnapCred supports everything from origination and disbursement to repayment and collections, all on a secure, cloud-based infrastructure.</p>",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/digital-lending",
    svgRight: <DigitalLending/>,
  },
  {
    id: 5,
    title: "Dual Transaction Service",
    description:
     "<p>You can unlock new revenue by transforming debit cards into virtual credit cards.</p><p>With our patented Dual Transaction Service, you can offer instant credit card access through existing debit cards. No new plastic required. Drive engagement and grow income with ease.</p>",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/dual-transaction-service",
    svgRight: <DualTransaction />,
  },
  {
    id: 6,
    title: "KYC & Soft Token",
    description:
      "<p>Monielink Super SDK, enables instant customer onboarding with:</p> <ul class='list-disc space-y-[0.5vw] pl-[3vw]'><li>Face capture supported with liveness detection which confirms that the captured face belongs to a live individual preventing spoofing and impersonation.</li><li>Facial recognition technology to match live captures against BVN, NIN, or photo ID records in real time, ensuring high-confidence identity verification.</li><li>ID Verifications to verify NIN, Driver’s License, International Passport etc.</li><li>Digital Business Verification for a registered business</li><li>Address Verification for digitally verifying residence & business address</li><li>KYC Upgrades</li></ul><p>The solution also includes soft token- 2FA, adding an extra layer of security for account activation and ongoing transactions through a soft-token set-up on Verifyed App.</p>",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/kyc-and-soft-token",
    svgRight: <KYC/>,
  },
  {
    id: 7,
    title: "Loyalty Management ",
    description:
      "<p>Boost adoption and engagement by offering a customized loyalty program for all products & services offered on by Monielink. With Monielink’s SDK, you can reward customers with usage-based points credited to a dedicated rewards account, complete with real-time reward statements and transaction visibility.</p>",
    img: "/assets/images/solutions/slide-1.svg",
    href: "/solutions/loyalty-management",
    svgRight: <Loyalty/>,
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
      className="px-[7vw] max-sm:py-[15%] w-screen max-sm:overflow-x-hidden h-fit relative max-md:py-[15%] hidden max-md:block "
    >
      <div className="w-full space-y-[2vw]">
        {features.map((f, i) => (
          <Accordion
            key={i}
            title={f.title}
            description={f.description}
            img={f.img}
            href={f.href}
            svgRight={f.svgRight}
            isOpen={openIndexes.includes(i)}
            onToggle={() => toggleIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Accordion({ title, description, img, href, isOpen, onToggle, svgRight }) {
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
                <div className="h-[50vw] w-[60vw] mx-auto  max-md:h-[30vw]">
                  <svg
                  className="h-full w-full"
                    width="251"
                    height="252"
                    viewBox="0 0 251 252"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {svgRight}
                  </svg>
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
