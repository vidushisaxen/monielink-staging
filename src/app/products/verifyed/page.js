import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Values from "@/components/ProductDetailPage/Values";
import Identity from "@/components/ProductDetailPage/Verifyed/Identity";
import Address from "@/components/ProductDetailPage/Verifyed/Address";
import IndentityMobile from "@/components/ProductDetailPage/Verifyed/IndentityMobile";
import Wallet from "@/components/ProductDetailPage/Verifyed/Wallet";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";
import SelfService from "@/components/ProductDetailPage/Verifyed/SelfService";
import SelfToken from "@/components/ProductDetailPage/Verifyed/SelfToken";


export const metadata = getPageMetadata({
  title: "MonieLink Verifyed: KYC & 2FA Verification SDK",
  description: "Secure onboarding with MonieLink Verifyed. Digital KYC, facial biometrics & soft token 2FA via neobank Super SDK for banks & fintechs fraud protection. ",
  url: "products/verifyed",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/products/verifyed",
    languages: {
      "x-default": "/products/verifyed",
    },
  },
  openGraph: {
    url: "products/verifyed",
    images: [
      {
        url: `${homepage}/assets/images/seo/verifyed.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
export default function Verifyed() {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero
          heading={"Turn on 2FA to add an extra layer of security."}
          para={
            "With Verifyed Authenticator, turn on 2-Step Verification. When you enable 2-Step Verification (also known as two-factor authentication), you add an extra layer of security to your account."
          }
          breadcrumb={true}
        />
        <Intro content={introData} />
        <Wallet/>
        <IndentityMobile/>
        <Identity />
        <Address />
        {/* <SelfService/> */}
        <SelfToken/>
        <Values data={valuesData} />
        <Products  productsData={productsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
const introData = {
  logo: "/assets/icons/verifyed-logo.svg",
  heading: "Add 2FA protection against fraudsters. ",
  width:"w-[90%]",
  list: [
    "Enable 2FA on any account through easy, self-guided onboarding using multiple authentication options.",
    "Face-ID, Touch-ID, Encrypted Backups and more to keep users secure.",
    "Prevents account from getting locked when a user lose phone with secure Backup",
    "Sync Verifyed 2FA across mobile, tablet and desktop. Customers who carry more than one phone & prefer the availability of Soft Token on multiple devices, can access their Verifyed Soft Token accounts on multiple devices.",
    "Offline Mode enables users to use Verifyed even when the device is not connected to the internet."
  ],
};

const valuesData = {
  heading: "Creating Lasting Value, Together",
  list: [
    "<p>Nigeria may see payment fraud exposure surging to <b> ₦ 1 trillion </b> by 2030</p>",
    "<p>Securing payment transactions to prevent fraud will be critical to unlocking digital growth.</p>",
  ],
};
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
    // {
    //   logo: "/assets/icons/verifyed-logo.svg",
    //   features: [
    //     "KYC Management",
    //     "Liveness Detection ",
    //     "Facial Recognition ",
    //     "Business Verification ",
    //     "Address Verification",
    //     "Soft – Token issuance for 2FA"
    //   ],
    //   link:"/products/verifyed"
  
    // },
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
    question: "How is 2FA handled within Verifyed?",
    answer:
      "The Verifyed SDK includes optional soft-token generation. This adds a second layer of security for sensitive actions like logins, payments, and PIN resets—fully manageable within your app.",
  },
  {
    question: "Does Verifyed App work in offline mode?",
    answer:
      "Yes. Customers can access your Soft-Token accounts set-up on Verifyed App even in offline mode. However, when you set-up a new Soft-Token account, users will have to be online.",
  },
  {
    question: "Can Verifyed soft-token accounts be synced to additional phone or tablet the user may have ?",
    answer:
      "Yes. Customers can sync their Verifyed 2FA accounts to an additional device through a safe & secure authentication process.",
  }
]
