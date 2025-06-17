"use client";
import Image from "next/image";
import BackgroundLine from "../BackgroundLine";
import Link from "next/link";
import DecryptedText from "../DecryptedText";

const links = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About Us",
    link: "/"
  },
  {
    name: "Solutions",
    link: "/"
  },
  {
    name: "Products",
    link: "/"
  },
  {
    name: "Resources",
    link: "/"
  },
  {
    name: "Contact",
    link: "/"
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
    img: "/assets/icons/fb.svg",
    link: "/"
  },
  {
    img: "/assets/icons/ig.svg",
    link: "/"
  },
  {
    img: "/assets/icons/x.svg",
    link: "/"
  },
  {
    img: "/assets/icons/ld.svg",
    link: "/"
  }
]

export default function Footer() {
  return (
    <div className="relative" id="footer">
      <BackgroundLine />
      <footer
        className="h-screen absolute inset-0 z-[40] flex items-center justify-center w-full "
        id="footer"
      >
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="w-screen h-screen absolute top-0 left-0">
            <svg className="w-full h-full" width="1934" height="1006" viewBox="0 0 1934 1006" fill="none" xmlns="http://www.w3.org/2000/svg">
              <foreignObject x="0.400002" y="0.400002" width="1933.2" height="1005.35">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter: 'blur(10px)', clipPath: 'url(#bgblur_0_3134_158_clip_path)', height:'100%', width:'100%'}}></div>
              </foreignObject>
              <g filter="url(#filter0_d_3134_158)" data-figma-bg-blur-radius="20">
                <mask id="path-1-outside-1_3134_158" maskUnits="userSpaceOnUse" x="81" y="79" width="1772" height="845" fill="black">
                  <rect fill="white" x="81" y="79" width="1772" height="845" />
                  <path d="M941.287 80C941.848 80 942.377 80.2393 942.793 80.6162V80.6162L1026.47 156.515C1028.31 158.183 1030.7 159.107 1033.18 159.107H1832C1843.05 159.107 1852 168.062 1852 179.107V902.146C1852 913.191 1843.05 922.145 1832 922.146H102C90.9543 922.146 82 913.191 82 902.146V100C82 88.9543 90.9543 80 102 80H941.287Z" />
                </mask>
                <path d="M941.287 80C941.848 80 942.377 80.2393 942.793 80.6162V80.6162L1026.47 156.515C1028.31 158.183 1030.7 159.107 1033.18 159.107H1832C1843.05 159.107 1852 168.062 1852 179.107V902.146C1852 913.191 1843.05 922.145 1832 922.146H102C90.9543 922.146 82 913.191 82 902.146V100C82 88.9543 90.9543 80 102 80H941.287Z" fill="url(#paint0_linear_3134_158)" fillOpacity="0.02" shapeRendering="crispEdges" />
                <path d="M1026.47 156.515L1025.79 157.255L1025.79 157.255L1026.47 156.515ZM1852 902.146L1853 902.146V902.146H1852ZM1832 922.146L1832 923.146L1832 923.146L1832 922.146ZM82 902.146L81 902.146V902.146L82 902.146ZM82 100L81 100V100H82ZM102 80L102 79H102L102 80ZM942.793 80.6162L942.121 81.3569L1025.79 157.255L1026.47 156.515L1027.14 155.774L943.465 79.8755L942.793 80.6162ZM1026.47 156.515L1025.79 157.255C1027.82 159.091 1030.45 160.107 1033.18 160.107V159.107V158.107C1030.95 158.107 1028.79 157.276 1027.14 155.774L1026.47 156.515ZM1033.18 159.107V160.107H1832V159.107V158.107H1033.18V159.107ZM1852 179.107H1851V902.146H1852H1853V179.107H1852ZM1852 902.146L1851 902.146C1851 912.639 1842.49 921.145 1832 921.146L1832 922.146L1832 923.146C1843.6 923.145 1853 913.743 1853 902.146L1852 902.146ZM1832 922.146V921.146H102V922.146V923.146H1832V922.146ZM102 922.146V921.146C91.5066 921.146 83 912.639 83 902.146L82 902.146L81 902.146C81 913.743 90.402 923.146 102 923.146V922.146ZM82 902.146H83V100H82H81V902.146H82ZM82 100L83 100C83 89.5066 91.5066 81 102 81L102 80L102 79C90.402 79 81 88.402 81 100L82 100ZM102 80V81H941.287V80V79H102V80ZM1832 159.107V160.107C1842.49 160.107 1851 168.614 1851 179.107H1852H1853C1853 167.509 1843.6 158.107 1832 158.107V159.107ZM942.793 80.6162L943.465 79.8755C942.898 79.3611 942.137 79 941.287 79V80V81C941.559 81 941.857 81.1175 942.121 81.3569L942.793 80.6162Z" fill="#282828" mask="url(#path-1-outside-1_3134_158)" />
                <path d="M1026.47 156.515L1025.79 157.255L1025.79 157.255L1026.47 156.515ZM1852 902.146L1853 902.146V902.146H1852ZM1832 922.146L1832 923.146L1832 923.146L1832 922.146ZM82 902.146L81 902.146V902.146L82 902.146ZM82 100L81 100V100H82ZM102 80L102 79H102L102 80ZM942.793 80.6162L942.121 81.3569L1025.79 157.255L1026.47 156.515L1027.14 155.774L943.465 79.8755L942.793 80.6162ZM1026.47 156.515L1025.79 157.255C1027.82 159.091 1030.45 160.107 1033.18 160.107V159.107V158.107C1030.95 158.107 1028.79 157.276 1027.14 155.774L1026.47 156.515ZM1033.18 159.107V160.107H1832V159.107V158.107H1033.18V159.107ZM1852 179.107H1851V902.146H1852H1853V179.107H1852ZM1852 902.146L1851 902.146C1851 912.639 1842.49 921.145 1832 921.146L1832 922.146L1832 923.146C1843.6 923.145 1853 913.743 1853 902.146L1852 902.146ZM1832 922.146V921.146H102V922.146V923.146H1832V922.146ZM102 922.146V921.146C91.5066 921.146 83 912.639 83 902.146L82 902.146L81 902.146C81 913.743 90.402 923.146 102 923.146V922.146ZM82 902.146H83V100H82H81V902.146H82ZM82 100L83 100C83 89.5066 91.5066 81 102 81L102 80L102 79C90.402 79 81 88.402 81 100L82 100ZM102 80V81H941.287V80V79H102V80ZM1832 159.107V160.107C1842.49 160.107 1851 168.614 1851 179.107H1852H1853C1853 167.509 1843.6 158.107 1832 158.107V159.107ZM942.793 80.6162L943.465 79.8755C942.898 79.3611 942.137 79 941.287 79V80V81C941.559 81 941.857 81.1175 942.121 81.3569L942.793 80.6162Z" fill="url(#paint1_linear_3134_158)" mask="url(#path-1-outside-1_3134_158)" />
              </g>
              <defs>
                <filter id="filter0_d_3134_158" x="0.400002" y="0.400002" width="1933.2" height="1005.35" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3134_158" />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="39.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.316667 0 0 0 0 0 0 0 0 0.19 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3134_158" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3134_158" result="shape" />
                </filter>
                <clipPath id="bgblur_0_3134_158_clip_path" transform="translate(-0.400002 -0.400002)">
                  <path d="M941.287 80C941.848 80 942.377 80.2393 942.793 80.6162V80.6162L1026.47 156.515C1028.31 158.183 1030.7 159.107 1033.18 159.107H1832C1843.05 159.107 1852 168.062 1852 179.107V902.146C1852 913.191 1843.05 922.145 1832 922.146H102C90.9543 922.146 82 913.191 82 902.146V100C82 88.9543 90.9543 80 102 80H941.287Z" />
                </clipPath>
                <linearGradient id="paint0_linear_3134_158" x1="105.366" y1="102.435" x2="1833.43" y2="114.488" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint1_linear_3134_158" x1="760.118" y1="326.319" x2="624.228" y2="-86.9247" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FE6E00" stopOpacity="0" />
                  <stop offset="1" stopColor="#FE6E00" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="py-[8%]  px-[12vw] z-10 flex items-start justify-between left-0 w-full  flex-col h-full ">
            <div className="h-[90%] relative gap-[10vw]  w-full flex  items-center justify-between">
              <div className="w-[50%]  z-[100]  flex flex-col h-[90%] items-start justify-between">
                <div className="flex justify-between items-center">
                  <div className="w-[20vw] h-auto">
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
                            <div className="flex flex-col cursor-pointer relative items-center justify-center overflow-hidden">
                              <span className="text-[#A8A8A8] uppercase text-[1vw]">
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
                            <div className="flex flex-col cursor-pointer relative items-center justify-center overflow-hidden">
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
              <div className="w-[45%]  z-[100]   text-[#A8A8A8] py-[5vw] flex flex-col h-[90%] items-end justify-between gap-16">
                <p className=" text-[1.05vw] w-full">
                  Integrate the Moneylink Super SDK and start delivering
                  seamless, scalable banking services within your mobile app —
                  faster than ever. Let&apos;s build the future of finance together.
                </p>
                <div className="w-full flex  items-start justify-center flex-col">
                  <p className="text-[3.125vw] font-display">info@monielink.Io</p>
                  <div className="pt-2 flex  items-start gap-2">
                    {socials.map((item, index) => (
                      <Link href={item.link}
                        key={index}
                        style={{
                          clipPath:
                            "polygon(25% 0%, 100% 0, 100% 75%, 75% 100%, 0 100%, 0 20%)",
                        }}
                        className="bg-background w-[4vw] h-[4vw]  flex items-center justify-center"
                      >
                        <Image
                          src={item.img}
                          width={5}
                          height={5}
                          alt="socialIcons"
                          className="w-[25%] h-[25%] object-contain"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  z-[100]  h-[10%] flex items-end justify-between text-[#A8A8A8] text-[1.05vw]">
              <p>Copyright © Monielink 2025</p>
              <p>By : Enigma Digital</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
