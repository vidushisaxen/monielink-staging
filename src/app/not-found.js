import { getPageMetadata } from "@/lib/seo.config";
import Link from "next/link";
import { homepage } from "@/lib/util";
import Header from "@/components/Header";
import HeroBackground from "@/components/Hero/HeroBackground";
import Image from "next/image";
import Copy from "@/components/Animations/Copy";

export const metadata = getPageMetadata({
    title: "404 | Page Not Found",
    description: "Empower fintechs & banks with MonieLink neobank Super SDK for digital banking, payments, card issuing & lending. Drive 6X revenue growth via scalable solutions.",
    alternates: {
        canonical: "/404",
        languages: {
            "x-default": "/404",
        },
    },
    openGraph: {
        url: "404",
        images: [
            {
                url: `${homepage}/assets/images/seo/homepage.png`,
                width: 1200,
                height: 630,
            },
        ],
    },
});

export default function NotFoundPage() {

    return (
        <>
        <Header/>
         <section className="w-screen relative h-screen  max-sm:pb-0 bg-background overflow-hidden">
       <div className="absolute top-0 left-0 h-full !w-full hidden max-sm:block max-md:block">
          <Image src={"/assets/images/hero-bg.png"} height={852} width={393} alt="hero-bg" className="h-full w-full"/>
        </div>
      <div className="relative h-screen max-md:h-[80vh] max-sm:h-[80vh] max-sm:pt-[15vh] w-full flex flex-col items-center justify-center max-sm:items-start max-sm:px-[2vw]">
        <HeroBackground />
       
        <div
          className={`h-fit pointer-events-none w-full pt-20 flex-col flex items-center justify-center z-10 text-foreground max-sm:items-start text-center max-sm:pl-[5vw] max-sm:pt-[0vw]`}
        >
          <Copy delay={0.5}>
            <h1
              className={`text-[20vw] leading-[1.1] font-display w-[80%] max-md:w-[90%] headingText  text-gray-1 max-sm:w-[90%]`}
            >
              404
            </h1>
          </Copy>
          <div
            className={`w-[60%] max-md:w-[80%] pt-5 text-content-20 text-gray-2 max-sm:w-full max-md:pt-[5vw] max-sm:pt-[10vw]`}
          >
            <Copy delay={0.5 + 0.5}>
              <p className="descriptionText leading-[1] text-content-24 max-sm:text-content-20 max-sm:leading-[1.5] max-sm:pr-[5vw] max-md:text-[3vw]">
                Go back to <Link href="/" className="link-line pointer-events-auto">Homepage!!!</Link>
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}