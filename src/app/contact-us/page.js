import Hero from "@/components/ContactPage/Hero";
import Partner from "@/components/ContactPage/Partner";
import ContactCTA from "@/components/Footer/ContactCTA";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Contact MonieLink: Get in Touch",
  description: "Reach MonieLink for support or inquiries. Contact us via email, phone, or form for quick assistance.",
};

export default function ContactPage() {

  return (
    <>
      <Layout>
        <Hero />
        <Partner />
        <ContactCTA />
      </Layout>
    </>
  );
};