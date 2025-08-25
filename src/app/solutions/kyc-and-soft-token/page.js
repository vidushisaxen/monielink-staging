import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/SolutionDetailPage/Products";
import Solutions from "@/components/SolutionDetailPage/Solutions";
import IntroKYC from "@/components/SolutionDetailPage/IntroKYC";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";


export const metadata = getPageMetadata({
  title: "MonieLink KYC: Verification & 2FA Neobank",
  description: "Secure digital onboarding with MonieLink neobank KYC & soft token. AI facial recognition, ID checks & 2FA via Super SDK for fintechs & banks fraud prevention.",
  url: "solutions/kyc-and-soft-token",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/solutions/kyc-and-soft-token",
    languages: {
      "x-default": "/solutions/kyc-and-soft-token",
    },
  },
  openGraph: {
    url: "solutions/kyc-and-soft-token",
    images: [
      {
        url: `${homepage}/assets/images/seo/kyc.png`,
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
        <Hero heading={"Instant Digital KYC with Soft Token 2FA"} para={"VERIFYED enables banks and FinTechs to complete customer onboarding through a digital KYC process in seconds, while also providing KYC upgrade services for existing customers. Enable 2FA on any account through easy, self-guided onboarding using multiple authentication options."} breadcrumb={true}/>
       <IntroKYC/>
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
      img:"/assets/icons/verifyed-logo.svg",
      para:"Automate your KYC process with AI-powered verification for faster onboarding, lower costs, and stronger fraud prevention. With Verifyed Authenticator, enhance user security through seamless SaaS-based two-factor authentication - all built to scale with your operations."
    },
  ]
}
const solutionsData ={
  headline:"Enabling Digital KYC for immediate onboarding, activation, and usage. With Verifyed Authenticator, enhance user security by turning on two-factor authentication",
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
        title: "Dual Transaction Service",
        para: "With our patented Dual Transaction Service, you can offer instant credit card access through existing debit cards — no new plastic required. Drive engagement and grow income with ease.",
        link: "/solutions/dual-transaction-service",
        
      },
    {
      title: "Digital Lending",
      para: "We help you build and scale profitable lending portfolio. From credit card issuance to loan disbursement and recovery — all managed on a compliant, cloud-based system.",
      link: "/solutions/digital-lending",
      
    },
    {
      title: "Loyalty Management",
      para: "We enable you to design, launch, and manage custom loyalty programs that reward usage, increase customer engagement, and deliver real-time visibility into earned points.",
      link: "/solutions/digital-lending",
    },
  ]
}

const faqData = [
  {
    question: "What is Verifyed Solution from Monielink?",
    answer:
      "<ul class='list-disc pl-[3vw] space-y-[1vw] max-sm:space-y-[2.5vw]'><li>Verifyed, through the Monielink Super SDK, enables capturing customers’ face with built-in validations to ensure accurate face capture. </li><li>Using Single-Image passive Liveness Detection, Verifyed confirms that the captured face is of a live individual, preventing spoofing with photos, videos, or other impersonation acts during Identity Verification. </li><li>Strengthen User Verification using state-of-the-art Facial Recognition capability, safeguarding your business against identity fraud by matching liveness-verified faces with profile images from BVN, NIN, or other photo IDs in real time. </li><li>With Verifyed Customers can scan address proof documents (e.g., utility bills), which our OCR validates to ensure the Address Matches the registration details, as well as confirming the document’s validity based on its date and elapsed time. </li><li>Through the SDK, Verifyed allows users to mark their residence on the map, with the platform conducting location-based verifications over the next 48 hours to validate the address digitally. </li><li>Verifyed enables Business Verification by cross-checking registration details with the CAC, aiding in efficient merchant onboarding. </li><li>Customer can use Verifyed services for Upgrading existing KYC Status. </li><li>Enable 2FA on any account through easy, self-guided onboarding using multiple authentication options.</li></ul>",
  },
  {
    question: "Why should you choose our Verifyed Solution?",
    answer:
      "<p>Each partner or tenant operates within a dedicated, isolated environment encompassing the Monielink platforms, databases, and supporting infrastructure. This setup ensures heightened security, privacy, and control by eliminating resource and data sharing with other tenants. Responsibility for securing the infrastructure and application data within this exclusive environment lies with the tenant. </p> <p> Additionally, Verifyed enables Digital KYC for immediate onboarding, activation, and usage. With Verifyed Authenticator, enhance user security by turning on two-factor authentication.</p>",
  },
  {
    question: "What makes Monielink different?",
    answer:
      "Monielink goes beyond back-end support by offering a fully integrated front-end solution through its Super SDK, allowing seamless integration with partners' mobile banking apps to ensure a smooth and efficient customer experience. This plug-and-play integration approach ensures quicker implementation, while Monielink provides end-to-end solutions for every use case it offers to its partners.",
  },
  {
    question: "How secure is Verifyed offering from Monielink?",
    answer:
      "Our partner Bank / FinTech has full control over the infrastructure's security configuration, including network access, firewalls, and operating system security. They are responsible for implementing security measures to protect their own data and application from unauthorized access.",
  },
  {
    question: "How does Monielink take care of Compliance requirements?",
    answer:
      "Dedicated instance deployments enable tenants / partners meet regulatory compliance & security control standards.",
  }
]