import Hero from "@/components/ContactPage/Hero";
import Partner from "@/components/ContactPage/Partner";
import CTA from "@/components/Footer/CTA";
import Layout from "@/components/Layout";

export default function HomePage() {

  return (
    <>
      <Layout>
      <Hero/>
      <Partner/>
        <CTA/>
      </Layout>
    </>
  );
};