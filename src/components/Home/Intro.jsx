import Copy from "../Animations/Copy";
import ButtonComponent from "../Buttons/ButtonComponent";

export default function Intro() {

  return (
    <section
      id="intro"
      className="flex flex-col items-center h-screen py-[9vw] gap-[3vw] bg-[#050505]"
    >
      <div className="w-full flex items-center py-1 justify-center h-fit">
        <Copy>
          <h2 className="text-[#D6D6D6] introText text-[5.2vw] w-[70%] text-center leading-[1.25] font-display">
            Empowering Banks & Fintechs with Scalable Solutions
          </h2>
        </Copy>
      </div>
      <div className=" w-full flex items-center justify-center h-fit">
        <Copy>
          <p className="text-[#A8A8A8] introTextDescription text-[1.04vw] w-[40%] text-center font-display ">
            Our Plug & Play SDK can be Easily Integrated into Mobile Apps of Banks
            & FinTechs to deliver a wide variety of use cases without requiring
            them to build these functionalities from scratch. Our Back-End
            Applications may be deployed in a dedicated instance on our Cloud
            Infrastructure providing our partners full control over its access,
            management , security , data-protection & business continuity.
          </p>
        </Copy>
      </div>
      <ButtonComponent text="Learn More" bgColor={false} borderColor="white" />
    </section>
  );
}
