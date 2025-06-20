import Image from "next/image";
import Copy from "../Animations/Copy";

const Intro = () => {
    return (
        <section className="bg-gradient h-[90vh] relative">
            <div className="px-[4vw] flex justify-center items-center h-full w-full relative">
                <div className="text-center text-white w-1/2 flex flex-col items-center gap-10">
                    <Copy>
                        <h2 className="text-head-100 font-display">Find the Right Solution for You</h2>
                    </Copy>
                    <Copy>
                        <p className="text-content-20 w-9/12">Enable seamless digital banking experiences for your customers through your mobile app. The Moneylink Super SDK empowers banks and fintechs to launch B2B2C services quickly, securely, and at scale — all from a single integration.</p>
                    </Copy>
                </div>
                <div className="absolute w-1/2">
                    <Image className="" src={"/assets/shapes/solutions-intro.svg"} alt="solutions intro image" width={900} height={900} />
                </div>
            </div>
        </section>
    )
}

export default Intro;