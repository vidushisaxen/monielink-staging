import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Intro from "@/components/SolutionDetailPage/Intro";
import Products from "@/components/SolutionDetailPage/Products";
import Solutions from "@/components/SolutionDetailPage/Solutions";
import { DigitalAccounts1 } from "@/components/Icons";
import IntroMerchnatAcquiring from "@/components/SolutionDetailPage/IntroMerchantAcquiring";


export default function SolutionDetail() {

  return (
    <>
      <Layout>
        <Hero heading={"Seamless Merchant Onboarding"} para={"Effortlessly integrate the Monielink SDK into your mobile app for seamless merchant onboarding. Equip merchants with an interoperable QR code for digital payments, along with access to the Soft-POS feature, turning NFC-enabled mobile phones into POS terminals, allowing them to accept contactless card payments in addition to using traditional POS devices "} breadcrumb={true}/>
        <IntroMerchnatAcquiring/>
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
  headline:"All-in-one Merchant Acquiring Solution for seamless merchant onboarding, enabling digital and card payments with instant settlement ",
  heading:"Explore More of our solutions",
  cards:[
    {
      title: "Digital Account",
      para: "Monielink powers you to build a full-featured digital account ecosystem for offering Digital Banking & all use cases of account management for Credit & Pre-paid card, Loan and Reward accounts.",
      link: "/solutions/digital-accounts",
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
    question: "What is Merchant Acquiring Solution from Monielink?",
    answer:
      "<p>Our Digital Account platform <span class='font-medium'>“Balance”</span> supports all use cases that may be required for Banks & FinTechs to offer retail products for digital banking, issuing credit & pre-paid cards, managing Loan Accounts & offering a customized loyalty management program. <span class='font-medium'>Balance</span> offers customers digital accounts to manage a range of services, enabling them to view account statements with detailed transaction histories and other relevant information</p>",
  },
  {
    question: "Why should you choose our Merchant Acquiring Solution?",
    answer:
      "<p>Each partner or tenant operates within a dedicated, isolated environment encompassing the Monielink platforms, databases, and supporting infrastructure. This setup ensures heightened security, privacy, and control by eliminating resource and data sharing with other tenants. Responsibility for securing the infrastructure and application data within this exclusive environment lies with the tenant.</p> <p> Additionally, our Merchant Acquiring platform enables our Partners to onboard merchants enabling them to accept digital payments using the interoperable QR Codes, accepting contactless payments using our Soft-POS feature besides accepting offline payments on the POS terminals issued to them using Monielink SDK . Built on a scalable and elastic cloud backend, it enables faster transaction processing, reduces infrastructure costs, and delivers an enhanced customer experience.</p>",
  },
  {
    question: "What makes Monielink different?",
    answer:
      "Monielink goes beyond back-end support by offering a fully integrated front-end solution through its Super SDK, allowing seamless integration with partners' mobile banking apps to ensure a smooth and efficient customer experience. This plug-and-play integration approach ensures quicker implementation, while Monielink provides end-to-end solutions for every use case it offers to its partners.",
  },
  {
    question: "How secure is Merchant Acquiring offering from Monielink?",
    answer:
      "Our partner Bank / FinTech has full control over the infrastructure's security configuration, including network access, firewalls, and operating system security. They are responsible for implementing security measures to protect their own data and application from unauthorized access.",
  },
  {
    question: "How does Monielink take care of Compliance requirements?",
    answer:
      "Dedicated instance deployments enable tenants / partners meet regulatory compliance & security control standards.",
  }
]