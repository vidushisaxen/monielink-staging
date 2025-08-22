import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Intro from "@/components/SolutionDetailPage/Intro";
import Products from "@/components/SolutionDetailPage/Products";
import Solutions from "@/components/SolutionDetailPage/Solutions";
import IntroDigitalLending from "@/components/SolutionDetailPage/IntroDigitalLending";
import { getPageMetadata } from "@/lib/seo.config";
import { WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";

export const metadata = getPageMetadata({
  title: "MonieLink Digital Lending: Loan SDK Management",
  description: "Revolutionize lending with MonieLink neobank SnapCred. Instant underwriting, disbursements & collections via Super SDK for fintechs & banks profitability.",
  url: "solutions/digital-lending",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/solutions/digital-lending",
    languages: {
      "x-default": "/solutions/digital-lending",
    },
  },
  openGraph: {
    url: "solutions/digital-lending",
    images: [
      {
        url: `${homepage}/assets/images/seo/digital-lending.png`,
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
        <Hero heading={"Scalable Digital Lending for Real-Time Credit"} para={"Monielink enables end-to-end loan and credit card management, helping lenders Create & Grow Profitable Portfolios through a complete cloud-based ecosystem"} breadcrumb={true}/>
       <IntroDigitalLending/>
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
      para:"Balance Wallet & Account Management System supports diverse use cases across digital payments, card transactions, lending, and loyalty - all from one powerful, unified platform. "
    },
    {
      img:"/assets/icons/snapcred-logo.svg",
      para:"SnapCred is a cloud-based lending platform that supports the full lifecycle of credit products from instant origination and disbursement to loan management and collection services that include due and delinquent payments as well as multi-bank collections."
    }
  ]
}
const solutionsData ={
  headline:"A complete cloud-based ecosystem that enables full-spectrum loan and credit card management, helping lenders grow profitable portfolios",
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
      para: "We equip you to issue virtual cards (debit, credit, or prepaid forms) instantly. Users can make make online & contactless payments using our SDK besides linking multiple virtual cards to a single physical Universal Card for making offline payments.",
      link: "/solutions/card-issuing",
      
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
    question: "What is Digital Lending Solution from Monielink?",
    answer:
      "Our digital lending platform, “SnapCred,” is a comprehensive cloud-based ecosystem designed for end-to-end management of loans and credit cards. It empowers lenders to build and scale profitable portfolios by enabling instant origination and disbursement/issuance, full lifecycle management, and efficient collection of due and delinquent payments directly from customers’ bank accounts across multiple banks.",
  },
  {
    question: "Why should you choose our Digital Lending Solution?",
    answer:
      "<p>Each partner or tenant operates within a dedicated, isolated environment encompassing the Monielink platforms, databases, and supporting infrastructure. This setup ensures heightened security, privacy, and control by eliminating resource and data sharing with other tenants. Responsibility for securing the infrastructure and application data within this exclusive environment lies with the tenant. </p> <p> Additionally, our Digital Lending platform instant origination and disbursement/issuance, full lifecycle management, and efficient collection of due and delinquent payments directly from customers’ bank accounts across multiple banks. Built on a scalable and elastic cloud backend, it enables faster transaction processing, reduces infrastructure costs, and delivers an enhanced customer experience.</p>",
  },
  {
    question: "What makes Monielink different?",
    answer:
      "Monielink goes beyond back-end support by offering a fully integrated front-end solution through its Super SDK, allowing seamless integration with partners' mobile banking apps to ensure a smooth and efficient customer experience. This plug-and-play integration approach ensures quicker implementation, while Monielink provides end-to-end solutions for every use case it offers to its partners.",
  },
  {
    question: "How secure is Digital Lending offering from Monielink?",
    answer:
      "Our partner Bank / FinTech has full control over the infrastructure's security configuration, including network access, firewalls, and operating system security. They are responsible for implementing security measures to protect their own data and application from unauthorized access.",
  },
  {
    question: "How does Monielink take care of Compliance requirements?",
    answer:
      "Dedicated instance deployments enable tenants / partners meet regulatory compliance & security control standards.",
  }
]