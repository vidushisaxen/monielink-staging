import Image from "next/image";
import AnimatedClients from "./Clients2";
import Copy from "../Animations/Copy";

export default function Clients() {

  const logos = [
    { src: "/assets/icons/logo/1.svg", width: "8vw", right: "20%", top: "5%" },
    { src: "/assets/icons/logo/2.svg", width: "5vw", right: "35%", top: "22%" },
    { src: "/assets/icons/logo/3.svg", width: "9vw", right: "10%", top: "40%" },
    { src: "/assets/icons/logo/4.svg", width: "10vw", right: "40%", top: "50%" },
    { src: "/assets/icons/logo/5.svg", width: "7vw", right: "35%", top: "67.5%" },
    { src: "/assets/icons/logo/6.svg", width: "9vw", right: "15%", top: "80.5%" },
    { src: "/assets/icons/logo/7.svg", width: "8vw", right: "20%", top: "100%" },
  ];

  return (
    <section
      id="clients"
      className="h-[130vh]  w-screen flex items-center justify-center relative bg-[#050505] pb-[4vw]"
    >
      <div className="w-screen  h-full py-2 ">
        <AnimatedClients />
      </div>
      <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
        <div className="w-1/2 h-full px-[3.75vw] flex flex-col pt-[12vw] items-start justify-start">
          <Copy>
            <h2 className="text-[5.2vw] clientText font-display font-light text-[#D6D6D6] leading-[1.2] w-[90%]">
              Clients &  Partners We Work Alongside
            </h2>
          </Copy>
        </div>
        <div className="w-1/2 relative px-20  h-full flex flex-col items-end justify-between ">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="absolute h-auto flex items-end justify-end"
              style={{
                width: logo.width,
                right: logo.right,
                top: logo.top,
              }}
            >
              <Image
                src={logo.src}
                alt={`client-logo-${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
