'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyUsSwiper = () => {
    const swiperRef = useRef(null);
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);

    // const handlePrevClick = () => {
    //     swiperRef.current.slidePrev();
    // };

    // const handleNextClick = () => {
    //     swiperRef.current.slideNext();
    // };

useEffect(() => {
    if (!swiperRef.current) return;
    const ctx = gsap.context(() => {
        const swiperEl = swiperRef.current.el;
        const wrapper = swiperEl.querySelector('.swiper-wrapper');
        const slideEls = Array.from(wrapper.querySelectorAll('.swiper-slide'));

        const rects = slideEls.map(el => el.getBoundingClientRect());

        const dxdy = rects.map(r => ({
            x: rects[0].left - r.left,
            y: rects[0].top - r.top
        }));

        gsap.set(slideEls, {
            x: (i) => dxdy[i].x,
            y: (i) => dxdy[i].y,
            opacity: 0,
            zIndex: (i) => slideEls.length - i
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                // markers: true,
            }
        });

        tl.fromTo(slideEls[0], {
            y: 50, opacity: 0
        }, {
            y: 0, opacity: 1, duration: 0.1,
            onComplete: () => {
                tl.to(slideEls, {
                    opacity: 1,
                    duration: 0.2,
                })
                slideEls.forEach((el, i) => {
            if (i === 0) return;
            tl.to(el, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, (i - 1) * 0.01);
        });
            }
        })
    }, containerRef);

    return () => ctx.revert();
}, []);

    return (
        <>
            <div ref={containerRef} className="flex justify-start items-center gap-10">
                <Swiper
                    modules={[Navigation]}
                    initialSlide={0}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setActiveIndex(swiper.activeIndex);
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.activeIndex);
                    }}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    threshold={10}
                    speed={100}
                    className="mySwiper !px-[4.5vw] w-screen !overflow-y-visible"
                >
                    {SwiperData.map((item, cardIndex) => {
                        const isActive = activeIndex === cardIndex;
                        return (
                            <SwiperSlide
                                key={item.id}
                                className={`cursor-grab duration-500 !transition-all !w-[12vw] overflow-hidden ${isActive ? '!w-[22vw]' : ''}`}
                            >
                                <SwiperCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    index={cardIndex}
                                    activeIndex={activeIndex}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default WhyUsSwiper;

const SwiperCard = ({ id, title, description, index, activeIndex }) => {
    const isActive = activeIndex === index;

    return (
        <div
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 80% 100%, 0% 100%)' }}
            className={`overflow-hidden p-[1px] rounded-[16px] bg-gradient-to-br from-white/50 to-[#FE701A] flex items-center justify-center duration-500 transition-all h-[14vw] ${isActive ? "h-[25vw]" : ""}`}>
            <div
                className="bg-[#FE701A] p-[2vw] rounded-[15px] w-[calc(100%-1px)] h-[calc(100%-1px)] space-y-[3.5vw]">
                <p>00{id}</p>
                <div
                    className={`space-y-[3.5vw] duration-500 w-[18vw] transition-all ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="text-content-30 font-display">{title}</h4>
                    <p className="text-content-20 mb-[3.5vw]">{description}</p>
                </div>
            </div>
        </div>
    )
}

const SwiperData = [
    {
        id: 1,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 2,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 3,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 4,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 5,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 6,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 7,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 8,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
]
