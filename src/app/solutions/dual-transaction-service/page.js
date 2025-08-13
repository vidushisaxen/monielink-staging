import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/SolutionDetailPage/Products";
import Solutions from "@/components/SolutionDetailPage/Solutions";
import IntroDualTransaction from "@/components/SolutionDetailPage/IntroDualTransaction";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";

export const metadata = getPageMetadata({
  title: "MonieLink DTS: Dual Credit Debit Cards Fintech",
  description: "Unlock dual transaction service with MonieLink neobank. Convert debit to credit cards via Super SDK for banks & fintechs, enhancing revenue & security.",
  url: "solutions/dual-transaction-service",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/solutions/dual-transaction-service",
    languages: {
      "x-default": "/solutions/dual-transaction-service",
    },
  },
  openGraph: {
    url: "solutions/dual-transaction-service",
    images: [
      {
        url: `${homepage}/assets/images/seo/dual-transaction.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});



export default function SolutionDetail() {

  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero heading={"Seamless Credit & Debit with One DUO Card"} para={"DUO offers end to end solutions for Issuers to launch, manage & scale Credit Card issuance, activations, usage & collections towards enabling them create a profitable portfolio."} breadcrumb={true}/>
       <IntroDualTransaction/>
        <Products productData={productsData}/>
        <Solutions solutionsData={solutionsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};



const productsData ={
  heading:"Creating Lasting Value, Together",
  cards:[
    {
      img:"/assets/icons/balance-logo.svg",
      para:"Balance Wallet & Account Management System for management of Credit Card Accounts, offering Card Lifecycle Management that includes credit card repayments, card control settings & access to credit card statements."
    },
    {
      img:"/assets/icons/verifyed-logo.svg",
      para:"Each Virtual Card issued on Monielink SDK comes with a Dynamic CVV that is authenticated by Monielink for every online usage using Verifyed authenticator."
    },
    {
      img:"/assets/icons/reward-logo.svg",
      para:"Boost digital adoption with Reward+ — a tailored loyalty program that credits usage-based points to a dedicated rewards account. Customers can track and redeem their points directly from your app via our integrated SDK."
    },
    {
      img:"/assets/icons/instacard-logo.svg",
      para:"Offer instant virtual credit cards for both online and offline transactions. Customers can access the virtual credit card using our SDK on Issuers mobile app to make a secure online transactions using Dynamic CVV. DTS enables the usage of the virtual credit card through the existing physical cards the use has."
    },
    {
      img:"/assets/icons/snapcred-logo.svg",
      para:"SnapCred is a cloud-based lending platform that supports the full lifecycle of credit products — from instant origination and disbursement to loan management and collection services that include due and delinquent payments as well as multi-bank collections."
    },

  ]
}
const solutionsData ={
  headline:"Our patented Dual Transaction Service transforms your existing debit cards for seamless Virtual Credit Card usage.",
  heading:"Explore More of our solutions",
  cards:[
    {
      title: "Digital Account",
      para: "Monielink powers you to build a full-featured digital account ecosystem for offering Digital Banking & all use cases of account management for Credit & Pre-paid card, Loan and Reward accounts.",
      link: "/solutions/digital-accounts",
    },
    {
      title: "Merchant Acquiring",
      para: "We support you with the tools and infrastructure to onboard merchants instantly, accept all major payment types, and manage terminals from a single, secure dashboard.",
      link: "/solutions/merchant-acquiring",
      
    },
    {
      title: "Card Issuing",
      para: "We equip you to issue virtual cards (debit, credit, or prepaid forms) instantly. Users can make make online & contactless payments using our SDK besides linking multiple virtual cards to a single physical Universal Card for making offline payments",
      link: "/solutions/card-issuing",
      
    },
    {
      title: "Digital Lending",
      para: "We help you build and scale profitable lending portfolio. From credit card issuance to loan disbursement and recovery — all managed on a compliant, cloud-based system.",
      link: "/solutions/digital-lending",
      
    },
    {
      title: "KYC Management ",
      para: "We make identity verification effortless with AI-driven facial recognition, liveness detection, and two-factor authentication — helping you onboard users securely and at scale.",
      link: "/solutions/kyc-and-soft-token",
      
    },
    {
      title: "Loyalty Management",
      para: "We enable you to design, launch, and manage custom loyalty programs that reward usage, increase customer engagement, and deliver real-time visibility into earned points.",
      link: "/solutions/loyalty-management",
    },
  ]
}

const faqData = [
  {
    question: "What is Dual Transaction Service from Monielink?",
    answer:
      "DUO features the groundbreaking, patented Dual Transaction Service (DTS), which allows pre-approved customers to access their approved credit limits—set on a virtual credit card- using their existing debit cards. Customers can Simply Activate DTS on our Partner’s  Mobile App integrated with our SDK to start using their virtual credit card using their existing Debit Cards. After DTS activation, customers simply choose ‘Credit’ when prompted during the usage on any POS or ATM. The request is routed through the issuer to our system, which seamlessly processes the payment using the Virtual Credit Card Limit.",
  },
  {
    question: "Why should you choose our DTS?",
    answer:
      "<p>Each partner or tenant operates within a dedicated, isolated environment encompassing the Monielink platforms, databases, and supporting infrastructure. This setup ensures heightened security, privacy, and control by eliminating resource and data sharing with other tenants. Responsibility for securing the infrastructure and application data within this exclusive environment lies with the tenant.</p> <p> Additionally, our Card Issuing platform enables instant issuance of Virtual Credit Cards for secure online & offline usage through Monielink SDK besides linking them to their existing Debit Cards for offline usage. Built on a scalable and elastic cloud backend, it enables faster transaction processing, reduces infrastructure costs, and delivers an enhanced customer experience.</p>",
  },
  {
    question: "What makes Monielink different?",
    answer:
      "Monielink goes beyond back-end support by offering a fully integrated front-end solution through its Super SDK, allowing seamless integration with partners' mobile banking apps to ensure a smooth and efficient customer experience. This plug-and-play integration approach ensures quicker implementation, while Monielink provides end-to-end solutions for every use case it offers to its partners.",
  },
  {
    question: "How secure is DTS offering from Monielink?",
    answer:
      "Our partner Bank / FinTech has full control over the infrastructure's security configuration, including network access, firewalls, and operating system security. They are responsible for implementing security measures to protect their own data and application from unauthorized access.",
  },
  {
    question: "How does Monielink take care of Compliance requirements?",
    answer:
      "Dedicated instance deployments enable tenants / partners meet regulatory compliance & security control standards.",
  }
]