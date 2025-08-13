import BlogContent from "@/components/BlogDetail/BlogContent";
import Hero from "@/components/BlogDetail/Hero";
import RelatedBlogs from "@/components/BlogDetail/RelatedBlogs";
import CTA from "@/components/Footer/CTA";
import Layout from "@/components/Layout";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";
import React from "react";

export const metadata = getPageMetadata({
  title: "MonieLink Blog: Web3 Economy Fintech Insights",
  description: "Explore MonieLink's guide to web3 economy for neobanks & fintechs. Blockchain, DeFi & digital wallets via Super SDK for emerging markets innovation. ",
  url: "products",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/blog/blog-detail",
    languages: {
      "x-default": "/blog/blog-detail",
    },
  },
  openGraph: {
    url: "blog/blog-detail",
    images: [
      {
        url: `${homepage}/assets/images/seo/blog.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
const page = () => {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Hero />
        <BlogContent />
        <RelatedBlogs />
        <CTA />
      </Layout>
    </>
  );
};

export default page;
