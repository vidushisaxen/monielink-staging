import Hero from "../components/Hero/Hero";
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

export default function HomePage() {

  return (
    <>
      <Layout>
        <Hero />
        <Overview />
        <Solutions />
        <USPs />
        <Products />
        <Intro />
        <Clients />
        <Blogs />
        <FAQs />
        <CTA />
      </Layout>
    </>
  );
};