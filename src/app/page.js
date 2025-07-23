import Overview from "../components/Home/Overview";
import Solutions from "../components/Home/Solutions";
import USPs from "../components/Home/USPs";
import Products from "../components/Home/Products";
import Intro from "../components/Home/Intro";
import FAQs from "../components/Home/FAQs";
import Blogs from "../components/Home/Blogs";
import Clients from "../components/Home/Clients";
import CTA from "../components/Footer/CTA";
import Layout from "../components/Layout";
import { faqData } from "@/components/SampleFaqData";
import HomePageHero from "@/components/Hero/HomePageHero";

export default function HomePage() {
  return (
    <>
      <Layout>
        <HomePageHero
          heading={" Powerful Neobank Platform"}
          para={
            "Seamlessly embed digital banking services into your mobile apps with the Monielink Super SDK — a single, unified solution that accelerates your go-to-market and elevates your customer experience."
          }
        />
        <Overview />
        <Solutions />
        <USPs />
        <Products  heading={"Everything needed to Power Digital Banking"}/>
        <Intro />
        <Clients />
        <Blogs />
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
