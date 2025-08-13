import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Values from "@/components/ProductDetailPage/Values";
import Diagram from "@/components/ProductDetailPage/ChatBox/Diagram";
import Wallet from "@/components/ProductDetailPage/ChatBox/Wallet";
import Videos from "@/components/ProductDetailPage/ChatBox/Videos";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";
import { WebpageJsonLd } from "@/lib/json-ld";

export const metadata = getPageMetadata({
  title: "MonieLink ChatBox: AI Customer Support Neobank",
  description: "Provide 24/7 support with MonieLink ChatBox. Interactive AI bot, FAQs & training via Super SDK for fintechs & banks enhanced user experience.",
  url: "products/chatbox",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/products/chatbox",
    languages: {
      "x-default": "/products/chatbox",
    },
  },
  openGraph: {
    url: "products/chatbox",
    images: [
      {
        url: `${homepage}/assets/images/seo/chatbox.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
export default function ChatBox() {

  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero heading={"Learn with FAQs & Videos"} para={"Help users explore and understand Monielink’s Super SDK products with engaging FAQs and video content. Empower them with the knowledge they need to use your digital services confidently and effectively."} breadcrumb={true}/>
        <Intro content={introData}/>
        <Wallet/>
       <Diagram/>
       <Videos/>
        <Values data={valuesData}/>
        <Products  productsData={productsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};
const introData ={
    logo:"/assets/icons/chatbox-logo.svg",
    heading:"Interactive Help. Smart Support.",
    list:[
      "Guide customers to choose relevant HELP TOPICS for Monielink super SDK products and services.",
      "Provide Interactive Support & Self training Videos ",
      "Automated 24/7 Customer Support ",
      "Save on Operational Costs on Physical training & Onboarding "
    ]
  }

  const valuesData = {
    heading:"Creating Lasting Value, Together",
    list:[
        "<p>Serving as a bot, the Chatbox instantly answers questions to improve customer knowledge of Monielink super SDK’s products and services, offering a more engaging and convenient experience</p>"
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
      question: "What makes Chatbox different from standard bots?",
      answer:
        "Chatbox is pre-set on your SDK modules and FAQs, offering contextual support, product walkthroughs, and customer education. It serves as both an assistant and an onboarding tool.",
    },
    {
      question: "Can Chatbox promote product features?",
      answer:
        "Yes. Chatbox intelligently nudges users toward underused SDK capabilities, promotes relevant offers, and provides demos to drive adoption.",
    },
    {
      question: "Is the experience multilingual and brandable?",
      answer:
        "Yes. Chatbox supports multiple languages and fully customizable UI, making it adaptable for local markets and brand tone.",
    },
    {
      question: "How do we update or manage Chatbox content?",
      answer:
        "Through a central content management portal. You can update FAQs, insert new training videos, and A/B test responses to improve helpfulness.",
    },
    {
      question: " Can Chatbox reduce operational support costs?",
      answer:
        "Yes. With contextual help, guided flows, and low-code implementation, Chatbox offloads significant ticket volume from support teams—improving NPS while reducing cost per resolution.",
    }
  ]