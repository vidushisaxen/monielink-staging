import Overview from "../components/Home/Overview";
import Solutions from "../components/Home/Solutions";
import USPs from "../components/Home/USPs";
import Products from "../components/Home/Products";
import Intro from "../components/Home/Intro";
import FAQs from "../components/Home/FAQs";
import Blogs from "../components/Home/Blogs";
import Clients from "../components/Home/Clients";
import CTA from "../components/Footer/CTA";
import Layout from "../components/Layout";
import HomePageHero from "@/components/Hero/HomePageHero";
import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";

export const metadata = {
    title: "MonieLink: Secure Neobank Platform for Fintechs.",
    description: "Empower fintechs & banks with MonieLink neobank Super SDK for digital banking, payments, card issuing & lending. Drive 6X revenue growth via scalable solutions.",
    url: "",
    date_published: "2025-08-12T00:00",
    date_modified: "2025-08-12T00:00",
  }
export default function HomePage() {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
    <FAQJSONLD faqs={faqData}/>
      <Layout>
        <HomePageHero
          heading={" A Powerful Neobank Platform"}
          para={
            "Enabling Banks & FinTechs offer digital banking services within their Mobile Apps using single Monielink Super SDK. Increase adoption of your Mobile App delivering superior experience across all categories of retail products & services."
          }
        />
        <Overview />
        <Solutions />
        <USPs />
        <Products productsData={productsData}/>
        <Intro />
        <div className="clients-transition">
        <Clients />
        {/* <Blogs /> */}
        </div>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
const faqData = [
  {
    question: "What is Monielink Super SDK offering?",
    answer:
      "Monielink is a unified Super SDK that enables banks and FinTechs to embed digital banking, card issuance, digital payments, and lending services directly into their mobile apps, all from a single integration",
  },
  {
    question: "Who can use Monielink’s services?",
    answer:
      "Monielink is built for licensed Banks, FinTechs, Microfinance institutions & payment service providers looking to deliver or scale digital banking services.",
  },
  {
    question: "What services can I offer with Monielink?",
    answer:
      "With Monielink, you can offer a wide range of services including - digital accounts onboarding & KYC management, Merchant acquiring (QR, Soft-POS & POS terminals for acceptance & settlement of payments), Card issuance (Debit, Credit & Prepaid forms through Virtual & Physical cards), Digital payments (QR scan, contactless from Mobile App, online & card present transactions), digital lending (loans & credit cards), Soft Tokens for 2FA, Loyalty management, Chat-bot - all through a single SDK integrated with your mobile app.",
  },
  {
    question: "How long does it take to go live with Monielink?",
    answer:
      "Go-to-market timelines vary, but with our plug-and-play SDK and dedicated support, most partners launch within 6 weeks, not months",
  },
  {
    question: "Can we customize the features and branding?",
    answer:
      "Absolutely. Monielink supports branded card issuance, UI customization, and configurable workflows to match your customer and compliance needs.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Our partnership goes beyond Tech. It’s about Growing Revenue For Our Partners. Monielink offers end-to-end, plug & play solution to our partners, for them to build a profitable business with full onboarding, integration support, compliance guidance, and ongoing technical maintenance.",
  },
];

const productsData = {
  heading: "Everything You Need to Power Digital Banking",
  cards: [
    {
      logo: "/assets/icons/logo/balance-white.svg",
      features: [
        "Digital Accounts",
        "Credit Card Accounts",
        "Pre-paid Card Accounts",
        "Loan Accounts",
        "Reward Accounts",
        "Redemption Accounts ",
      ],
      link: "/products/balance"
    },
    {
      logo: "/assets/icons/logo/scanpay-white.svg",
      features: [
        "Interoperable QR",
        "Static QR Codes",
        "Dynamic QR Codes ",
        "Digital Business Accounts for settlements",
      ],
      link: "/products/scanpay"
    },
    {
      logo: "/assets/icons/logo/tap-pay-white.svg",
      features: [
        "Tap & Pay for Contactless Payments",
        "POS Terminals ",
        "Digital Business Accounts for settlements",
      ],
      link: "/products/tap-pay"
    },
    {
      logo: "/assets/icons/logo/instacard-white.svg",
      features: [
        "Virtual & Physical card issuance",
        "Debit, Credit & Pre-paid Cards",
        "Universal Physical Card",
        "Dynamic CVV for online payments",
        "Contactless payments using Virtual Cards",
      ],
      link: "/products/instacard"
    },
    {
      logo: "/assets/icons/logo/snapcred-white.svg",
      features: [
        "Digital Lending",
        "Loan Origination ",
        "Loan Portfolio Management",
        "Credit Card Origination",
        "Credit Card Portfolio Management ",
        "Collections & Repayments ",
      ],
      link: "/products/snapcred"
    },
    {
      logo: "/assets/icons/logo/duo-white.svg",
      features: [
        "Dual Transaction Service ",
        "Virtual Credit Cards",
        "Credit Card Portfolio Management ",
        "Collections & Repayments ",
        "Dynamic Limit Management",
      ],
      link: "/products/duo"
    },
    {
      logo: "/assets/icons/verifyed-logo.svg",
      features: [
        "KYC Management",
        "Liveness Detection ",
        "Facial Recognition ",
        "BVN, NIN & ID verifications",
        "Business Verification ",
        "Address Verification",
        "Soft – Token issuance for 2FA"
      ],
      link: "/products/verifyed"
    },
    {
      logo: "/assets/icons/logo/reward-white.svg",
      features: [
        "Customized Reward program Reward Accounts",
        " Redemption Accounts ",
        "Usage of Redeemed value",
      ],
      link: "/products/reward"
    },
    {
      logo: "/assets/icons/logo/chatbox-white.svg",
      features: [
        "Interactive FAQ based Help Topics ",
        "Help Videos for Self training ",
        "Help & Support on all products & services offered on Monielink SDK ",
      ],
      link: "/products/chatbox"
    },
  ]
};

