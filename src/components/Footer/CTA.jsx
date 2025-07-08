import HeroBackground from "../Hero/HeroBackground";
import Copy from "../Animations/Copy";
import PrimaryButton from "../Buttons/PrimaryButton";
import BlackButton from "../Buttons/BlackButton";

export default function CTA() {

  return (
    <section id="cta" className="w-screen max-md:h-[80vh] relative h-screen bg-background max-sm:h-fit max-sm:py-[25%]">
      <div className="relative h-screen w-full flex flex-col items-center justify-center max-sm:h-fit">
        
        <HeroBackground />

        <div className={`h-fit pointer-events-none w-full flex-col flex items-center justify-center z-10 text-foreground max-sm:px-[5.5vw] max-sm:items-start max-sm:gap-[8vw]`}>
          <Copy>
            <h2
              className={`text-[5.2vw] font-display w-[75%] text-center leading-[1.25] text-[#D6D6D6] max-sm:text-head-100 max-md:text-head-100 max-sm:text-left max-sm:w-[80%] max-md:w-[90%]`}>
              Ready to Power Your Digital Banking Experience
            </h2>
          </Copy>

          <div className={`w-[48%] pt-[3vw] max-md:pt-[5vw] text-center text-[1.05vw] max-sm:w-[80%] max-sm:text-left max-sm:text-content-20 max-md:text-content-20 max-md:w-[60%]`}>
            <Copy>
              <p className="text-[#A8A8A8] ctaDescription">
                Integrate the Moneylink Super SDK and start delivering seamless,
                scalable banking services within your mobile app — faster than
                ever. Let's build the future of finance together.
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
