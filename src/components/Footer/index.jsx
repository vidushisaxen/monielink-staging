"use client";
import Image from "next/image";
import BackgroundLine from "../BackgroundLine";
import Link from "next/link";
import DecryptedText from "../DecryptedText";
import Copy from "../Animations/Copy";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import SocialMediaBtn from "./SocialMediaBtn";

export default function Footer() {
  return (
    <div className="relative" id="footer">
      <BackgroundLine />
      <footer
        className="h-screen absolute inset-0 z-[40] flex items-center justify-center w-full"
        id="footer"
      >
        <div className="w-full h-full flex items-center justify-center relative">
          <div
            className="w-[90vw] h-[85vh] absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2"
          >
 <svg className="h-full w-full" width="1772" height="845" viewBox="0 0 1772 845" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_853_3093" maskUnits="userSpaceOnUse" x="0" y="0.716797" width="1772" height="845" fill="black">
<rect fill="white" y="0.716797" width="1772" height="845"/>
<path d="M860.287 1.7168C860.848 1.7168 861.377 1.95608 861.793 2.33301V2.33301L945.466 78.2314C947.306 79.9002 949.701 80.8242 952.185 80.8242H1751C1762.05 80.8242 1771 89.7785 1771 100.824V823.862C1771 834.908 1762.05 843.862 1751 843.862H21C9.95431 843.862 1 834.908 1 823.862V21.7168C1 10.6711 9.95431 1.7168 21 1.7168H860.287Z"/>
</mask>
<path d="M945.466 78.2314L944.794 78.9721L944.794 78.9721L945.466 78.2314ZM1751 843.862L1751 844.862L1751 844.862L1751 843.862ZM1 21.7168L0 21.7168V21.7168H1ZM861.793 2.33301L861.121 3.07369L944.794 78.9721L945.466 78.2314L946.138 77.4908L862.465 1.59233L861.793 2.33301ZM945.466 78.2314L944.794 78.9721C946.818 80.8078 949.453 81.8242 952.185 81.8242V80.8242V79.8242C949.949 79.8242 947.793 78.9925 946.138 77.4908L945.466 78.2314ZM952.185 80.8242V81.8242H1751V80.8242V79.8242H952.185V80.8242ZM1771 100.824H1770V823.862H1771H1772V100.824H1771ZM1771 823.862H1770C1770 834.356 1761.49 842.862 1751 842.862L1751 843.862L1751 844.862C1762.6 844.862 1772 835.46 1772 823.862H1771ZM1751 843.862V842.862H21V843.862V844.862H1751V843.862ZM21 843.862V842.862C10.5066 842.862 2 834.356 2 823.862H1H0C0 835.46 9.40202 844.862 21 844.862V843.862ZM1 823.862H2V21.7168H1H0V823.862H1ZM1 21.7168L2 21.7168C2 11.2234 10.5066 2.7168 21 2.7168V1.7168V0.716797C9.40202 0.716797 4.32941e-06 10.1188 0 21.7168L1 21.7168ZM21 1.7168V2.7168H860.287V1.7168V0.716797H21V1.7168ZM1751 80.8242V81.8242C1761.49 81.8242 1770 90.3308 1770 100.824H1771H1772C1772 89.2262 1762.6 79.8242 1751 79.8242V80.8242ZM861.793 2.33301L862.465 1.59233C861.898 1.07786 861.137 0.716797 860.287 0.716797V1.7168V2.7168C860.559 2.7168 860.857 2.83431 861.121 3.07369L861.793 2.33301Z" fill="#282828" mask="url(#path-1-outside-1_853_3093)"/>
<foreignObject x="-20" y="-19.2832" width="1812" height="884.146"><div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:"blur(10px)", clipPath:"url(#bgblur_0_853_3093_clip_path)", height:"100%", width:"100%"}}></div></foreignObject><g data-figma-bg-blur-radius="20">
<mask id="path-3-outside-2_853_3093" maskUnits="userSpaceOnUse" x="0" y="0.716797" width="1772" height="845" fill="black">
<rect fill="white" y="0.716797" width="1772" height="845"/>
<path d="M860.287 1.7168C860.848 1.7168 861.377 1.95608 861.793 2.33301L945.466 78.2314C947.306 79.9002 949.701 80.8242 952.185 80.8242H1751C1762.05 80.8242 1771 89.7785 1771 100.824V823.862C1771 834.908 1762.05 843.862 1751 843.862H21C9.95431 843.862 1 834.908 1 823.862V21.7168C1 10.6711 9.95431 1.7168 21 1.7168H860.287Z"/>
</mask>
<path d="M860.287 1.7168C860.848 1.7168 861.377 1.95608 861.793 2.33301L945.466 78.2314C947.306 79.9002 949.701 80.8242 952.185 80.8242H1751C1762.05 80.8242 1771 89.7785 1771 100.824V823.862C1771 834.908 1762.05 843.862 1751 843.862H21C9.95431 843.862 1 834.908 1 823.862V21.7168C1 10.6711 9.95431 1.7168 21 1.7168H860.287Z" fill="url(#paint0_linear_853_3093)" fillOpacity="0.02"/>
<path d="M945.466 78.2314L944.794 78.9721L944.794 78.9721L945.466 78.2314ZM1771 823.862H1772H1771ZM1751 843.862V844.862V843.862ZM1 823.862H0H1ZM1 21.7168H0H1ZM21 1.7168V0.716797V1.7168ZM861.793 2.33301L861.121 3.07369L944.794 78.9721L945.466 78.2314L946.138 77.4908L862.465 1.59233L861.793 2.33301ZM945.466 78.2314L944.794 78.9721C946.818 80.8078 949.453 81.8242 952.185 81.8242V80.8242V79.8242C949.949 79.8242 947.793 78.9925 946.138 77.4908L945.466 78.2314ZM952.185 80.8242V81.8242H1751V80.8242V79.8242H952.185V80.8242ZM1771 100.824H1770V823.862H1771H1772V100.824H1771ZM1771 823.862H1770C1770 834.356 1761.49 842.862 1751 842.862V843.862V844.862C1762.6 844.862 1772 835.46 1772 823.862H1771ZM1751 843.862V842.862H21V843.862V844.862H1751V843.862ZM21 843.862V842.862C10.5066 842.862 2 834.356 2 823.862H1H0C1.78814e-07 835.46 9.40202 844.862 21 844.862V843.862ZM1 823.862H2V21.7168H1H0V823.862H1ZM1 21.7168H2C2 11.2234 10.5066 2.7168 21 2.7168V1.7168V0.716797C9.40202 0.716797 4.58956e-06 10.1188 0 21.7168H1ZM21 1.7168V2.7168H860.287V1.7168V0.716797H21V1.7168ZM1751 80.8242V81.8242C1761.49 81.8242 1770 90.3308 1770 100.824H1771H1772C1772 89.2262 1762.6 79.8242 1751 79.8242V80.8242ZM861.793 2.33301L862.465 1.59233C861.898 1.07786 861.137 0.716797 860.287 0.716797V1.7168V2.7168C860.559 2.7168 860.857 2.83431 861.121 3.07369L861.793 2.33301Z" fill="url(#paint1_linear_853_3093)" mask="url(#path-3-outside-2_853_3093)"/>
</g>
<defs>
<clipPath id="bgblur_0_853_3093_clip_path" transform="translate(20 19.2832)"><path d="M860.287 1.7168C860.848 1.7168 861.377 1.95608 861.793 2.33301L945.466 78.2314C947.306 79.9002 949.701 80.8242 952.185 80.8242H1751C1762.05 80.8242 1771 89.7785 1771 100.824V823.862C1771 834.908 1762.05 843.862 1751 843.862H21C9.95431 843.862 1 834.908 1 823.862V21.7168C1 10.6711 9.95431 1.7168 21 1.7168H860.287Z"/>
</clipPath><linearGradient id="paint0_linear_853_3093" x1="24.3663" y1="24.1518" x2="1752.43" y2="36.2049" gradientUnits="userSpaceOnUse">
<stop stopColor="white"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
<linearGradient id="paint1_linear_853_3093" x1="679.118" y1="248.036" x2="543.228" y2="-165.208" gradientUnits="userSpaceOnUse">
<stop stopColor="#FE6E00" stopOpacity="0"/>
<stop offset="1" stopColor="#FE6E00"/>
</linearGradient>
</defs>
</svg> 
 </div>
          <div className="py-[8%] px-[8vw] z-10 flex items-start justify-between left-0 w-full  flex-col h-full ">
            <div className="h-[90%] relative gap-[10vw]  w-full flex  items-center justify-between">
              <div className="w-[50%]  z-[100]  flex flex-col h-[90%] items-start justify-between">
                <div className="flex justify-between items-center">
                  <div className="w-[20vw] h-auto fadeupanim">
                    <svg
                      width="253"
                      height="60"
                      viewBox="0 0 253 60"
                      className="w-full h-full"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.0507812 0.0696106L30.9446 17.8818L62.2195 0.129209L62.2195 41.9392L53.3014 46.9927L53.3014 15.446L30.91 28.1561L8.96884 15.5056L8.96884 46.9927L0.0507794 41.9392L0.0507812 0.0696106Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeWidth="2"
                        d="M11.6279 37.8125L30.9201 48.9829L50.6413 37.6597L50.6413 48.2483L30.9201 59.5265L11.6279 48.3815L11.6279 37.8125Z"
                        fill="#FE6E00"
                      />
                      <path
                        d="M111.768 32.7118L107.268 32.7118L107.268 18.0163L101.352 32.7118L99.4007 32.7118L93.4848 18.0163L93.4848 32.7118L89.0163 32.7118L89.0163 11.7227L95.2784 11.7227L100.376 24.4043L105.474 11.7227L111.768 11.7227L111.768 32.7118ZM125.88 33.0894C119.555 33.0894 114.929 28.5581 114.929 22.233C114.929 15.908 119.555 11.3766 125.88 11.3766C132.237 11.3766 136.862 15.908 136.862 22.233C136.862 28.5581 132.237 33.0894 125.88 33.0894ZM125.88 29.1245C129.751 29.1245 132.268 26.135 132.268 22.233C132.268 18.2995 129.751 15.3415 125.88 15.3415C122.009 15.3415 119.523 18.2995 119.523 22.233C119.523 26.135 122.009 29.1245 125.88 29.1245ZM158.784 32.7118L154.473 32.7118L144.466 19.0233L144.466 32.7118L139.998 32.7118L139.998 11.7227L144.592 11.7227L154.316 24.9078L154.316 11.7227L158.784 11.7227L158.784 32.7118ZM167.391 32.7118L162.923 32.7118L162.923 11.7227L167.391 11.7227L167.391 32.7118ZM186.411 32.7118L171.558 32.7118L171.558 11.7227L186.411 11.7227L186.411 15.6562L176.027 15.6562L176.027 20.0932L186.191 20.0932L186.191 24.0267L176.027 24.0267L176.027 28.7783L186.411 28.7783L186.411 32.7118Z"
                        fill="white"
                      />
                      <path
                        d="M202.649 32.7118L190.282 32.7118L190.282 11.7227L192.894 11.7227L192.894 30.3832L202.649 30.3832L202.649 32.7118ZM208.935 32.7118L206.323 32.7118L206.323 11.7227L208.935 11.7227L208.935 32.7118ZM231.222 32.7118L228.705 32.7118L216.464 15.9709L216.464 32.7118L213.852 32.7118L213.852 11.7227L216.527 11.7227L228.61 28.1175L228.61 11.7227L231.222 11.7227L231.222 32.7118ZM252.054 32.7118L248.813 32.7118L240.852 23.2715L238.743 25.663L238.743 32.7118L236.131 32.7118L236.131 11.7227L238.743 11.7227L238.743 22.5792L248.026 11.7227L251.299 11.7227L242.551 21.6981L252.054 32.7118Z"
                        fill="#FE6E00"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex  z-[100]  gap-20 items-start">
                  <div>
                    {links.map((item, index) => (
                      <Link href={item.link} key={index}>
                        <div
                          className="text-white mb-[1vw] text-[1.05vw] font-medium"
                        >
                          <div className="flex items-center gap-[.5vw] group justify-start">
                            <div
                              style={{
                                animation: "pulse .5s infinite",
                              }}
                              className="w-[.3vw] h-[0vw] group-hover:h-[1vw] group-hover:bg-orange-500  transition-all duration-200"
                            ></div>
                            <div className="flex flex-col cursor-pointer relative items-start justify-start overflow-hidden  w-[7vw] ">
                              <span className="text-[#A8A8A8] uppercase text-[1vw] ">
                                <DecryptedText text={item.name} />
                              </span>
                            </div>

                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div>
                    {links2.map((item, index) => (
                      <Link href={item.link} key={index}>
                        <div

                          className="text-white  mb-[1vw] text-sm font-medium"
                        >
                          <div className="flex items-center gap-[.5vw] group justify-start">
                            <div
                              style={{
                                animation: "pulse .5s infinite",
                              }}
                              className="w-[.3vw] h-[0vw] group-hover:h-[1vw] group-hover:bg-orange-500  transition-all duration-200"
                            ></div>
                            <div className="flex flex-col cursor-pointer relative items-start justify-center overflow-hidden min-w-[8vw] ">
                              <span className="text-[#A8A8A8] uppercase text-[1vw]">
                                <DecryptedText text={item.name} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[45%]  z-[100]   text-[#A8A8A8] pb-[5vw] pt-[3vw] flex flex-col h-[80%] items-start justify-between gap-0">
                <Copy>
                <p className=" text-[1.05vw] w-full">
                  Integrate the Moneylink Super SDK and start delivering
                  seamless, scalable banking services within your mobile app —
                  faster than ever. Let&apos;s build the future of finance together.
                </p>
                </Copy>
                <div className="w-full flex  items-start justify-center flex-col">
                  <a href="mailto:info@monielink.io">
                    <Copy><p className="text-[3.125vw] font-display">info@monielink.io</p> </Copy></a>
                  <div className="pt-2 flex  items-start gap-2 fadeupanim">
                    {socials.map((item, index) => (
                      <SocialMediaBtn
                        className=""
                        key={index}
                        href={item.href}
                      >
                        {item.icon}
                      </SocialMediaBtn>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  z-[100]  h-[10%] flex items-end justify-between text-[#A8A8A8] text-[1.05vw]">
              <div className="w-[20vw]">
              <DecryptedText text={"Copyright © Monielink 2025"} />
              </div>
              <Link href={"https://weareenigma.com/"}>
              <div className="w-[11vw]">
                <DecryptedText text={"By : Enigma Digital"}/>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const links = [
  {
    name: "Home",
    link: "#"
  },
  {
    name: "About Us",
    link: "#"
  },
  {
    name: "Solutions",
    link: "#"
  },
  {
    name: "Products",
    link: "#"
  },
  {
    name: "Resources",
    link: "#"
  },
  {
    name: "Contact",
    link: "#"
  }
]
const links2 = [
  {
    name: "LEGAL",
    link: "/"
  },
  {
    name: "TERMS & CONDITIONS",
    link: "/"
  },
  {
    name: "PRIVACY POLICY",
    link: "/"
  },
  {
    name: "INVESTOR PRIVACY NOTICE",
    link: "/"
  },
  {
    name: "COOKIES POLICY",
    link: "/"
  }
]
const socials = [
  {
    icon: <FacebookIcon />,
    link: "#"
  },
  {
    icon: <LinkedinIcon />,
    link: "#"
  },
  {
    icon: <InstagramIcon />,
    link: "#"
  },
  {
    icon: <TwitterIcon />,
    link: "#"
  }
]