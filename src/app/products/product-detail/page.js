import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import { faqData } from "@/components/SampleFaqData";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Wallet from "@/components/ProductDetailPage/Wallet";
import Infrastructure from "@/components/ProductDetailPage/Infrastructure";
import Values from "@/components/ProductDetailPage/Values";



export default function SolutionDetail() {

  return (
    <>
      <Layout>
        <Hero heading={"Seamless Digital Banking with Balance"} para={"Deliver modern financial services — from onboarding to transactions — inside your mobile app using Moneylink’s Super SDK."} breadcrumb={true}/>
        <Intro/>
        <Wallet/>
        <Infrastructure/>
        <Values/>
        <Products/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};