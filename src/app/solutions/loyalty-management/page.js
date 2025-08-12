
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Products from "@/components/SolutionDetailPage/Products";
import Solutions from "@/components/SolutionDetailPage/Solutions";
import IntroLoyalty from "@/components/SolutionDetailPage/IntroLoyalty";


export default function SolutionDetail() {

  return (
    <>
      <Layout>
        <Hero heading={"Implementing a tailored loyalty program"} para={"Design a customised Loyalty Program that rewards customers with usage-based points credited to a dedicated rewards account. Customers can view their reward point statements on our Partner’s Mobile App integrated with our SDK."} breadcrumb={true}/>
       <IntroLoyalty/>
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
      para:"Balance Wallet & Account Management System supports overall rewards strategy through Reward Point & Redemption Accounts. Customers can track account statement for the reward points they earn & redeemed point to spend on select services offered on partners platform."
    },
    {
      img:"/assets/icons/reward-logo.svg",
      para:"Boost digital adoption with Reward+, a tailored loyalty program that credits usage-based points to a dedicated rewards account. Customers can track and redeem their points directly from your app via our integrated SDK."
    },
   

  ]
}
const solutionsData ={
  headline:"Reward strategy is a powerful way to boost the usage of digital banking services",
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
      title: "KYC Management ",
      para: "We make identity verification effortless with AI-driven facial recognition, liveness detection, and two-factor authentication — helping you onboard users securely and at scale.",
      link: "/solutions/kyc-and-soft-token",
    },
  ]
}

const faqData = [
  {
    question: "What is Rewards+ solution from Monielink?",
    answer:
      "Design a customised Loyalty Program that rewards customers with usage-based points credited to a dedicated rewards account. Customers can view their reward point statements on our Partner’s Mobile App integrated with our SDK. Reward points can be redeemed for cash under a tailored loyalty program, with funds credited to a dedicated reward redemption account. Allow customers to use their redeemed points for airtime, data, or utility payments, with options customized to match your mobile App offerings. Customers can monitor their reward points and redemptions through reward & redemption account statements available via the SDK integrated into your mobile app, helping them engage more effectively with the loyalty program.",
  },
  {
    question: "Why should you choose our Rewards+?",
    answer:
      "<p>Each partner or tenant operates within a dedicated, isolated environment encompassing the Monielink platforms, databases, and supporting infrastructure. This setup ensures heightened security, privacy, and control by eliminating resource and data sharing with other tenants. Responsibility for securing the infrastructure and application data within this exclusive environment lies with the tenant.  </p> <p> Additionally, Reward+ helps Banks and FinTechs boost usage and revenue with a customised loyalty program offered on services offered through Monielink Super SDK.</p>",
  },
  {
    question: "What makes Monielink different?",
    answer:
      "Monielink goes beyond back-end support by offering a fully integrated front-end solution through its Super SDK, allowing seamless integration with partners' mobile banking apps to ensure a smooth and efficient customer experience. This plug-and-play integration approach ensures quicker implementation, while Monielink provides end-to-end solutions for every use case it offers to its partners.",
  },
  {
    question: "How secure is Rewards+ offering from Monielink?",
    answer:
      "Our partner Bank / FinTech has full control over the infrastructure's security configuration, including network access, firewalls, and operating system security. They are responsible for implementing security measures to protect their own data and application from unauthorized access.",
  },
  {
    question: "How does Monielink take care of Compliance requirements?",
    answer:
      "Dedicated instance deployments enable tenants / partners meet regulatory compliance & security control standards.",
  }
]