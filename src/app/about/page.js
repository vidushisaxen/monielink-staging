import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import { faqData } from "@/components/SampleFaqData";
import AboutUs from "@/components/AboutPage/AboutUs";
import WhyUs from "@/components/AboutPage/WhyUs";
import Team from "@/components/AboutPage/Team";
import Clients from "@/components/About/Clients";

export default function About() {

  return (
    <>
      <Layout>
        <Hero heading={"Powering the Future of Digital Banking"} para={"We exist to bridge the gap between traditional banking infrastructure and modern customer expectations. Whether you're building a digital-first product or scaling existing services, Monielink equips you with the tools to serve retail customers seamlessly through a B2B2C model."}/>
        <AboutUs />
        <WhyUs />
        <Team />
        <Clients/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};