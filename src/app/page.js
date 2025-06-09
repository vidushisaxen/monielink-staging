"use client";
import React from "react";
import Hero from "./components/Home/Hero";
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
import BackgroundLine from "./components/BackgroundLine";
import CTA from "./components/Home/CTA";
import HeroBackground from "./components/Home/HeroBackground";

const page = () => {
  return (
    <>
      <NavBar />
      <Hero
        Description="Seamlessly embed digital banking services into your mobile apps
              with the Monielink Super SDK — a single, unified solution that
              accelerates your go-to-market and elevates your customer
              experience."
        title="Ready to transform your mobile banking experience?"
        Heading1="Powerful Neobank"
        Heading2="Platform"
        headingFontSize={"7.5vw"}
      />
      <Overview />
      <Solutions />
      <USPs />
      <Products />
      <Intro />
      <Clients />
      <Blogs />
      <FAQs />
      <CTA
        Description={
          "Integrate the Moneylink Super SDK and start delivering seamless, scalable banking services within your mobile app — faster than ever. Let’s build the future of finance together."
        }
        Heading1={"Ready to Power Your Digital"}
        Heading2={"Banking Experience"}
        paddingTop={"0"}
      />
      <Footer />
      {/* <HeroBackground /> */}
      
    </>
  );
};

export default page;
