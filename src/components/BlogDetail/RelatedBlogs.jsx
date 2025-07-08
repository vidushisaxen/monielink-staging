import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import WhiteButton from '../Buttons/WhiteButton'
import Image from 'next/image'
import Link from 'next/link'
import Copy from '../Animations/Copy'

const RelatedBlogs = () => {

  
  return (
   <section data-theme="white" className='w-screen h-fit pb-[7%] max-md:pb-[15%] px-[5vw] bg-white text-black-1 max-sm:px-[5.5vw] max-sm:pb-[15%]' id='related-blogs'>
    <div className='w-full flex flex-col gap-[6vw] max-sm:gap-[10vw]'>
        <div className='w-full flex justify-between max-md:pt-[5vw] items-end'>
            <Copy>
            <h2 className='text-head-100 font-display'>View More Blogs</h2>

            </Copy>
             <div className='max-sm:hidden fadeupanim'><WhiteButton href={"/"} text={"View All"}/></div>
        </div>
     <div className='w-full flex justify-between max-sm:flex-col max-sm:gap-[10vw]'>
         {blogContent.map((blog, index) => (
              <div key={index} className={`w-[32%] max-md:w-[47%] max-md:last:hidden max-sm:last:block h-fit relative group max-sm:w-full fadeupanim ${index==0?"max-sm:mt-[4vw]":""}`}>
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
                        alt=""
                        width={500}
                        height={400}
                        className="w-full h-full scale-[1.1] group-hover:scale-100 duration-500 ease-in-out"
                      />
                    </div>
                    <div className="px-[2vw] flex flex-col gap-[3vw] max-sm:px-[4vw] max-sm:gap-[8vw]">
                      <h4 className="text-content-30 font-display capitalize ">
                        {blog.title}
                      </h4>
                      <p>{blog.description}</p>
                      <Link className="w-fit group" href={blog.link}>
                        <div className="w-fit mx-auto h-full text-black-1 relative z-10 flex items-center gap-5 justify-center">
                          <span className="text-content-18">Read More</span>
                          <div className="rotate-180 text-black-1 flex items-center justify-center gap-0 w-fit h-full">
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

     </div>
     <div className='max-sm:block hidden fadeupanim'><WhiteButton href={"/"} text={"View All"}/></div>
    </div>

   </section>
  )
}

export default RelatedBlogs


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
  
];
