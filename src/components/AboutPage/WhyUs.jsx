import Copy from "../Animations/Copy";
import WhyUsSwiper from "./WhyUsSwiper";

const WhyUs = () => {
    return (
        <section className="bg-gradient relative h-[400vh]">
            <div className="w-full h-full py-[7vw] text-white">
                <div className="flex justify-between items-start mb-[10vw] px-[4vw]">
                    <Copy>
                        <h3 className="text-head-100 font-display">
                            Why Monielink?
                        </h3>
                    </Copy>
                    <Copy>
                        <p className="text-content-20 w-[52%]">
                            MoneyLink gives you everything you need to launch and scale a card program — fast, secure, and fully customized to your brand and business goals. Our platform handles the heavy lifting — from regulatory compliance and fraud prevention to real-time transaction controls and funding logic — so you can focus on delivering a seamless experience to your customers.
                        </p>
                    </Copy>
                </div>
                <WhyUsSwiper />
                <div className="flex items-center justify-center text-center pt-[15vw] pb-[12vw] px-[4vw]">
                    <Copy>
                        <h2 className="text-head-150 font-display">One SDK. <br /> Endless Possibilities</h2>
                    </Copy>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;