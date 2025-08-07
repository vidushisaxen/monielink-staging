import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Values from "@/components/ProductDetailPage/Values";
import StaticQR from "@/components/ProductDetailPage/ScanPay/StaticQR";
import DynamicQR from "@/components/ProductDetailPage/ScanPay/DynamicQR";
import Wallet from "@/components/ProductDetailPage/ScanPay/Wallet";


export default function ScanPay() {

  return (
    <>
      <Layout>
        <Hero heading={"Modern Merchant Acquiring, Built for you"} para={"Give your merchants the tools to accept payments instantly with ScanPay. From seamless self-onboarding to real-time settlements and dashboard visibility.  Monielink makes it easy to scale collections, improve cash flow, and deliver a frictionless payment experience."} breadcrumb={true}/>
        <Intro content={introData}/>
        <Wallet/>
       <StaticQR/>
        <DynamicQR/>
        <Values data={valuesData}/>
        <Products productsData={productsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};
const introData ={
    logo:"/assets/icons/scanpay-logo.svg",
    width:"w-[80%]",
    heading:"Seamless Onboarding. Instantly Scalable.",
    list:[
      "Digital  & Instants merchant onboarding, supported with Digital KYC management & dedicated payment collection Account",
      "Digital Payments via interoperable QR codes",
      "Instant Payment Acceptance Notifications ",
      "Smart Dashboard to track payments and collected accounts statements  with our  SDK integration"
    ]
  }

  const valuesData = {
    heading:"Creating Lasting Value, Together",
    list:[
        "<p>Over 60% of Payments transactions in India & China are QR Scan based.</p>",
        "<p>Nigeria is likely to process over 125 Billion Digital Payment Transactions per year by 2030. </p>",
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
      // {
      //   logo: "/assets/icons/logo/scanpay-white.svg",
      //   features: [
      //     "Digital Merchant Onboarding",
      //     "Interoperable QR",
      //     "Static QR Codes",
      //     "Dynamic QR Codes ",
      //     "Payment Collection Account ",
      //     "Instant Settlement",
      //   ],
      //   link:"/products/scanpay"
    
      // },
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
      question: "How does ScanPay work for merchants?",
      answer:
        "ScanPay enables merchants to accept payments instantly via QR codes—either static (printed) or dynamic (generated per transaction). Once onboarded, each merchant receives an interoperable QR linked to their dedicated settlement account created by Monielink upon their self-assited and seamless onboarding.",
    },
    {
      question: "Is ScanPay interoperable across banks and apps?",
      answer:
        "Yes. ScanPay is based on open-loop QR standards and works with all Nigerian banks and wallets that support QR transfers. This ensures wide compatibility and acceptance.",
    },
    {
      question: "How are merchants notified of payments?",
      answer:
        "Every successful transaction triggers an instant payment notification via the partner’s app (powered by our SDK). Transaction history and account statements are also available for viewing in real-time.",
    },
    {
      question: "Can we brand the QR code and payment experience?",
      answer:
        "Yes. Partners can fully customize the merchant-facing interface, payment success screens, and even QR code designs to reflect their branding.",
    },
    {
      question: "What’s the advantage of ScanPay over POS devices?",
      answer:
        "ScanPay reduces hardware costs, enables faster onboarding, and expands reach to micro and mobile merchants who may not qualify or afford traditional POS devices.",
    },
    {
      question: "What is the difference between Static & Dynamic QR Code?",
      answer:
        "Static QR codes are fixed and reusable, while dynamic QR codes are unique to each transaction and include metadata like amount, merchant ID, or product info. Dynamic QR enhances traceability and automates reconciliation.",
    },{
      question: "What are the benefits of a Dynamic QR Code?",
      answer:
        "Dynamic QR codes enable a faster and more accurate checkout experience per transaction",
    },
    {
      question: " What are the benefits of a Static QR Code?",
      answer:
        "Static QR codes are easy to deploy, low-cost, and ideal for micro-merchants. They don't require internet or apps to generate and can be printed or displayed as signage.",
    },
    
  ]