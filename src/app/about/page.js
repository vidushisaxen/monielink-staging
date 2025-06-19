"use client"
import Hero from "@/components/Hero/Hero";
import { fadeUpAnim } from "@/components/Animations/gsapAnimations";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";

export default function About() {
fadeUpAnim();
  return (
    <>
      <Layout>
        <Hero heading={"Powering the Future of Digital Banking"} para={"We exist to bridge the gap between traditional banking infrastructure and modern customer expectations. Whether you're building a digital-first product or scaling existing services, Monielink equips you with the tools to serve retail customers seamlessly through a B2B2C model."}/>
        <FAQs data={faqData}/>
        <CTA/>
      </Layout>
    </>
  );
};

const faqData = [
  {
    question: "What security measures do you have in place?",
    answer:
      "We implement bank-grade security protocols including end-to-end encryption, multi-factor authentication, and regular security audits to protect all data and transactions.",
  },
  {
    question: "How quickly can we integrate your SDK?",
    answer:
      "Our SDK is designed for rapid deployment, with most integrations completed within 2-4 weeks depending on your specific requirements and technical environment.",
  },
  {
    question: "Do you provide technical support?",
    answer:
      "Yes, we offer 24/7 technical support through multiple channels including dedicated account managers, developer documentation, and emergency response teams.",
  },
  {
    question: "What types of institutions do you work with?",
    answer:
      "We partner with a wide range of financial institutions including traditional banks, digital banks, fintech companies, and payment service providers across multiple regions.",
  },
  {
    question: "How do you handle data compliance?",
    answer:
      "We maintain strict compliance with international data protection regulations including GDPR, PSD2, and regional banking regulations, ensuring all data handling meets the highest standards.",
  },
];