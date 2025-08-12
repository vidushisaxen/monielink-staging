'use client'
import Copy from "../Animations/Copy";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function Intro() {

  return (
    <section
      id="intro"
      className="flex flex-col items-center h-screen max-md:h-fit max-md:py-[15%] max-sm:h-fit py-[9vw] gap-[3vw] bg-[#050505] max-sm:py-[15%] max-sm:px-[3.5vw]"
    >
      <div className="w-full flex items-center max-sm:justify-start max-sm:pl-[4vw] py-1 justify-center h-fit">
        <Copy>
          <h2 className="text-[#D6D6D6] introText text-[5.2vw] max-md:text-[6vw] max-sm:text-[10vw] max-sm:text-left w-[70%] max-md:w-[80%] max-sm:w-[90%] text-center leading-[1.25] font-display">
          Empowering Banks & Fintechs with Scalable Solutions
          </h2>
        </Copy>
      </div>
      <div className=" w-full flex items-center justify-center h-fit">
        <Copy>
          <p className="text-[#A8A8A8] introTextDescription text-[1.04vw] max-sm:text-[4vw] w-[50%] max-md:w-[80%] max-sm:w-[90%] max-sm:text-left text-center font-display max-sm:py-[5vw] max-md:py-[5vw] max-md:text-[3vw]">
          Our Plug & Play SDK can be Easily Integrated into Mobile Apps of Banks & FinTechs to deliver a wide variety of use cases without requiring them to build these functionalities from scratch. Our Backend Applications may be deployed in a dedicated instance on our Cloud Infrastructure providing our partners full control over its access, management , security , data-protection & business continuity.
          </p>
        </Copy>
      </div>
      <div className="w-full flex justify-center items-center max-sm:justify-start max-sm:pl-[4vw]">

      <PrimaryButton text="Learn More" href="/solutions" />
      </div>
      {/* <ButtonComponent text="Learn More" bgColor={false} borderColor="white" /> */}
    </section>
  );
}
