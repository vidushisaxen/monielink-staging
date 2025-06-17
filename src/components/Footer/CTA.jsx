import ButtonComponent from "../Buttons/ButtonComponent";
import HeroBackground from "../Hero/HeroBackground";
import Copy from "../Animations/Copy";

export default function CTA() {

  return (
    <section id="cta" className="w-screen relative h-screen bg-background">
      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        
        <HeroBackground />

        <div className={`h-fit pointer-events-none w-full flex-col flex items-center justify-center z-10 text-foreground`}>
          <Copy>
            <h2
              className={`text-[5.2vw] font-display w-[75%] text-center leading-[1.25] text-[#D6D6D6]`}>
              Ready to Power Your Digital Banking Experience
            </h2>
          </Copy>

          <div className={`w-[48%] pt-[3vw] text-center text-[1.05vw]`}>
            <Copy>
              <p className="text-[#A8A8A8] ctaDescription">
                Integrate the Moneylink Super SDK and start delivering seamless,
                scalable banking services within your mobile app — faster than
                ever. Let's build the future of finance together.
              </p>
            </Copy>
          </div>
          <div className="flex items-center pt-[3vw] gap-5">
            <ButtonComponent text="Talk to an expert" borderColor="white" />
            <ButtonComponent
              text="Talk to an expert"
              borderTrue
              bgColor="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
