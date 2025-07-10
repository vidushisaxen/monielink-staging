
import BlogList from "@/components/Blogs/BlogList";
import Hero from "@/components/Blogs/Hero";
import CTA from "@/components/Footer/CTA";
import Layout from "@/components/Layout";
import React from "react";

const page = () => {
  return (
    <> 
      <Layout>
       <Hero/>
       <BlogList/>
       <CTA/>
      </Layout>
    </>
  );
};

export default page;
