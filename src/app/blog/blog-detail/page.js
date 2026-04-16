import BlogContent from "@/components/BlogDetail/BlogContent";
import Hero from "@/components/BlogDetail/Hero";
import RelatedBlogs from "@/components/BlogDetail/RelatedBlogs";
import CTA from "@/components/Footer/CTA";
import Layout from "@/components/Layout";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from "@/lib/util";
import React from "react";

const BLOG_DATA = {
  title: "Web3 and the Future of Finance",
  path: "/blog/blog-detail",
  image: `${homepage}/assets/images/seo/blog.png`,
  description: "Web3 is redefining how financial services work at a global scale.",
  datePublished: "2025-08-13T00:00",
  dateModified: "2025-08-13T00:00",
};

function getBlogDetailMetadata() {
  return getPageMetadata({
    title: BLOG_DATA.title,
    description: BLOG_DATA.description,
    url: BLOG_DATA.path,
    date_published: BLOG_DATA.datePublished,
    date_modified: BLOG_DATA.dateModified,
    alternates: {
      canonical: BLOG_DATA.path,
      languages: {
        "x-default": BLOG_DATA.path,
      },
    },
    openGraph: {
      title: BLOG_DATA.title,
      description: BLOG_DATA.description,
      url: BLOG_DATA.path,
      images: [{ url: BLOG_DATA.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: BLOG_DATA.title,
      description: BLOG_DATA.description,
      images: [BLOG_DATA.image],
    },
  });
}

export async function generateMetadata() {
  return getBlogDetailMetadata();
}

const page = () => {
  const pageMetadata = getBlogDetailMetadata();
  const url = new URL(BLOG_DATA.path, homepage).toString();

  return (
    <>
      <WebpageJsonLd metadata={pageMetadata} />
      <Layout>
        <Hero />
        <BlogContent
          url={url}
          title={BLOG_DATA.title}
          description={BLOG_DATA.description}
        />
        <RelatedBlogs />
        <CTA />
      </Layout>
    </>
  );
};

export default page;
