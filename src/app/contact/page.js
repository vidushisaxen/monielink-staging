import Hero from "@/components/ContactPage/Hero";
import Partner from "@/components/ContactPage/Partner";
import ContactCTA from "@/components/Footer/ContactCTA";
import Layout from "@/components/Layout";

export default function HomePage() {

  return (
    <>
      <Layout>
      <Hero/>
      <Partner/>
       <ContactCTA/>
      </Layout>
    </>
  );
};