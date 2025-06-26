import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import { faqData } from "@/components/SampleFaqData";
import Intro from "@/components/SolutionsPage/Intro";
import Features from "@/components/SolutionsPage/Features";
import Solutions from "@/components/SolutionsPage/Solutions";

export default function About() {

  return (
    <>
      <Layout>
        <Hero heading={"Smart Solutions for Modern Banking"} para={"Moneylink empowers banks and fintechs to launch and scale digital banking services with speed, flexibility, and security. From onboarding to payments, we offer a full suite of solutions tailored to the demands of today's B2B2C financial ecosystem."}/>
        <Intro />
        <Solutions />
        <Features />
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};