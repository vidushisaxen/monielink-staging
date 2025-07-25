import ScrambleText from "@/components/h/ScrambleText";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {

    const links = [
        {
            name: "About Us",
            link: "/about",
        },
        {
            name: "Solutions",
            link: "/solutions",
        },
        {
            name: "Products",
            link: "/products",
        },
        {
            name: "Resources",
            link: "/blogs",
        },
        {
            name: "Contact Us",
            link: "/contact",
        },
    ];

    return (
        <Layout>
            <div className="h-screen w-full bg-black-1 flex items-center justify-center">
                <div className="flex items-center gap-[3vw]">
                    {links.map((item, index) => (
                        <Link key={index} href={item.link} className="uppercase font-normal font-body text-white/70">
                            <ScrambleText onHover={true} centerd speed={0.6} className="min-w-[8vw]">
                                {item.name}
                            </ScrambleText>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
