import Layout from "@/components/Layout";
import Wallet from "@/components/ProductDetailPage/Wallet";
import Values from "@/components/ProductDetailPage/Values";
import Infrastructure2 from "@/components/ProductDetailPage/Balance/Infrstructure2";


export default function page() {

  return (
    <>
      <Layout>
        <Wallet/>
        <Infrastructure2/>
        <Values/>
      </Layout>
    </>
  );
};