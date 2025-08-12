import Image from "next/image";
import Copy from "@/components/Animations/Copy";
import HeroBackground from "@/components/Hero/HeroBackground";
import Header from "@/components/Header";


export default function Hero({heading1,heading2}){
  return ( <>
  <Header/>
    <section className="w-screen relative h-screen  max-sm:pb-0 bg-background overflow-hidden" id='404'>
       <div className="absolute top-0 left-0 h-full !w-full hidden max-sm:block max-md:block">
                <Image src={"/assets/images/hero-bg.png"} height={852} width={393} alt="hero-bg" className="h-full w-full"/>
              </div>
      <div className="relative h-screen max-sm:h-[80vh] max-sm:pt-[15vh] w-full flex flex-col items-center justify-center max-sm:items-start max-sm:px-[2vw]">
        <HeroBackground />
        <div
          className={` pointer-events-none  w-full text-center mx-auto  relative z-[99] text-foreground max-sm:items-start max-sm:text-left max-sm:pl-[5vw] max-sm:pt-[0vw]`}
        >
          <Copy >
            <h1
              className={`text-head-150 text-center font-display  mx-auto text-gray-1 max-sm:w-[90%] leading-[1]`}
            >
           <span className="block">{heading1}</span>
           <span className="block">{heading2}</span>

            </h1>
          </Copy>
          
        </div>
      </div>
    </section> </>
  );
}

