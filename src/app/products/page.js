import Hero from "@/components/Hero/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import { faqData } from "@/components/SampleFaqData";
import Overview from "@/components/ProductsPage/Overview";
import Products from "@/components/ProductsPage/Products";


export default function products() {

  return (
    <>
      <Layout>
        <Hero heading={"Products Built for Digital Finance"} para={"Whether you're building for consumers, merchants, or agents, Monielink gives you the tools to deliver seamless, modern financial experiences at scale. From digital wallets and embedded credit to contactless payments and loyalty programs — Monielink offers a modular, API-ready product stack designed to help banks, fintechs, and platforms launch, scale, and grow smarter."}/>
        <Overview/>
        <Products/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};