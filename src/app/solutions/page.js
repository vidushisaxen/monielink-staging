import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Intro from "@/components/SolutionsPage/Intro";
import Features from "@/components/SolutionsPage/Features";
import Solutions from "@/components/SolutionsPage/Solutions";
import MobileSolutions from "@/components/SolutionsPage/MobileSolutions";

export const metadata = {
  title: "MonieLink Services: Pay & Transfer",
  description: "Explore MonieLink's payment and transfer services. Secure, fast, and easy solutions for personal and business needs.",
};

export default function SolutionsPage() {
  return (
    <>
      <Layout>
        <Hero
          heading={"Smart Solutions for Modern Banking"}
          para={
            "Monielink offers end-to-end digital banking capabilities designed to help you launch, scale, and optimize financial services delivery. From customer onboarding, payments, and card issuance to lending, merchant acquiring, and account management — our platform delivers secure, scalable solutions tailored to today’s banking landscape. Built for speed. Backed by compliance. Powered by flexibility."
          }
        />
        <Intro />
        <Solutions />
        <MobileSolutions />
        <Features />
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
}

const faqData = [
  {
    question: "What makes Monielink standout from others offering similar products?",
    answer:
      "Monielink not only provides back-end solutions to empower its partners to launch Digital Banking, Card Issuing, Merchant Acquiring, and Digital Lending products, but it also supports Digital KYC Management, Soft Token for 2FA, Loyalty Management, and Chatbot services. Additionally, it offers a fully integrated front-end solution through its Super SDK, enabling seamless integration with partners' Mobile Banking apps to deliver a smooth and efficient customer experience.",
  },
  {
    question: "Are Monielink solutions available individually or only as a bundle?",
    answer:
      "Each Monielink product—such as SnapCred, Balance, Verifyed, and Instacard—is modular and can be deployed independently. However, partners often bundle multiple offerings to maximize efficiency and create unified digital banking experiences.",
  },
  {
    question: "Why should you partner with Monielink?",
    answer:
      "Monielink helps partners unlock new revenue streams, reduce operational costs, and scale faster. Whether it's increasing merchant acceptance, boosting card transaction volume, or digitizing lending & payment processes, each product is designed to improve bottom-line results through automation, compliance, and user engagement.",
  },
  {
    question: "How does Monielink monetize the products, solutions & services?",
    answer:
      "Monielink operates on a revenue-sharing SaaS model, meaning we align our success with yours to help you achieve the end goal.",
  },
  {
    question: "How does partnership and support work with Monielink?",
    answer:
      "Monielink provides hands-on support from onboarding to go-live. Each partner is assigned a dedicated success manager and receives access to integration support, documentation and 24/7 technical monitoring. Business reviews and roadmap planning sessions are included.",
  },
  {
    question: "I need a demo. How do I get in touch?",
    answer:
      "You can request a product demo directly from the contact section on our website or reach out to info@monielink.io.A representative will schedule a tailored walkthrough based on your business needs.",
  },
  {
    question: "How long does integration take?",
    answer:
      "Integration timelines vary by product and partner readiness. Go live can be typically achieved in under 4 weeks, however, more complex deployments may at times take longer. Our team will provide a clear implementation roadmap during onboarding.",
  },
]
