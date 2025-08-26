import React from "react";
import Copy from "../Animations/Copy";
import Image from "next/image";

const ProductCard = ({img,para}) => {
  return (
    <>
      <div className="flex flex-col gap-[2vw] items-start w-[80%] justify-start max-sm:w-full max-md:w-full max-sm:gap-[8vw] max-md:gap-[4vw]">
        <div className="h-[5vw] w-[15vw] max-md:w-[30vw] max-md:h-auto fadeupanim max-sm:w-[50vw] max-sm:h-auto">
          <Image
            src={img}
            height={100}
            width={100}
            alt="products-logo"
            className="h-full w-full"
          />
        </div>

        <Copy>
          <p className={`text-content-20 max-sm:w-[100%] max-md:w-[85%]`}>
            {para}
          </p>
        </Copy>
      </div>
    </>
  )
}

const Products = ({ productData }) => {
  return (
    <section
      data-theme="white"
      id="features"
      className="bg-white-1 text-black-1 w-screen h-full"
    >
      <div className="px-[4.5vw] py-[8vw] max-sm:px-[5.5vw] max-sm:py-[15%]">
        <div className="w-full flex items-start justify-between max-sm:flex-col max-md:flex-col gap-[4vw] max-sm:gap-[10vw]">
          <div className="w-[52%] max-md:w-[70%] max-sm:w-full sticky top-[20%] self-start max-sm:static">
            <Copy>
              <h2 className="text-head-100 font-display">
                {productData.heading}
              </h2>
            </Copy>
          </div>

          <div className="w-[45%] flex flex-col items-center space-y-[5vw] max-sm:w-full max-sm:space-y-[10vw]">
            {productData.cards.map((item, index) => (
              <ProductCard img={item.img} para={item.para} key={index}/>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};



export default Products;


