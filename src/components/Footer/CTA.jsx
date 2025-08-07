import HeroBackground from "../Hero/HeroBackground";
import Copy from "../Animations/Copy";
import PrimaryButton from "../Buttons/PrimaryButton";
import BlackButton from "../Buttons/BlackButton";
import Image from "next/image";

export default function CTA() {

  return (
    <section id="cta" className="w-screen max-md:h-[80vh] relative h-screen bg-background max-sm:h-fit max-sm:py-[25%]">
      <div className="absolute top-0 left-0 h-full !w-full hidden max-sm:block max-md:block">
                <Image src={"/assets/images/hero-bg.png"} height={852} width={393} alt="hero-bg" className="h-full w-full"/>
              </div>
      <div className="relative h-screen w-full flex flex-col items-center justify-center max-sm:h-fit">
        
        <HeroBackground />

        <div className={`h-fit pointer-events-none w-full flex-col flex items-center justify-center z-10 text-foreground max-sm:px-[5.5vw] max-sm:items-start max-sm:gap-[8vw]`}>
          <Copy>
            <h2
              className={`text-[5.2vw] font-display w-[75%] text-center leading-[1.25] text-[#D6D6D6] max-sm:text-head-100 max-md:text-head-100 max-sm:text-left max-sm:w-[80%] max-md:w-[90%]`}>
              Power Your Digital Banking Experience
            </h2>
          </Copy>

          <div className={`w-[48%] pt-[3vw] max-md:pt-[5vw] text-center text-[1.05vw] max-sm:w-[80%] max-sm:text-left max-sm:text-content-20 max-md:text-content-20 max-md:w-[60%]`}>
            <Copy>
              <p className="text-[#A8A8A8] ctaDescription">
              The Monielink Super SDK platform empowers Banks & Fintechs to grow revenue from retail products by up <span className="!font-bold"> 6X </span>to while significantly accelerating customer acquisition.

              </p>
            </Copy>
          </div>
          <div className="flex items-center pt-[3vw] gap-5 fadeupanim max-sm:flex-col">
            <PrimaryButton text="Talk to an expert" href="#" />
            <BlackButton text="Talk to an expert" href="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
