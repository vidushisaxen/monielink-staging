import Hero from "@/components/Hero/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import { faqData } from "@/components/SampleFaqData";
import Intro from "@/components/SolutionDetailPage/Intro";
import Products from "@/components/SolutionDetailPage/Products";
import Solutions from "@/components/SolutionDetailPage/Solutions";


export default function SolutionDetail() {

  return (
    <>
      <Layout>
        <Hero heading={"Scalable Digital Banking Infrastructure"} para={"Everything you need to launch and grow digital financial services — cards, payments, lending, compliance, and more — through one powerful platform."} breadcrumb={true}/>
        <Intro/>
        <Products/>
        <Solutions/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};