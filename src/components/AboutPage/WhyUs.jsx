import Copy from "../Animations/Copy";
import WhyUsSwiper from "./WhyUsSwiper";

const WhyUs = () => {
    return (
        <section data-theme="orange" className="bg-gradient relative h-fit white w-screen overflow-hidden">
            <div className="w-full h-full py-[7vw] max-md:py-[15%] text-white max-sm:py-[15%]">
                <div className="flex justify-between items-start mb-[10vw] px-[4vw] max-sm:flex-col max-sm:gap-[12vw] max-md:px-[4vw] max-sm:px-[5.5vw]">
                    <Copy>
                        <h3 className="text-head-100 max-sm:w-full max-md:w-[35%] font-display">
                            Why Monielink?
                        </h3>
                    </Copy>
                    <Copy>
                        <p className="text-content-20 w-[52%] max-md:w-[60%] max-sm:w-full">
                            MoneyLink gives you everything you need to launch and scale a card program — fast, secure, and fully customized to your brand and business goals. Our platform handles the heavy lifting — from regulatory compliance and fraud prevention to real-time transaction controls and funding logic — so you can focus on delivering a seamless experience to your customers.
                        </p>
                    </Copy>
                </div>
                <div className="h-[50vh]  max-sm:h-[70vh] max-md:h-[60vh]">
                <WhyUsSwiper />

                </div>
                <div className="flex items-center justify-center text-center pt-[15vw] pb-[12vw] max-sm:pb-[15vw] max-md:pb-[8vw] px-[4vw]">
                    <Copy>
                        <h2 className="text-head-150 font-display">One SDK. <br /> Endless Possibilities</h2>
                    </Copy>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;