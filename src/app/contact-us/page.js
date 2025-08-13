import Hero from "@/components/ContactPage/Hero";
import Partner from "@/components/ContactPage/Partner";
import ContactCTA from "@/components/Footer/ContactCTA";
import Layout from "@/components/Layout";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";

export const metadata = getPageMetadata({
  title: "Contact MonieLink: Neobank Fintech Partnerships",
  description: "Connect with MonieLink for neobank solutions & Super SDK integration. Email info@monielink.io or call +2348023970955 for digital banking partnerships.",
  url: "contact-us",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/contact-us",
    languages: {
      "x-default": "/contact-us",
    },
  },
  openGraph: {
    url: "contact-us",
    images: [
      {
        url: `${homepage}/assets/images/seo/contact-us.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

export default function ContactPage() {

  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero />
        <Partner />
        <ContactCTA />
      </Layout>
    </>
  );
};