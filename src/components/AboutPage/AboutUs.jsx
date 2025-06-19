import Image from "next/image";
import Copy from "../Animations/Copy";

const AboutUs = () => {
    return (
        <>
            <section className="bg-white-1 p-[8vw]">
                <div className="w-full flex items-center justify-between">
                    <div className="flex flex-col gap-y-[5vw] text-black-1 w-[58%]">
                        <Copy>
                            <h2 className="text-head-40 font-body">Monielink is a neobank enablement platform designed to help banks and fintechs deliver full-scale digital banking experiences directly within their mobile apps. With our all-in-one Super SDK, partners can integrate and launch secure, compliant, and feature-rich services — faster and more efficiently than ever before.</h2>
                        </Copy>
                        <Copy>
                            <p className="text-content-20">
                                Our Dedicated Instance SaaS model replicates the control and security of an on-premise setup — hosted on Monielink’s secure cloud infrastructure. Each partner operates within a fully isolated environment, including dedicated platforms, databases, and supporting infrastructure. This architecture ensures enhanced security, privacy, and regulatory compliance by eliminating any resource or data sharing between tenants.
                            </p>
                        </Copy>
                    </div>
                    <div className="flex items-end flex-col">
                        <Image 
                            src="/assets/shapes/about.svg"
                            alt="About Us"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;