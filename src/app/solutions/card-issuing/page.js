import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Intro from "@/components/SolutionDetailPage/Intro";
import Products from "@/components/SolutionDetailPage/Products";
import Solutions from "@/components/SolutionDetailPage/Solutions";
import { DigitalAccounts1 } from "@/components/Icons";
import IntroCardIssuing from "@/components/SolutionDetailPage/IntroCardIssuing";
import { getPageMetadata } from "@/lib/seo.config";
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";


export const metadata = getPageMetadata({
  title: "MonieLink Card Issuing: Virtual Debit Cards SDK ",
  description: "Issue virtual & physical cards via MonieLink neobank. Debit, credit, prepaid with controls, loyalty & Super SDK for banks & fintechs growth.",
  url: "solutions/card-issuing",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/solutions/card-issuing",
    languages: {
      "x-default": "/solutions/card-issuing",
    },
  },
  openGraph: {
    url: "solutions/card-issuing",
    images: [
      {
        url: `${homepage}/assets/images/seo/card-issuing.png`,
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
    <FAQJSONLD faqs={faqData}/>
    <BreadcrumbsJSONLD pathname={metadata.url}/>
      <Layout>
        <Hero heading={"Launch faster with Scalable Card issuing programs"} para={"Enabling instant issuance of Virtual Cards that delivers both Online & Offline Usage through an All-in-one card-issuing platform for issuing virtual cards instantly on the Mobile Apps integrated with Monielink super SDK"} breadcrumb={true}/>
        <IntroCardIssuing/>
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
      para:"Balance Wallet & Account Management System for management of Credit Card & Pre-paid Card Accounts, offering Card Lifecycle Management that includes credit card repayments, prepaid wallet top-ups, and access to card statements."
    },
    {
      img:"/assets/icons/verifyed-logo.svg",
      para:"Each Virtual Card issued on Monielink SDK comes with a Dynamic CVV that is authenticated by Monielink for every online usage using Verifyed authenticator."
    },
    {
      img:"/assets/icons/reward-logo.svg",
      para:"Boost digital adoption with Reward+ -  a tailored loyalty program that credits usage-based points to a dedicated rewards account. Customers can earn, track and redeem their points directly from your app via our integrated SDK."
    },
    {
      img:"/assets/icons/instacard-logo.svg",
      para:"Offer instant virtual cards (Debit, Credit & Pre-paid forms) for both online and offline transactions. With our Universal Instacard solution, multiple virtual cards can be securely accessed through a single physical card - delivering convenience, control, and a seamless payment experience."
    },
    {
      img:"/assets/icons/snapcred-logo.svg",
      para:"SnapCred is a cloud-based lending platform that supports the full lifecycle of credit products from instant origination and disbursement to loan management and collection services that include due and delinquent payments as well as multi-bank collections."
    },

  ]
}
const solutionsData ={
  headline:"Next-gen virtual card issuance enabling both online & offline payments, with the convenience of linking multiple virtual cards  to a Universal Card for usage from a single Physical Card",
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
      title: "Digital Lending",
      para: "We help you build and scale profitable lending portfolio. From credit card issuance to loan disbursement and recovery — all managed on a compliant, cloud-based system.",
      link: "/solutions/digital-lending",
      
    },
    {
      title: "Dual Transaction Service",
      para: "With our patented Dual Transaction Service, you can offer instant credit card access through existing debit cards — no new plastic required. Drive engagement and grow income with ease.",
      link: "/solutions/dual-transaction-service",
      
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
    question: "What is Card Issuing Solution from Monielink?",
    answer:
      "<p>Our Instant Virtual Card issuing product <span class='font-medium'>“Instacard”</span> supports issuance of all card forms (Debit, Credit & Pre-paid cards) for all payment use cases for making online & offline payments using Monielink SDK integrated within the Mobile Apps of our partner Banks & FinTechs. Using Card Control settings, customers can set-up daily transaction limits for online & offline usage (POS & ATMs), both for domestic & international transactions. Customers can access their card account statements & transaction history through Monielink SDK. Further, customers can purchase our <span class='font-medium'>“Universal Instacard”</span> to link any virtual card that has been issued to them through Monielink SDK, to start using them through a single Physical Card for making offline transactions on any POS or ATM.</p>",
  },
  {
    question: "Why should you choose our Card Issuing Solution?",
    answer:
      "<p>Each partner or tenant operates within a dedicated, isolated environment encompassing the Monielink platforms, databases, and supporting infrastructure. This setup ensures heightened security, privacy, and control by eliminating resource and data sharing with other tenants. Responsibility for securing the infrastructure and application data within this exclusive environment lies with the tenant.</p> <p> Additionally, our Card Issuing platform enables instant issuance of Virtual Cards for secure online & offline usage through Monielink SDK besides linking them to a Universal Card for offline usage through a single physical card. Built on a scalable and elastic cloud backend, it enables faster transaction processing, reduces infrastructure costs, and delivers an enhanced customer experience.</p>",
  },
  {
    question: "What makes Monielink different?",
    answer:
      "Monielink goes beyond back-end support by offering a fully integrated front-end solution through its Super SDK, allowing seamless integration with partners' mobile banking apps to ensure a smooth and efficient customer experience. This plug-and-play integration approach ensures quicker implementation, while Monielink provides end-to-end solutions for every use case it offers to its partners.",
  },
  {
    question: "How secure is Card Issuing offering from Monielink?",
    answer:
      "Our partner Bank / FinTech has full control over the infrastructure's security configuration, including network access, firewalls, and operating system security. They are responsible for implementing security measures to protect their own data and application from unauthorized access.",
  },
  {
    question: "How does Monielink take care of Compliance requirements?",
    answer:
      "Dedicated instance deployments enable tenants / partners meet regulatory compliance & security control standards.",
  }
]