import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import AboutUs from "@/components/AboutPage/AboutUs";
import WhyUs from "@/components/AboutPage/WhyUs";
import Team from "@/components/AboutPage/Team";
import Clients from "@/components/AboutPage/Clients";
import { getPageMetadata } from "@/lib/seo.config";
import { WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";


export const metadata = getPageMetadata({
  title: "About MonieLink: Our Mission",
  description: "Learn about MonieLink's mission to simplify payments with secure, user-friendly solutions for all your financial needs.",
  url: "company",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/company",
    languages: {
      "x-default": "/company",
    },
  },
  openGraph: {
    url: "company",
    images: [
      {
        url: `${homepage}/assets/images/seo/company.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

export default function About() {

  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero heading={"Powering the Future of Digital Banking"} para={"We’re here to close the gap between legacy banking systems and today’s digital demands. Whether you're launching a digital-first product or expanding existing services, Monielink provides the tools you need to deliver seamless retail experiences through a simple integration of our Monielink Super SDK with your Mobile app. "} />
        <AboutUs />
        <WhyUs />
        {/* <Team /> */}
        <Clients />
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};

const faqData = [
  {
    question: "When did Monielink commence its operations?",
    answer:
      "Our B2B services have been around since 2020. Our Patented solution, Dual Transaction Service (DTS) has enabled millions of customers to use their Debit Cards to access their virtual DTS cards.",
  },
  {
    question: "How many countries does Monielink operate in?",
    answer:
      "Monielink is currently active in Nigeria, with plans underway to expand across multiple African markets. As we grow, we’re building strategic partnerships to deepen our footprint across the continent.",
  },
  {
    question: "How can I contact Monielink?",
    answer:
      "You can contact Monielink via email at info@monielink.io or fill out the contact form on our website. You may also follow our LinkedIn page for updates and product announcements.",
  },
  {
    question: "Do you offer free demo sessions for your products?",
    answer:
      "Yes, we offer no-obligation demo sessions tailored to your business needs. Request a demo through our website or email us directly, and our team will schedule a session at your convenience.",
  },
  {
    question: "What makes Monielink different?",
    answer:
      "Monielink offers a modular yet unified SDK infrastructure that lets Banks and FinTechs launch full-scale digital banking services faster. Unlike traditional service providers, Monielink supports rapid go-to-market, local compliance, embedded fraud prevention, and end-to-end partner support through a revenue sharing model—ensuring you're always in control of your customer experience.",
  }
]