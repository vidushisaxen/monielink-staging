import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Values from "@/components/ProductDetailPage/Values";
import Wallet from "@/components/ProductDetailPage/Duo/Wallet";
import CustomerBenefits from "@/components/ProductDetailPage/Duo/CustomerBenefits";
import IssuerBenefits from "@/components/ProductDetailPage/Duo/IssuerBenefits";
import { WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/lib/seo.config";

export const metadata = getPageMetadata({
  title: "MonieLink Duo: Dual Credit Debit Cards DTS",
  description: "Transform debit to credit with MonieLink Duo DTS. Patented service, virtual cards & limits via Super SDK for neobank fintech revenue acceleration. ",
  url: "products/duo",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/products/duo",
    languages: {
      "x-default": "/products/duo",
    },
  },
  openGraph: {
    url: "products/duo",
    images: [
      {
        url: `${homepage}/assets/images/seo/duo.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

export default function Duo() {

  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero heading={"DTS for Virtual Credit via Debit Cards"} para={"DUO leverages our patented Dual Transaction Service (DTS) to transform existing debit cards into virtual credit cards. Pre-approved customers can seamlessly access their credit limits using their current debit cards"} breadcrumb={true}/>
        <Intro content={introData}/>
       <Wallet/>
       <CustomerBenefits/>
       <IssuerBenefits/>
        <Values data={valuesData}/>
        <Products productsData={productsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};
const introData ={
  logo:"/assets/icons/duo-logo.svg",
  width:"w-[95%]",
  heading:"Dual Access. Instantly Credit-Enabled.",
  list:[
    "DUO enables you offer pre-approved customers access to credit on their debit card via a virtual Card , all powered by Monielink’s Super SDK – No extra plastic required",
    "Customers can choose “Credit” as account type option at an ATM or POS in Nigeria to access Credit Amount routed through an issuer ",
    "Customers can access Virtual Credit Card on Partner’s Mobile App integrated with our SDK to make online payments, secured by Dynamic CVV.",
    "Regardless of whether the debit card is Visa Mastercard or Verve , DUO can process transactions requested with 'Credit' account type, by the customers from their existing Debit Cards against the available credit limit balance on the DUO virtual Credit Cards."
  ]
}

const valuesData = {
  heading:"Creating Lasting Value, Together",
  list:[
      "<p>By 2030, Nigeria is projected to issue <b> 10 million </b> credit cards</p>",
      "<p>Credit Card businesses would generate over <b> ₦ 160 BN </b> revenue by 2030</p>",
  ]
}
const productsData={
  heading:"Explore Other Products",
  cards: [
    {
      logo: "/assets/icons/logo/balance-white.svg",
      features: [
        "Digital Accounts",
        "Pre-paid Card Accounts",
        "Credit Card Accounts",
        "Loan Accounts",
        "Reward Accounts",
        "Redemption Accounts ",
      ],
      link:"/products/balance"
    },
    {
      logo: "/assets/icons/logo/scanpay-white.svg",
      features: [
        "Digital Merchant Onboarding",
        "Interoperable QR",
        "Static QR Codes",
        "Dynamic QR Codes ",
        "Payment Collection Account ",
        "Instant Settlement",
      ],
      link:"/products/scanpay"
  
    },
    {
      logo: "/assets/icons/logo/tap-pay-white.svg",
      features: [
        "Digital Merchant Onboarding",
        "Soft-POS",
        "POS Terminals ",
        "Payment Collection Account ",
        "Instant Settlement"
      ],
      link:"/products/tap-pay"
  
    },
    {
      logo: "/assets/icons/logo/instacard-white.svg",
      features: [
        "Issue Virtual Cards",
        "Digital Card Wallet",
        "Dynamic CVV",
        "Contactless Payments",
        "Universal Card",
        
      ],
      link:"/products/instacard"
  
    },
    {
      logo: "/assets/icons/logo/snapcred-white.svg",
      features: [
        "Credit Origination ",
        "Credit Disbursement",
        "Credit lifecycle Management ",
        "Repayments",
        "Due & Delinquent Amount Collections",
        "GSI Collection automation",
      ],
      link:"/products/snapcred"
  
    },
    // {
    //   logo: "/assets/icons/logo/duo-white.svg",
    //   features: [
    //     "Dual Transaction Service ",
    //     "Virtual Credit Cards",
    //     "Credit Card Portfolio Management ",
    //     "Collections & Repayments ",
    //   ],
    //   link:"/products/duo"
  
    // },
    {
      logo: "/assets/icons/verifyed-logo.svg",
      features: [
        "KYC Management",
        "Liveness Detection ",
        "Facial Recognition ",
        "Business Verification ",
        "Address Verification",
        "Soft – Token issuance for 2FA"
      ],
      link:"/products/verifyed"
  
    },
    {
      logo: "/assets/icons/logo/chatbox-white.svg",
      features: [
        "Interactive FAQs ",
        "Help Topics ",
        "Help Videos ",
      ],
      link:"/products/chatbox"
    },
    {
      logo: "/assets/icons/logo/reward-white.svg",
      features: [
        "Tailored  Reward Program ",
        "Reward Point Account ",
        "Reward Redemption Accounts ",
        "Usage of Redeemed value",
      ],
      link:"/products/reward"
  
    }
  ]
}
const faqData = [
  {
    question: "What is DUO and how does it work?",
    answer:
      "DUO is a patented card innovation that enables customers to access pre-approved credit limits using their existing debit cards. It connects a virtual credit card to the debit card and processes transactions using the virtual limit when the customer selects 'Credit' at POS or ATM.",
  },
  {
    question: "How do Banks and Fintechs integrate DUO?",
    answer:
      "DUO is delivered via Monielink’s plug-and-play SDK. Partners can embed it into their mobile apps, offering activation, credit card linking, and transaction tracking with minimal development effort.",
  },
  {
    question: "What happens when a debit card is renewed or replaced?",
    answer:
      "Using PAN Remapping via our SDK, renewed debit cards can be re-linked to the original DUO virtual credit card, preserving credit access and transaction continuity.",
  },
  {
    question: " Is DUO compatible with all card schemes?",
    answer:
      "Yes. DUO supports debit cards from Visa, Mastercard, and Verve, and functions wherever 'Credit’ account type selection is enabled on on POS terminals or ATMs.",
  },
  {
    question: "How does DUO enhance security?",
    answer:
      "DUO offers real-time credit control with no exposure of full PAN details. It supports tokenization, dynamic limit setting, and integrates with 2FA, helping issuers reduce fraud risk.",
  },
  {
    question: "Can users track their credit card activity via DUO?",
    answer:
      "Yes. Customers can view credit balances, transaction history, and manage their virtual credit cards directly within the partner’s mobile app using our SDK.",
  }
]
