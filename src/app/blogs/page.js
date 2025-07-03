
import BlogList from "@/components/Blogs/BlogList";
import Hero from "@/components/Blogs/Hero";
import Layout from "@/components/Layout";
import React from "react";

const page = () => {
  return (
    <>
      <Layout>
       <Hero/>
       <BlogList/>
      </Layout>
    </>
  );
};

export default page;
