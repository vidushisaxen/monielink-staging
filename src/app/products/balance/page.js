import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Values from "@/components/ProductDetailPage/Values";
import Infrastructure2 from "@/components/ProductDetailPage/Balance/Infrstructure2";
import MobileInfrastructure from "@/components/ProductDetailPage/Balance/MobileInfrastructure";
import Wallet from "@/components/ProductDetailPage/Balance/Wallet";

export default function Balance() {

  return (
    <>
      <Layout>
        <Hero heading={"Digital Banking with Balance"} para={"Deliver modern financial services from onboarding to transactions seamlessly within your mobile app using Monielink’s Super SDK."} breadcrumb={true}/>
        <Intro content={introData}/>
        <Wallet/>
        <Infrastructure2/>
        <MobileInfrastructure/>
        <Values data={valuesData}/>
        <Products productsData={productsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};
const introData ={
  logo:"/assets/icons/balance-logo.svg",
  heading:"One Platform. Multiple Retail Banking Services.",
  list:[
    "Digital Account Onboarding & Management process with integrated KYC and soft-token authentication.",
    "Instant Card Issuance for virtual debit, credit, and prepaid cards via SDK",
    "NUBAN Account Linking to verified mobile numbers for easy fund transfers",
    "Unified Payment Platform including QR payments, bank transfers, inflows, and merchant payment collections"
  ]
}

const valuesData = {
  heading:"Creating Lasting Value, Together",
  list:[
      "<p>Nigeria’s retail banking income per user is just $33 — far behind India ($350), China ($750), and the U.S. ($4,500). <b> By 2030, it’s projected to rise to $200. </b></p>",
      "<p>Over <b> 40 MN </b> Unbanked Nigerian Adults are likely to <b> start banking by 2030b</b>.</p>",
      "<p><b>Average cross selling ratio </b> of banks is likely to increase from 1.6 to <b> 3.4 by 2030 </b>.</p>"
  ]
}
const productsData={
  heading:"Explore Other Products",
  cards: [
    // {
    //   logo: "/assets/icons/logo/balance-white.svg",
    //   features: [
    //     "Digital Accounts",
    //     "Pre-paid Card Accounts",
    //     "Credit Card Accounts",
    //     "Loan Accounts",
    //     "Reward Accounts",
    //     "Redemption Accounts ",
    //   ],
    //   link:"/products/balance"
    // },
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
    {
      logo: "/assets/icons/logo/duo-white.svg",
      features: [
        "Dual Transaction Service ",
        "Virtual Credit Cards",
        "Credit Card Portfolio Management ",
        "Collections & Repayments ",
      ],
      link:"/products/duo"
  
    },
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
    question: "How does Balance support account creation and management?",
    answer:
      "Balance allows partners to issue digital wallets and NUBAN-linked accounts directly from their app. Each user gets a virtual account mapped to their mobile number, enabling inflows, transfers, payments, and airtime top-up. All accounts are KYC-compliant and linked to a configurable ledger, with support for both consumer and merchant use cases.",
  },
  {
    question: "Can Balance support multi-currency wallets?",
    answer:
      "Yes. Balance supports wallets in multiple currencies. This enables financial institutions to serve diverse customer bases, manage FX exposure, and allow users to hold, spend, or convert across different currencies—all via a unified wallet experience.",
  },
  {
    question: "Is Balance compliant with regulations?",
    answer:
      "Balance is built for full compliance with both Nigerian and international standards. It supports tiered KYC, integrates with regulatory bodies (e.g., NIBSS), and enables transaction-level AML/CFT screening. Tenant-specific deployments help meet data residency and privacy mandates.",
  },
  {
    question: "How secure is Balance?",
    answer:
      "Balance operates on isolated infrastructure per partner, ensuring no cross-tenant data exposure. It includes encryption at rest and in transit, permissioned access, configurable transaction limits, and audit trails. Authentication can be layered with soft-token 2FA.",
  },
  {
    question: "How does Balance integrate with core banking or switch providers?",
    answer:
      "Balance can interface with existing core banking systems, payment switches, or aggregators via standard APIs and webhooks. This allows seamless account funding, reconciliation, and real-time visibility.",
  },  
]