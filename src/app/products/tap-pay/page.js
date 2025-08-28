import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Values from "@/components/ProductDetailPage/Values";
import Diagram from "@/components/ProductDetailPage/TapPay/Diagram";
import Process from "@/components/ProductDetailPage/TapPay/Process";
import Wallet from "@/components/ProductDetailPage/TapPay/Wallet";
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";

export const metadata = getPageMetadata({
  title: "MonieLink Tap Pay: Contactless POS Neobank ",
  description: "Accept contactless cards with MonieLink Tap Pay. Soft-POS on Android, digital onboarding & settlements via Super SDK for fintechs & banks scalability.",
  url: "products/tap-pay",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/products/tap-pay",
    languages: {
      "x-default": "/products/tap-pay",
    },
  },
  openGraph: {
    url: "products/tap-pay",
    images: [
      {
        url: `${homepage}/assets/images/seo/tap-pay.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

export default function TapPay() {

  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
     <FAQJSONLD faqs={faqData}/>
        <BreadcrumbsJSONLD pathname={metadata.url}/>
      <Layout>
        <Hero heading={"Accept Card Payments Anywhere"} para={"Empower every merchant, from street vendors to retail stores to accept card payments using our POS terminals and Soft-POS solutions. Easy setup, and full integration with settlement accounts for real-time visibility and control."} breadcrumb={true}/>
        <Intro content={introData}/>
       <Wallet/>
       <Diagram/>
       <Process/>
        <Values data={valuesData}/>
        <Products productsData={productsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};
const introData ={
    logo:"/assets/icons/tap-pay-logo.svg",
    heading:"Contactless Payments. Fully PCI- Compliant.",
    list:[
      "Seamless Merchant Onboarding ",
      "Access to an Integrated & dedicated Settlement Account ",
      "Contactless Card Payments using Soft POS  (Only on NFC enabled Android Phones)",
      "Smooth POS Terminal Issuance "
    ]
  }

  const valuesData = {
    heading:"Creating Lasting Value, Together",
    list:[
        "<p>Nigeria is expected to process over <b> 80 billion </b> Card Payment transactions per year by 2030</p>",
        "<p>Nigeria is expected to have over <b> 3 MN merchants </b> accepting payments digitally by 2030</p>",
        "<p>Monielink is enabling every merchant that it would onboard digitally to have access to Soft-POS acceptance for Card Payments</p>"
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
      // {
      //   logo: "/assets/icons/logo/tap-pay-white.svg",
      //   features: [
      //     "Digital Merchant Onboarding",
      //     "Soft-POS",
      //     "POS Terminals ",
      //     "Payment Collection Account ",
      //     "Instant Settlement"
      //   ],
      //   link:"/products/tap-pay"
    
      // },
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
      question: "How do merchants get started with TapPay?",
      answer:
        "They can self-onboard in minutes via your app and start collecting contactless payments using Soft- POS (NFC Android phones). Merchants can also request physical POS devices, subject to scoring via rules you define.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "TapPay supports tap (contactless), chip (EMV dip), swipe. All methods are PCI-DSS compliant and integrated into a single merchant account for streamlined reconciliation.",
    },
    {
      question: "Can we manage POS terminals and merchants remotely?",
      answer:
        "Yes. Our device management portal provides real-time inventory tracking, merchant scoring, activation/deactivation tools, remote firmware updates, and analytics dashboards.",
    },
    {
      question: " How does TapPay enhance acquiring economics?",
      answer:
        "By digitizing onboarding and using Soft-POS, you cut hardware costs, accelerate merchant activation, and grow transaction volumes through improved accessibility for informal or mobile vendors.",
    },
    {
      question: "What kind of businesses can use TapPay?",
      answer:
        "From roadside merchants to supermarket chains, TapPay scales across verticals. It supports offline and online merchants, large aggregators, and tiered settlement structures.",
    },
    
  ]