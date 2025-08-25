import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Values from "@/components/ProductDetailPage/Values";
import Flowchart from "@/components/ProductDetailPage/InstaCard/Flowchart";
import Universal from "@/components/ProductDetailPage/InstaCard/Universal";
import Wallet from "@/components/ProductDetailPage/InstaCard/Wallet";
import { WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/lib/seo.config";


export const metadata = getPageMetadata({
  title: "MonieLink InstaCard: Instant Virtual Cards SDK",
  description: "Issue instant virtual debit/credit cards with MonieLink InstaCard. Dynamic CVV, controls & universal linking via neobank Super SDK for fintech growth.",
  url: "products/instacard",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/products/instacard",
    languages: {
      "x-default": "/products/instacard",
    },
  },
  openGraph: {
    url: "products/instacard",
    images: [
      {
        url: `${homepage}/assets/images/seo/instacard.png`,
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
      <Layout>
        <Hero heading={"Instant Virtual Cards for Seamless Payments"} para={"All-in-one card-issuing platform for issuing virtual cards of all forms Debit, Credit & Pre-paid instantly on the Mobile Apps integrated with Monielink super SDK. All issued Instacards are saved in a Digital Wallet on the SDK for a Secure & Easy Access."} breadcrumb={true}/>
        <Intro content={introData}/>
        <Wallet/>
      <Flowchart/>
      <Universal/>
        <Values data={valuesData}/>
        <Products productsData={productsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};
const introData ={
    logo:"/assets/icons/instacard-logo.svg",
    width:"w-[100%]",
    heading:"Instacard. Instantly Issued, Universally Accepted",
    list:[
      "Instant Issuance of Virtual Cards in all (Debit, Credit & Pre-paid) forms stored in Digital Card Wallet on the SDK integrated with Issuer’s mobile App",
      "Secure Online Payments with Dynamic CVV ",
      "Secure Contactless Payments on POS terminals worldwide, using tokenized PAN for safe and seamless authentication   ",
      "Card Control Settings on SDK to set daily transaction limits for Online & Offline (POS & ATM) usage. Customer can also temporarily Block & Unblock any Instacard or even cancel it permanently using Partner’s Mobile App.",
      "Offer Universal Instacards (physical card) for customers to link their virtual Instacards for payment or any POS or ATM internationally. When an incremental linking request is made, earlier linked Instacard is de-linked and a new Instacard is linked to the Universal Instacard."
    ]
  }

  const valuesData = {
    heading:"Creating Lasting Value, Together",
    list:[
        "<p>Nigeria is expected to have over <b> 300 million Cards </b> In Force, by 2030.</p>",
        "<p>The Nigerian market is projected to shift from physical cards to a growing preference for virtual card issuance. </p>",
        "<p>However, the usage of Physical Cards would remain relevant for ATM transactions & availability of a reliable offline payment method.</p>"
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
      // {
      //   logo: "/assets/icons/logo/instacard-white.svg",
      //   features: [
      //     "Issue Virtual Cards",
      //     "Digital Card Wallet",
      //     "Dynamic CVV",
      //     "Contactless Payments",
      //     "Universal Card",
          
      //   ],
      //   link:"/products/instacard"
    
      // },
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
      question: "What card forms can we issue with Instacard?",
      answer:
        "Partners can instantly issue virtual debit, credit, prepaid, and universal cards via the mobile app. Physical universal cards are also supported and can be linked to multiple virtual Instacards for online and offline usage.",
    },
    {
      question: "How secure are Instacards?",
      answer:
        "<p><ul class='list-disc px-[3vw] space-y-[1vw] max-sm:space-y-[2.5vw]'><li>Virtual Instacard features use of dynamic CVV for online usage, tokenized PANs for making contactless payments by tapping phone on POS terminals, and SDK-based card controls settings (limit setting, block/unblock, etc.) for fraud prevention. This makes Virtual Instcards way more secure in comparison with the physical card issuance.</li><li>Universal Instacards (Physical form) can be purchased by customers from bank branches, agents, retail locations such as  Airports, Grocery stores, drug stores etc besides ordering it online. Customers can link any of their virtual Instacards to a single Universal Instacard to start using it on any POS or ATM internationally.   </li></ul></p>",
    },
    {
      question: "Can one physical card link to multiple virtual cards?",
      answer:
        "Yes. Customers can switch linked virtual Instacards on their Universal Card directly using our SDK integrated  with your app. This reduces card issuance costs while supporting a wide range of use cases. When an incremental linking request is made, earlier linked Instacard is de-linked and a new Instacard is linked to the Universal Instacard.",
    },
    {
      question: "Can customers manage their cards on the app?",
      answer:
        "Yes. Through your app, powered by our SDK, users can view card statements, set transaction limits, freeze or even cancel their virtual Instacards. Customers can also link any Virtual Instcards to Physical Universal Instcards on the SDK to make offline payments using Universal Card on any POS or ATM internationally.",
    }
  ]
  