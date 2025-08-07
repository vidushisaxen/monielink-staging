import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/SolutionDetailPage/Products";
import Solutions from "@/components/SolutionDetailPage/Solutions";
import { DigitalAccounts1 } from "@/components/Icons";
import IntroDigitalAccounts from "@/components/SolutionDetailPage/IntroDigitalAccounts";


export default function SolutionDetail() {

  return (
    <>
      <Layout>
        <Hero heading={"Scalable Digital Banking Infrastructure"} para={"Everything you need to launch and grow digital financial services — digital banking, cards, payments, lending, compliance, and more  through one powerful platform."} breadcrumb={true}/>
        <IntroDigitalAccounts/>
        <Products/>
        <Solutions solutionsData={solutionsData}/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};

const productsData ={
  heading:"Creating Lasting Value, Together"
}
const solutionsData ={
  headline:"All-in-one Digital Account Management solution supported with digital KYC management & Soft-Token authentication security ",
  heading:"Explore More of our solutions",
  cards:[
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
    question: "What is Digital Account offering from Monielink?",
    answer:
      "<p>Our Digital Account platform <span class='font-medium'>“Balance”</span> supports all use cases that may be required for Banks & FinTechs to offer retail products for digital banking, issuing credit & pre-paid cards, managing Loan Accounts & offering a customized loyalty management program. <span class='font-medium'>Balance</span> offers customers digital accounts to manage a range of services, enabling them to view account statements with detailed transaction histories and other relevant information</p>",
  },
  {
    question: "Why should you choose our Digital Accounts offering?",
    answer:
      "<p>Each partner or tenant operates within a dedicated, isolated environment encompassing the Monielink platforms, databases, and supporting infrastructure. This setup ensures heightened security, privacy, and control by eliminating resource and data sharing with other tenants. Responsibility for securing the infrastructure and application data within this exclusive environment lies with the tenant.</p><p> Additionally, our Digital Account solution supports a wide range of use cases, including digital banking, credit and prepaid card issuance, loan account management, and a customizable loyalty program. Built on a scalable and elastic cloud backend, it enables faster transaction processing, reduces infrastructure costs, and delivers an enhanced customer experience.</p>",
  },
  {
    question: "What makes Monielink different?",
    answer:
      "Monielink goes beyond back-end support by offering a fully integrated front-end solution through its Super SDK, allowing seamless integration with partners' mobile banking apps to ensure a smooth and efficient customer experience. This plug-and-play integration approach ensures quicker implementation, while Monielink provides end-to-end solutions for every use case it offers to its partners.",
  },
  {
    question: "How secure is Digital Accounts offering from Monielink?",
    answer:
      "Our partner Bank / FinTech has full control over the infrastructure's security configuration, including network access, firewalls, and operating system security. They are responsible for implementing security measures to protect their own data and application from unauthorized access.",
  },
  {
    question: "How does Monielink take care of Compliance requirements?",
    answer:
      "Dedicated instance deployments enable tenants / partners meet regulatory compliance & security control standards.",
  }
]