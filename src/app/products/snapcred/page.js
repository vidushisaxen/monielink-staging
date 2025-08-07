import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Values from "@/components/ProductDetailPage/Values";
import Diagram from "@/components/ProductDetailPage/SnapCred/Diagram";
import MobileDiagram from "@/components/ProductDetailPage/SnapCred/MobileDiagram";
import Wallet from "@/components/ProductDetailPage/SnapCred/Wallet";

export default function SnapCred() {

  return (
    <>
      <Layout>
        <Hero heading={"Comprehensive Credit Management "} para={"Our cloud-based loan management system enables lenders to Instantly Originate and Disburse / Issue loans & credit cards, Manage them throughout their lifecycle, and collect both due and delinquent payments from customers’ bank accounts across multiple banks."} breadcrumb={true}/>
        <Intro content={introData}/>
       <Wallet/>
        <Diagram/>
        <MobileDiagram/>
        <Values data={valuesData}/>
        <Products  productsData={productsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};
const introData ={
  logo:"/assets/icons/snapcred-logo.svg",
  heading:"Accelerate Lending. Automate Repayments & Collections.",
  width:"w-[90%]",
  list:[
    "Our SDK platform can help our Partners offer a variety of loan products to their customers on their Mobile Banking app. Monielink underwrites these loans instantly based on the  rules that they set-up on our Web Portal. Monielink platform can instantly disburse once they are approved digitally.",
    "Lenders can set-up underwriting & collection rules besides accessing the dashboards and variety of reports to analyse and manage the Loan & Credit Card Portfolio.",
    "SnapCred manages Loan / credit card Accounts over their life-cycle. Customers can view their Loan & Credit Card statement on Lender’s / Issuer’s mobile app integrated with our SDK.",
    "Borrowers can conveniently Repay monthly instalments or minimum dues directly from any of their bank accounts. ",
    "SnapCred executes collections for lenders and issuers using configured rules, recovering due and delinquent payments from both core banking-linked accounts and other banks via automated GSI integration"
  ]
}

const valuesData = {
  heading:"Creating Lasting Value, Together",
  list:[
      "<p>Nigeria is expected to witness 8X growth  in retail credit portfolio, by 2030.</p>",
      "<p>Average annual revenue per retail customer is expected to increase from $ 3 in 2025 to $ 25 , by 2030.</p>",
      "<p>Driving this growth will require strong automation in collections, user-friendly repayment options, and transparent access to loan and credit card statements</p>"
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
    // {
    //   logo: "/assets/icons/logo/snapcred-white.svg",
    //   features: [
    //     "Credit Origination ",
    //     "Credit Disbursement",
    //     "Credit lifecycle Management ",
    //     "Repayments",
    //     "Due & Delinquent Amount Collections",
    //     "GSI Collection automation",
    //   ],
    //   link:"/products/snapcred"
  
    // },
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
    question: "What credit products can I launch with SnapCred?",
    answer:
      "SnapCred supports a wide array of lending products, including personal loans, credit cards. Lenders can define custom terms, interest rates, repayment schedules, and fees & set-up other under-writing rules using Monielink web-portal.",
  },
  {
    question: " Does SnapCred support the full lending lifecycle?",
    answer:
      "Yes. SnapCred enables end-to-end management—from onboarding and KYC, to underwriting and real-time disbursement, repayment tracking, delinquency management, and collections automation.",
  },
  {
    question: "How does collections work on SnapCred?",
    answer:
      "SnapCred automates both due and delinquent collections using partner-defined workflows. It can initiate direct debits from a borrower’s account within their banks as well as across multiple banks using GSI-compliant logic, while generating reports and recovery insights.",
  }
]