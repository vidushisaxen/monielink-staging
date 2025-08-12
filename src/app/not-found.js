import Image from "next/image";
import Copy from "@/components/Animations/Copy";
import HeroBackground from "@/components/Hero/HeroBackground";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFoundPage(){
  return ( <>
  <Header/>
    <section className="w-screen relative h-screen  max-sm:pb-0 bg-background overflow-hidden" id='404'>
       <div className="absolute top-0 left-0 h-full !w-full hidden max-sm:block max-md:block">
                <Image src={"/assets/images/hero-bg.png"} height={852} width={393} alt="hero-bg" className="h-full w-full"/>
              </div>
      <div className="relative h-screen max-sm:h-[80vh] max-sm:pt-[15vh] w-full flex flex-col items-center justify-center max-sm:items-start max-sm:px-[2vw]">
        <HeroBackground />
        <div
          className={` pointer-events-none w-full text-center mx-auto  relative z-[99999999] text-foreground max-sm:items-start max-sm:text-left max-sm:pl-[5vw] max-sm:pt-[0vw]`}
        >
          <Copy >
            <h1
              className={`text-[18vw] font-display  text-gray-1 max-sm:w-[90%] leading-[1]`}
            >
             404
            </h1>
          </Copy>
          <Copy>
            <Link href={"/"}> <p className="leading-[1.2]">Go Back to Homepage!!</p></Link>
          </Copy>
        </div>
      </div>
    </section> </>
  );
}

