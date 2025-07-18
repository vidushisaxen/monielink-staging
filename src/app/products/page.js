'use client'
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import { faqData } from "@/components/SampleFaqData";
import Overview from "@/components/ProductsPage/Overview";
import ProductSlider from "@/components/ProductsPage/ProductSlider";
import Copy from "@/components/Animations/Copy";
import Launch from "@/components/ProductsPage/Launch";
import MobileProducts from "@/components/ProductsPage/MobileProducts";
import Diagram1 from "@/components/ProductsPage/Diagram1";
import Diagram2 from "@/components/ProductsPage/Diagram2";

export default function ProductsPage() {

  return (
    <>
      <Layout>
        <Hero heading={"Products Built for Digital Finance"} para={"Whether you're building for consumers, merchants, or agents, Monielink gives you the tools to deliver seamless, modern financial experiences at scale. From digital wallets and embedded credit to contactless payments and loyalty programs — Monielink offers a modular, API-ready product stack designed to help banks, fintechs, and platforms launch, scale, and grow smarter."} />
        <Overview />
        <ProductSlider />
        <MobileProducts/>
        <Launch/>
      <Diagram1/>
      <Diagram2/>
        <section data-theme="white" className="bg-white-1 py-[20vw] flex items-center justify-center text-center max-sm:py-[40%]">
          <Copy>
            <h3 className="text-head-140 font-light font-display">
              <span style={{backgroundClip: "text"}} className="bg-gradient text-transparent">One SDK.</span><br />
              <span style={{backgroundClip: "text"}} className="bg-gradient text-transparent">Endless Possibilities.</span>
            </h3>
          </Copy>
        </section>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};