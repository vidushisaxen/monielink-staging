
import BlogList from "@/components/Blogs/BlogList";
import Hero from "@/components/Blogs/Hero";
import CTA from "@/components/Footer/CTA";
import Layout from "@/components/Layout";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";
import React from "react";

export const metadata = getPageMetadata({
  title: "MonieLink Blogs: Fintech Insights & Innovations",
  description: "Read MonieLink blogs on neobank trends, fintech innovations, web3 economy & digital banking. Expert insights for banks & fintechs to drive growth & inclusion.",
  url: "blog",
  date_published: "2025-08-13T00:00",
  date_modified: "2025-08-13T00:00",
  alternates: {
    canonical: "/blog",
    languages: {
      "x-default": "/blog",
    },
  },
  openGraph: {
    url: "blog",
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
       <Hero/>
       <BlogList/>
       <CTA/>
      </Layout>
    </>
  );
};

export default page;
