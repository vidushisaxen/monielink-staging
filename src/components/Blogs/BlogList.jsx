import Image from "next/image";
import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import Link from "next/link";
import ArrowButton from "../Buttons/ArrowButton";
import Copy from "../Animations/Copy";

const BlogList = () => {
  return (
    <>
      <section
        data-theme="white"
        className="w-screen h-fit py-[7%] bg-white px-[5vw] max-sm:py-[15%] max-sm:px-[5.5vw]"
        id="blog-listing"
      >
        <div className="flex flex-col  gap-[5vw] text-black-1 max-md:gap-[10vw] max-sm:gap-[10vw]">
          <Copy>
            <h2 className="w-[40%] max-md:w-[60%] text-head-100 font-display  flex flex-col max-sm:w-[80%] ">
              <span>Explore</span> <span>expert insights</span>{" "}
            </h2>
          </Copy>
          <div className="w-full flex justify-between flex-wrap gap-y-[4vw] max-sm:flex-col max-sm:gap-y-[10vw]">
            <div className="w-[66%] fadeupanim max-md:w-[100%] h-fit  flex justify-between relative text-white max-sm:w-full max-sm:h-[73vh] max-sm:pb-[5vw]">
              <div className="w-full  flex justify-between max-sm:hidden">
                <svg
                  width="1110"
                  height="550"
                  viewBox="0 0 1110 701"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-figma-bg-blur-radius="20">
                    <mask
                      id="path-1-outside-1_376_152068"
                      maskUnits="userSpaceOnUse"
                      x="-8.74227e-08"
                      y="-9.69519e-05"
                      width="1110"
                      height="701"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="-8.74227e-08"
                        y="-9.69519e-05"
                        width="1110"
                        height="701"
                      />
                      <path d="M21 700C9.95435 700 1 691.046 1 680L1.00006 20.9999C1.00018 9.95425 9.95441 0.999904 21.0001 0.999905L1089 0.999998C1100.05 0.999999 1109 9.95435 1109 21L1109 613.285C1109 618.771 1106.75 624.016 1102.77 627.793L1032.46 694.508C1028.75 698.034 1023.82 700 1018.69 700L21 700Z" />
                    </mask>
                    <path
                      d="M21 700C9.95435 700 1 691.046 1 680L1.00006 20.9999C1.00018 9.95425 9.95441 0.999904 21.0001 0.999905L1089 0.999998C1100.05 0.999999 1109 9.95435 1109 21L1109 613.285C1109 618.771 1106.75 624.016 1102.77 627.793L1032.46 694.508C1028.75 698.034 1023.82 700 1018.69 700L21 700Z"
                      fill="#FE6E00"
                    />
                    <path
                      d="M1 680L2 680L1 680ZM1.00006 20.9999L5.93601e-05 20.9999L1.00006 20.9999ZM1089 0.999998L1089 -1.74846e-06L1089 0.999998ZM1109 21L1110 21L1109 21ZM1032.46 694.508L1033.15 695.233L1032.46 694.508ZM21 700L21 699C10.5066 699 2 690.493 2 680L1 680L1.74846e-06 680C7.34528e-07 691.598 9.40198 701 21 701L21 700ZM1 680L2 680L2.00006 20.9999L1.00006 20.9999L5.93601e-05 20.9999L1.74846e-06 680L1 680ZM1.00006 20.9999L2.00006 20.9999C2.00018 10.5066 10.5067 1.9999 21.0001 1.9999L21.0001 0.999905L21.0001 -9.5116e-05C9.40216 -9.61299e-05 0.000182444 9.402 5.93601e-05 20.9999L1.00006 20.9999ZM21.0001 0.999905L21.0001 1.9999L1089 2L1089 0.999998L1089 -1.74846e-06L21.0001 -9.5116e-05L21.0001 0.999905ZM1089 0.999998L1089 2C1099.49 2 1108 10.5067 1108 21L1109 21L1110 21C1110 9.4021 1100.6 -7.34532e-07 1089 -1.74846e-06L1089 0.999998ZM1109 21L1108 21L1108 613.285L1109 613.285L1110 613.285L1110 21L1109 21ZM1102.77 627.793L1102.08 627.067L1031.77 693.782L1032.46 694.508L1033.15 695.233L1103.46 628.518L1102.77 627.793ZM1018.69 700L1018.69 699L21 699L21 700L21 701L1018.69 701L1018.69 700ZM1032.46 694.508L1031.77 693.782C1028.24 697.132 1023.56 699 1018.69 699L1018.69 700L1018.69 701C1024.07 701 1029.25 698.936 1033.15 695.233L1032.46 694.508ZM1109 613.285L1108 613.285C1108 618.497 1105.86 623.48 1102.08 627.067L1102.77 627.793L1103.46 628.518C1107.63 624.553 1110 619.045 1110 613.285L1109 613.285Z"
                      fill="#D8D8D8"
                      mask="url(#path-1-outside-1_376_152068)"
                    />
                  </g>
                  <defs>
                    <clipPath
                      id="bgblur_0_376_152068_clip_path"
                      transform="translate(20 20.0001)"
                    >
                      <path d="M21 700C9.95435 700 1 691.046 1 680L1.00006 20.9999C1.00018 9.95425 9.95441 0.999904 21.0001 0.999905L1089 0.999998C1100.05 0.999999 1109 9.95435 1109 21L1109 613.285C1109 618.771 1106.75 624.016 1102.77 627.793L1032.46 694.508C1028.75 698.034 1023.82 700 1018.69 700L21 700Z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="hidden max-sm:block w-[105%] h-[190vw]">
                <svg
                  width="335"
                  height="459"
                  className="w-full h-full"
                  viewBox="0 0 335 459"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <g data-figma-bg-blur-radius="20">
                    <mask
                      id="path-1-outside-1_754_35752"
                      maskUnits="userSpaceOnUse"
                      x="-0.0493165"
                      y="-0.295561"
                      width="335"
                      height="459"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="-0.0493165"
                        y="-0.295561"
                        width="335"
                        height="459"
                      />
                      <path d="M13.4614 457.704C6.64395 457.704 1.11768 452.177 1.11768 445.36L1.11771 13.6331C1.11796 6.81586 6.64414 1.28958 13.4615 1.2894L321.606 1.28943C328.423 1.28943 333.95 6.81573 333.951 13.6332L333.951 395.32C333.951 400.806 331.697 406.051 327.717 409.827L283.051 452.212C279.335 455.739 274.407 457.704 269.284 457.704L13.4614 457.704Z" />
                    </mask>
                    <path
                      d="M13.4614 457.704C6.64395 457.704 1.11768 452.177 1.11768 445.36L1.11771 13.6331C1.11796 6.81586 6.64414 1.28958 13.4615 1.2894L321.606 1.28943C328.423 1.28943 333.95 6.81573 333.951 13.6332L333.951 395.32C333.951 400.806 331.697 406.051 327.717 409.827L283.051 452.212C279.335 455.739 274.407 457.704 269.284 457.704L13.4614 457.704Z"
                      fill="#FE6E00"
                    />
                    <path
                      d="M13.4614 457.704L13.4614 458.704L13.4614 458.704L13.4614 457.704ZM1.11768 445.36L0.117677 445.36L1.11768 445.36ZM1.11771 13.6331L0.117715 13.6331L0.117715 13.6331L1.11771 13.6331ZM13.4615 1.2894L13.4615 0.289401L13.4614 0.289401L13.4615 1.2894ZM333.951 13.6332L334.951 13.6332L334.951 13.6331L333.951 13.6332ZM283.051 452.212L283.739 452.938L283.051 452.212ZM327.717 409.827L327.029 409.102L327.717 409.827ZM13.4614 457.704L13.4615 456.704C7.19632 456.704 2.11768 451.625 2.11768 445.36L1.11768 445.36L0.117677 445.36C0.117676 452.729 6.09158 458.704 13.4614 458.704L13.4614 457.704ZM1.11768 445.36L2.11768 445.36L2.11771 13.6331L1.11771 13.6331L0.117715 13.6331L0.117677 445.36L1.11768 445.36ZM1.11771 13.6331L2.11771 13.6332C2.11796 7.36814 7.19645 2.28958 13.4615 2.2894L13.4615 1.2894L13.4614 0.289401C6.09187 0.289614 0.11799 6.26355 0.117715 13.6331L1.11771 13.6331ZM13.4615 1.2894L13.4615 2.2894L321.606 2.28943L321.606 1.28943L321.606 0.289428L13.4615 0.289401L13.4615 1.2894ZM321.606 1.28943L321.606 2.28943C327.871 2.28943 332.95 7.3681 332.951 13.6332L333.951 13.6332L334.951 13.6331C334.95 6.2634 328.976 0.289428 321.606 0.289428L321.606 1.28943ZM333.951 13.6332L332.951 13.6332L332.951 395.32L333.951 395.32L334.951 395.32L334.951 13.6332L333.951 13.6332ZM327.717 409.827L327.029 409.102L282.363 451.487L283.051 452.212L283.739 452.938L328.406 410.553L327.717 409.827ZM269.284 457.704L269.284 456.704L13.4614 456.704L13.4614 457.704L13.4614 458.704L269.284 458.704L269.284 457.704ZM283.051 452.212L282.363 451.487C278.832 454.837 274.151 456.704 269.284 456.704L269.284 457.704L269.284 458.704C274.663 458.704 279.837 456.64 283.739 452.938L283.051 452.212ZM333.951 395.32L332.951 395.32C332.951 400.531 330.81 405.514 327.029 409.102L327.717 409.827L328.406 410.553C332.584 406.588 334.951 401.08 334.951 395.32L333.951 395.32Z"
                      fill="#D8D8D8"
                      mask="url(#path-1-outside-1_754_35752)"
                    />
                  </g>
                  <defs>
                    <clipPath
                      id="bgblur_0_754_35752_clip_path"
                      transform="translate(19.8823 19.7106)"
                    >
                      <path d="M13.4614 457.704C6.64395 457.704 1.11768 452.177 1.11768 445.36L1.11771 13.6331C1.11796 6.81586 6.64414 1.28958 13.4615 1.2894L321.606 1.28943C328.423 1.28943 333.95 6.81573 333.951 13.6332L333.951 395.32C333.951 400.806 331.697 406.051 327.717 409.827L283.051 452.212C279.335 455.739 274.407 457.704 269.284 457.704L13.4614 457.704Z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full  h-fit max-md:top-[2.5%] max-sm:top-[3%] group/card ">
                <div className="w-full h-full px-[2.5vw]  pt-[3vw] flex flex-col gap-[2vw] max-sm:px-0 max-sm:pt-0 max-md:pt-[6vw] max-md:gap-[3vw] max-sm:gap-[7vw]">
                  <div className="flex justify-between max-sm:flex-col max-sm:gap-[6vw]">
                    <div className="flex flex-col gap-[1.5vw] w-[40%] max-md:w-[50%] max-sm:order-1 max-sm:w-full max-sm:px-[4vw] max-sm:gap-[4vw]">
                      <p className="uppercase max-sm:text-head-50">featured</p>
                      <h3 className="text-head-60 font-display capitalize max-sm:text-content-30">
                        Your passport to the web3 economy
                      </h3>
                    </div>
                    <div className="w-[55%] max-md:w-[50%] h-[40%] rounded-[1.2vw] overflow-hidden max-md:rounded-[3vw] max-sm:rounded-[4vw] max-sm:w-full">
                      <Image
                        src={"/assets/images/blogs/blog-img-1.png"}
                        alt="featured-blog"
                        width={700}
                        height={400}
                        className="w-full h-full object-cover scale-[1.1] group-hover/card:scale-100 duration-300 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="flex text-content-20 flex-col gap-[3vw] max-sm:px-[4vw] max-sm:gap-[5vw]">
                    <p>
                      If you&apos;ve read this far and you&apos;re wondering what “web3”
                      is exactly, this is one of those need-to-knows, and it&apos;s
                      pretty simple. We&apos;ll explain more below, but in short web3
                      is the next era of the internet in which blockchain
                      technology
                    </p>
                    <SecondaryButton href={"#"} text={"Read More"} className="max-sm:hidden max-md:hidden"/>
                    <Link href={"#"} className="hidden max-sm:flex max-md:flex round relative ml-[-1vw] items-center justify-center min-w-[9vw] h-[4.3vw] w-fit max-sm:h-[17vw] max-sm:min-w-[34vw] max-md:min-w-[16vw]">
                        <div className="absolute inset-0 z-10">
                          <div className="w-[80%] mx-auto h-full text-white relative z-10 flex items-center gap-3 justify-center ">
                            <span className="text-content-18">Read More</span>
                            <div className="rotate-180 text-white flex items-center justify-center gap-0 w-[1vw] h-full max-sm:w-[3vw]">
                              <svg
                                className="arrow primera next"
                                width="8"
                                height="15"
                                viewBox="0 0 8 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <svg
                                className="arrow segunda next"
                                width="8"
                                height="15"
                                viewBox="0 0 8 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
            {blogContent.map((blog, index) => (
              <div key={index} className={`w-[32%] fadeupanim max-md:w-[47%] h-fit relative group max-sm:w-full ${index == 0 ? "max-sm:mt-[4vw]" : ""}`}>
                <div className="w-full h-fit">
                  <svg
                    width="532"
                    height="702"
                    className="w-full h-full"
                    viewBox="0 0 532 702"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-figma-bg-blur-radius="20">
                      <mask
                        id="path-1-outside-1_269_48745"
                        maskUnits="userSpaceOnUse"
                        x="-8.74228e-08"
                        y="0.292922"
                        width="532"
                        height="701"
                        fill="black"
                      >
                        <rect
                          fill="white"
                          x="-8.74228e-08"
                          y="0.292922"
                          width="532"
                          height="701"
                        />
                        <path d="M21 700.293C9.95441 700.293 1.00018 691.338 1 680.293L1.00006 21.2929C1.00006 10.2472 9.95435 1.29292 21.0001 1.29292L511 1.29297C522.046 1.29297 531 10.2473 531 21.293L531 613.285C531 618.771 528.746 624.016 524.767 627.793L454.152 694.801C450.436 698.327 445.508 700.293 440.385 700.293L21 700.293Z" />
                      </mask>
                      <path
                        d="M21 700.293C9.95441 700.293 1.00018 691.338 1 680.293L1.00006 21.2929C1.00006 10.2472 9.95435 1.29292 21.0001 1.29292L511 1.29297C522.046 1.29297 531 10.2473 531 21.293L531 613.285C531 618.771 528.746 624.016 524.767 627.793L454.152 694.801C450.436 698.327 445.508 700.293 440.385 700.293L21 700.293Z"
                        fill="url(#paint0_linear_269_48745)"
                        fillOpacity="0.02"
                      />
                      <path
                        d="M1 680.293L1.74846e-06 680.293L1.74845e-06 680.293L1 680.293ZM454.152 694.801L453.464 694.075L454.152 694.801ZM21 700.293L21 699.293C10.5067 699.293 2.00018 690.786 2 680.293L1 680.293L1.74845e-06 680.293C0.00018384 691.891 9.4021 701.293 21 701.293L21 700.293ZM1 680.293L2 680.293L2.00006 21.2929L1.00006 21.2929L5.93601e-05 21.2929L1.74846e-06 680.293L1 680.293ZM1.00006 21.2929L2.00006 21.2929C2.00006 10.7995 10.5067 2.29292 21.0001 2.29292L21.0001 1.29292L21.0001 0.292924C9.4021 0.292923 6.0374e-05 9.69496 5.93601e-05 21.2929L1.00006 21.2929ZM21.0001 1.29292L21.0001 2.29292L511 2.29297L511 1.29297L511 0.292967L21.0001 0.292924L21.0001 1.29292ZM511 1.29297L511 2.29297C521.493 2.29297 530 10.7996 530 21.293L531 21.293L532 21.293C532 9.69501 522.598 0.292968 511 0.292967L511 1.29297ZM531 21.293L530 21.293L530 613.285L531 613.285L532 613.285L532 21.293L531 21.293ZM524.767 627.793L524.078 627.067L453.464 694.075L454.152 694.801L454.84 695.526L525.455 628.518L524.767 627.793ZM440.385 700.293L440.385 699.293L21 699.293L21 700.293L21 701.293L440.385 701.293L440.385 700.293ZM454.152 694.801L453.464 694.075C449.933 697.425 445.252 699.293 440.385 699.293L440.385 700.293L440.385 701.293C445.764 701.293 450.938 699.229 454.84 695.526L454.152 694.801ZM531 613.285L530 613.285C530 618.497 527.859 623.48 524.078 627.067L524.767 627.793L525.455 628.518C529.634 624.553 532 619.045 532 613.285L531 613.285Z"
                        fill="#D8D8D8"
                        mask="url(#path-1-outside-1_269_48745)"
                      />
                    </g>
                    <defs>
                      <clipPath
                        id="bgblur_0_269_48745_clip_path"
                        transform="translate(20 19.707)"
                      >
                        <path d="M21 700.293C9.95441 700.293 1.00018 691.338 1 680.293L1.00006 21.2929C1.00006 10.2472 9.95435 1.29292 21.0001 1.29292L511 1.29297C522.046 1.29297 531 10.2473 531 21.293L531 613.285C531 618.771 528.746 624.016 524.767 627.793L454.152 694.801C450.436 698.327 445.508 700.293 440.385 700.293L21 700.293Z" />
                      </clipPath>
                      <linearGradient
                        id="paint0_linear_269_48745"
                        x1="531"
                        y1="657.607"
                        x2="-0.497779"
                        y2="656.352"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute top-0 left-0 w-full">
                  <div className="w-full h-full flex flex-col gap-[2vw] max-sm:gap-[6vw] ">
                    <div className="w-full rounded-[1.2vw] overflow-hidden h-[30%] max-sm:rounded-[4vw]">
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        width={500}
                        height={400}
                        className="w-full h-full scale-[1.1] group-hover:scale-100 duration-500 ease-in-out"
                      />
                    </div>
                    <div className="px-[2vw] flex flex-col gap-[3vw] max-sm:px-[4vw] max-sm:gap-[8vw]">
                      <h4 className="text-content-30 font-display capitalize ">
                        {blog.title}
                      </h4>
                      <p className="text-content-20">{blog.description}</p>

                      <Link href={blog.link} className="round relative ml-[-1vw] flex items-center justify-center min-w-[9vw] h-[4.3vw] w-fit max-sm:h-[17vw] max-sm:min-w-[34vw] max-md:min-w-[16vw]">
                        <div className="absolute inset-0 z-10">
                          <div className="w-[80%] mx-auto h-full text-black relative z-10 flex items-center gap-3 justify-center">
                            <span className="text-content-18">Read More</span>
                            <div className="rotate-180 text-black flex items-center justify-center gap-0 w-[1vw] h-full max-sm:w-[3vw]">
                              <svg
                                className="arrow primera next"
                                width="8"
                                height="15"
                                viewBox="0 0 8 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <svg
                                className="arrow segunda next"
                                width="8"
                                height="15"
                                viewBox="0 0 8 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-5 max-sm:pt-[0vw] max-sm:mb-[10vw]">
            <ArrowButton
              href={"#"}
              arrowColor={"#050505"}
              borderColor={"#050505"}
              hoverColor={"bg-[#050505]/20"}
              rotate={"-rotate-180"}
            />
            <ArrowButton
              href={"#"}
              arrowColor={"#050505"}
              borderColor={"#050505"}
              hoverColor={"bg-[#050505]/20"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;

const blogContent = [
  {
    img: "/assets/images/blogs/blog-img-2.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-3.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-4.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-5.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-6.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },

  {
    img: "/assets/images/blogs/blog-img-7.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-8.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-9.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-10.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-2.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
];
