import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import { faqData } from "@/components/SampleFaqData";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Wallet from "@/components/ProductDetailPage/Wallet";
import Values from "@/components/ProductDetailPage/Values";
import Identity from "@/components/ProductDetailPage/Verifyed/Identity";
import Address from "@/components/ProductDetailPage/Verifyed/Address";
import Biometrics from "@/components/ProductDetailPage/Verifyed/Biometrics";
import IndentityMobile from "@/components/ProductDetailPage/Verifyed/IndentityMobile";

export default function Verifyed() {
  return (
    <>
      <Layout>
        <Hero
          heading={"Seamless Digital KYC for Instant Onboarding"}
          para={
            "Monielink’s SDK enables fast, secure KYC verification — allowing customers to sign up, get verified, and start using financial services in minutes. From facial biometrics to NIN, BVN, and ID validation, every step is streamlined for compliance, speed, and a seamless user experience."
          }
          breadcrumb={true}
        />
        <Intro content={introData} />
        <Wallet
          heading={
            "Build a powerful, multi-currency digital wallet ecosystem that connects consumers and merchants with seamless payments, security, and scale."
          }
        />
        <IndentityMobile/>
        <Identity />
        <Address />
        <Biometrics />
        <Values data={valuesData} />
        <Products />
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
const introData = {
  logo: "/assets/icons/verifyed-logo.svg",
  heading: "One Platform. Every Retail Banking Service.",
  list: [
    "Digital Account Management with integrated KYC and soft-token authentication",
    "Instant Card Issuance for virtual debit, credit, and prepaid cards via SDK",
    "NUBAN Account Linking to verified mobile numbers for easy fund transfers",
    "Unified Payments including QR payments, bank transfers, inflows, and merchant collections",
  ],
};

const valuesData = {
  heading: "Creating Lasting Value, Together",
  list: [
    "<p>Nigeria’s retail banking income per user is just $33 — far behind India ($350), China ($750), and the U.S. ($4,500).<b> By 2030, it’s projected to rise to $200.</b></p>",
    "<p>Over <b>40 MN </b>Unbanked Nigerian Adults are likely to <b> start banking by 2030. </b></p>",
    "<p><b>Average cross selling ratio </b> of banks is likely to increase from 1.6 to <b> 3.4 </b>by 2030.</p></p>",
  ],
};
