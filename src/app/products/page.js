import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import Overview from "@/components/ProductsPage/Overview";
import ProductSlider from "@/components/ProductsPage/ProductSlider";
import Copy from "@/components/Animations/Copy";
import Launch from "@/components/ProductsPage/Launch";
import MobileProducts from "@/components/ProductsPage/MobileProducts";
import Diagram1 from "@/components/ProductsPage/Diagram1";
import Diagram2 from "@/components/ProductsPage/Diagram2";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";


export const metadata = getPageMetadata({
  title: "MonieLink Products: Neobank SDK for Banking",
  description: "Explore MonieLink neobank products for fintechs & banks: Digital wallets, payments, card issuing, lending & loyalty via Super SDK. Scale secure financial services. ",
  url: "products",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/products",
    languages: {
      "x-default": "/products",
    },
  },
  openGraph: {
    url: "products",
    images: [
      {
        url: `${homepage}/assets/images/seo/products.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
export default function ProductsPage() {

  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
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

const faqData = [
  {
    question: "What is Monielink?",
    answer:
      "Monielink is a unified Super SDK that enables banks and fintechs to embed digital banking, card issuance, payments, and lending services directly into their mobile apps — all from a single integration.",
  },
  {
    question: "Who can use Monielink’s services?",
    answer:
      "Monielink is built for licensed banks, fintechs, microfinance institutions, and payment service providers looking to deliver or scale digital banking services.",
  },
  {
    question: "What services can I offer with Monielink?",
    answer:
      "With Monielink, you can offer a wide range of services — including digital account onboarding, card issuance, payments (QR, contactless, in-app), lending, wallets, merchant acquiring, and more — all through your mobile app.",
  },
  {
    question: "How long does it take to go live with Monielink?",
    answer:
      "Go-to-market timelines vary, but with our plug-and-play SDK and dedicated support, most partners launch within 6 weeks — not months.",
  },
  {
    question: "Can we customize the features and branding?",
    answer:
      "Absolutely. Monielink supports branded card issuance, UI customization, and configurable workflows to match your customer and compliance needs.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer full onboarding, integration support, compliance guidance, and ongoing technical maintenance.",
  }
]
