import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Values from "@/components/ProductDetailPage/Values";
import Rewards from "@/components/ProductDetailPage/Reward/Rewards";
import Redemptions from "@/components/ProductDetailPage/Reward/Redemptions";
import Usage from "@/components/ProductDetailPage/Reward/Usage";
import Wallet from "@/components/ProductDetailPage/Reward/Wallet";
import { WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/lib/seo.config";

export const metadata = getPageMetadata({
  title: "MonieLink Reward: Loyalty Programs Fintech SDK",
  description: "Boost retention with MonieLink Reward+. Custom points, redemptions & tracking via neobank Super SDK for banks & fintechs engagement & revenue.",
  url: "products/reward",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/products/reward",
    languages: {
      "x-default": "/products/reward",
    },
  },
  openGraph: {
    url: "products/reward",
    images: [
      {
        url: `${homepage}/assets/images/seo/reward.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
export default function Reward() {

  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero heading={"Drive Engagement with Loyalty Rewards"} para={"Encourage digital service adoption with personalized loyalty programs. Offer rewards that match customer behaviour to boost retention and long-term value."} breadcrumb={true}/>
        <Intro content={introData}/>
        <Wallet/>
       <Rewards/>
       <Redemptions/>
       <Usage/>
        <Values data={valuesData}/>
        <Products  productsData={productsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};
const introData ={
    logo:"/assets/icons/reward-logo.svg",
    heading:"Build Loyalty. Boost Retention.",
    list:[
      "Customised Loyalty Program designed to match your App offerings ",
      "Dedicated Reward Redemption Account ",
      "Access to Redemption Account Statement for tracking via our integrated SDK",
      "Define how Redeemed Reward Points are used "
    ]
  }

  const valuesData = {
    heading:"Creating Lasting Value, Together",
    list:[
        "<p>Reward+ helps Banks and FinTechs boost usage and revenue with a customised loyalty program offered on services offered through Monielink Super SDK</p>"
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
        logo: "/assets/icons/logo/chatbox-white.svg",
        features: [
          "Interactive FAQs ",
          "Help Topics ",
          "Help Videos ",
        ],
        link:"/products/chatbox"
    
      }
    ]
  }
  const faqData = [
    {
      question: "How do we define loyalty triggers?",
      answer:
        "Reward+ lets you design and configure program logic. Common triggers include transaction volumes, referrals, card usage, airtime purchases, or bill payments. Rewards can be issued instantly to dedicated points accounts.",
    },
    {
      question: " Can users view and redeem points within our app?",
      answer:
        "Yes. Users can check points balances, view reward history, and redeem points (e.g. airtime, vouchers) all within your app, thanks to our full Monielink SDK integration.",
    },
    {
      question: "How does Reward+ boost engagement?",
      answer:
        "By aligning rewards with usage patterns, Reward+ incentivizes repeat behavior and builds long-term loyalty. Dormant users can be targeted with campaign-specific offers.",
    },
    {
      question: "Can we run branded or partner campaigns on Reward+?",
      answer:
        "Yes. You can run co-branded promotions, affiliate partnerships, or third-party redemptions. APIs allow seamless integration with merchant catalogs or e-commerce platforms.",
    },
    {
      question: "Can Reward+ be used across consumer and business segments?",
      answer:
        "Absolutely. Whether it's small businesses earning rebates or retail users getting usage-based bonuses, Reward+ adapts to both contexts with flexible rule logic.",
    }
  ]