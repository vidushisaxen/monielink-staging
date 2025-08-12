import { getPageMetadata } from "@/lib/seo.config";
import Link from "next/link";
import { homepage } from "@/lib/util";
import Header from "@/components/Header";

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
            <div id="hero" className=" h-screen w-screen">
                <div className="flex w-full items-center justify-center h-full z-10">
                    <div className="text-center">
                        <h1 className="font-medium text-[20vw] max-sm:text-[40vw] max-md:text-[25vw] leading-[1.1]">
                            404
                        </h1>
                        <p>Go back to <Link href="/" className="link-line">Homepage!!!</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}