import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Footer/CTA";
import { faqData } from "@/components/SampleFaqData";
import Products from "@/components/Home/Products";
import Intro from "@/components/ProductDetailPage/Intro";
import Wallet from "@/components/ProductDetailPage/Wallet";
import Values from "@/components/ProductDetailPage/Values";
import Rewards from "@/components/ProductDetailPage/Reward/Rewards";
import Redemptions from "@/components/ProductDetailPage/Reward/Redemptions";
import Usage from "@/components/ProductDetailPage/Reward/Usage";


export default function ChatBox() {

  return (
    <>
      <Layout>
        <Hero heading={"Drive Engagement with Loyalty Rewards"} para={"Encourage digital service adoption with personalized loyalty programs. Offer rewards that match customer behavior to boost retention and long-term value."} breadcrumb={true}/>
        <Intro content={introData}/>
        <Wallet heading={"Build a powerful, multi-currency digital wallet ecosystem that connects consumers and merchants with seamless payments, security, and scale."}/>
       <Rewards/>
       <Redemptions/>
       <Usage/>
        <Values data={valuesData}/>
        <Products/>
        <FAQs data={faqData} />
        <CTA />
      </Layout>
    </>
  );
};
const introData ={
    logo:"/assets/icons/reward-logo.svg",
    heading:"One Platform. Every Retail Banking Service.",
    list:[
      "Digital Account Management with integrated KYC and soft-token authentication",
      "Instant Card Issuance for virtual debit, credit, and prepaid cards via SDK",
      "NUBAN Account Linking to verified mobile numbers for easy fund transfers",
      "Unified Payments including QR payments, bank transfers, inflows, and merchant collections"
    ]
  }

  const valuesData = {
    heading:"Creating Lasting Value, Together",
    list:[
        "<p>Nigeria’s retail banking income per user is just $33 — far behind India ($350), China ($750), and the U.S. ($4,500).<b> By 2030, it’s projected to rise to $200.</b></p>",
        "<p>Over <b>40 MN </b>Unbanked Nigerian Adults are likely to <b> start banking by 2030. </b></p>",
        "<p><b>Average cross selling ratio </b> of banks is likely to increase from 1.6 to <b> 3.4 </b>by 2030.</p></p>"
    ]
  }