"use client";
import React from "react";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Home/Overview";
import Solutions from "./components/Home/Solutions";
import USPs from "./components/Home/USPs";
import Products from "./components/Home/Products";
import Intro from "./components/Home/Intro";
import FAQs from "./components/Home/FAQs";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Home/Blogs";
import Clients from "./components/Home/Clients";
import CTA from "./components/Footer/CTA";
import Overview2 from "./components/Home/Overview2";
import Solutions2 from "./components/Home/Solutions2";

const page = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Overview />
      {/* <Overview2/> */}
      <Solutions />
      {/* <Solutions2/> */}
      <USPs />
      <Products />
      <Intro />
      <Clients />
      <Blogs />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
};

export default page;
