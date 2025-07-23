import React from "react";
import styles from "./blog.module.css";
import SocialMediaBtn from "../Footer/SocialMediaBtn";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../Icons";
import Copy from "../Animations/Copy";
const BlogContent = () => {
  return (
    <section data-theme="white"
      className={`w-screen h-fit bg-white pt-[25%] mt-[-25%] text-black-1 max-sm:pt-[50%] max-sm:mt-[-50%] ${styles.blogContent}`}
    >
      <div className="py-[10%] h-full w-full flex justify-between px-[5vw] max-sm:px-[5.5vw] max-md:flex-col max-sm:flex-col max-sm:gap-[15vw]">
        <div className="w-[20%] h-fit sticky  top-[10%] max-sm:static max-sm:w-full">
          <div className="w-full flex flex-col gap-[3vw] max-sm:gap-[8vw]">
            <div className="flex flex-col gap-[0.7vw] max-sm:gap-[2vw] fadeupanim">
              <span className="text-[1.5vw] max-md:text-[3.5vw] max-sm:text-head-50">Posted On:</span>
              <p className="max-sm:text-[2vw] max-md:text-[3vw]">June 6 , 2024</p>
            </div>
            <div className="flex flex-col gap-[0.7vw] max-sm:gap-[2vw] fadeupanim">
              <span className="text-[1.5vw] max-md:text-nowrap max-md:text-[3.5vw] max-sm:text-head-50">Share Article:</span>
              <div className="w-fit flex gap-[1vw] max-md:gap-[3vw] max-sm:gap-[2.5vw] max-sm:pb-[1vw] max-md:pb-[5vw]">
                {socials.map((item, index) => (
                  <div key={index}>
                    <a
                      href={"#"}
                      className={`group`}
                      aria-label="Read More"
                      target="_blank"
                    >
                      <div className="text-[#050505]  group-hover:text-white duration-300 transition-colors relative flex items-center justify-center w-[4.2vw] max-sm:w-[16vw] max-sm:h-[16vw] max-md:w-[9vw]">
                        <svg
                          className="w-full h-full "
                          width="77"
                          height="67"
                          viewBox="0 0 77 67"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.6787 0.5H75.0049C75.8333 0.5 76.5049 1.17158 76.5049 2V44.5264C76.5049 44.9221 76.349 45.3021 76.0703 45.583L66.1035 55.6279L55.7939 65.9775C55.5125 66.2601 55.1303 66.4199 54.7314 66.4199H2C1.17193 66.4197 0.50026 65.748 0.5 64.9199V22.3535C0.500017 22.0156 0.614008 21.6891 0.821289 21.4258L0.916016 21.3164L11.8223 9.91504L11.8213 9.91406L20.6074 0.950195C20.8895 0.662321 21.2756 0.5 21.6787 0.5Z"
                            stroke="currentColor"
                            className="group-hover:text-[#FE6E00] duration-300"
                          />
                        </svg>

                        <div className="absolute inset-[6%] ">
                          <div
                            style={{
                              clipPath:
                                "polygon(100% 0%, 100% 66%, 71% 100%, 0% 100%, 0% 33%, 28% 0%)",
                            }}
                            className="w-full  absolute flex items-center justify-center h-full bg-[#FE6E00] group-hover:scale-100 scale-50 transition-all duration-400 opacity-0 group-hover:opacity-100"
                          />
                          <div className="w-full h-full py-[28%] group-hover:scale-110 duration-300">
                            {item.icon}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[65%] max-md:w-[100%] max-sm:w-full">
          <p className="fadeupanim">
            The internet is evolving — and with it, so is the way we engage with
            money, identity, and value. Welcome to Web3: a decentralized,
            user-owned digital economy that&apos;s redefining how financial services
            work at a global scale
          </p>
          <p className="fadeupanim">
            At its core, Web3 replaces centralized intermediaries with smart
            contracts, digital wallets, and blockchain-based protocols. It gives
            individuals true ownership of their assets and digital identities,
            while unlocking new forms of value exchange — from tokenized
            currencies to NFTs, DeFi, and beyond. <br />
            But while the promise of Web3 is vast, the path to participation
            isn&apos;t always simple.
          </p>
          <p className="fadeupanim">
            Most users still live in a hybrid world — where traditional banking
            meets emerging crypto experiences. That&apos;s why infrastructure matters
            more than ever.
          </p>
          <div className="w-full h-[1px] bg-black-1 my-[5vw]  max-sm:my-[15vw] lineDraw" />
          <Copy>
          <h2>What is Web3 and Why Does It Matter?</h2>
          </Copy>
          <p className="fadeupanim">
            Web3 replaces traditional intermediaries with smart contracts,
            blockchain protocols, and self-custody. Users can hold digital
            assets, verify identities, and access financial tools — all without
            a central authority. This shift promises greater transparency,
            control, and opportunity for individuals and institutions alike.
            <br />
            But participation isn&apos;t frictionless. Most users still straddle two
            worlds — conventional banking and emerging crypto platforms — and
            the infrastructure to connect them isn&apos;t always seamless
          </p>
          <div className="w-full h-[1px] bg-black-1 my-[5vw] max-sm:my-[15vw] lineDraw" />
          <Copy>
          <h2>Bridging Traditional Finance and the Web3 Economy</h2>
          </Copy>
          <span className="max-md:text-content-20 fadeupanim">
            Moneylink is solving this challenge by providing the foundational
            tools banks and fintechs need to enable Web3 access:
          </span>
          <ul className="max-md:text-content-20 fadeupanim">
            <li >
              Smart Wallets: Create and manage digital wallets with
              multi-currency and crypto asset support
            </li>
            <li >
              Programmable Cards: Issue virtual debit, credit, or prepaid cards
              linked to fiat and blockchain balances
            </li>
            <li >
              Interoperable Transfers: Enable users to move funds between
              traditional bank accounts and blockchain networks
            </li>
            <li >
              Compliant Onboarding: Seamlessly verify users and meet KYC/AML
              requirements for Web3 readiness
            </li>
          </ul>
          
          <span className="max-md:text-content-20 fadeupanim">
            Whether you're a neobank or an established institution, our platform
            helps you embed secure, Web3-ready functionality directly into your
            apps.
          </span>
         
          <div className="w-full h-[1px] bg-black-1 my-[5vw] max-sm:my-[15vw] lineDraw" />
          <Copy>
          <h2>Why Emerging Markets Are Poised to Lead</h2>
          </Copy>
          <p className="fadeupanim">
            Markets like Nigeria are already mobile-first and digitally driven.
            With over 100 million adults expected to be banked by 2030, and a
            sharp rise in digital wallets and virtual card issuance, the
            conditions are ideal for leapfrogging into decentralized finance.
            <br />
            Web3 provides a framework to bring financial inclusion, security,
            and ownership to millions — but only if the infrastructure is in
            place.
          </p>
          <div className="w-full h-[1px] bg-black-1 my-[5vw] max-sm:my-[15vw] lineDraw" />
          <Copy>
          <h2>The Future Is Here — Let&apos;s Build It Together</h2>
          </Copy>
          <p className="fadeupanim">
            Moneylink is your partner in connecting today&apso;s financial ecosystem
            to tomorrow&apos;s decentralized world. With robust APIs, compliant
            infrastructure, and a single Super SDK, we make it easy to scale
            your services into the Web3 economy. Let&apso;s shape the future of
            finance — together.
          </p>
          <div className="w-full h-[1px] bg-black-1 my-[5vw] max-sm:my-[15vw] lineDraw" />
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
const socials = [
  {
    icon: <FacebookIcon />,
    link: "#",
  },
  {
    icon: <LinkedinIcon />,
    link: "#",
  },
  {
    icon: <TwitterIcon />,
    link: "#",
  },
];
