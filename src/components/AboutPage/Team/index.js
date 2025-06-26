"use client";
import { useState } from 'react';
import TeamCard from "./TeamCard";
import { TeamData } from "./TeamData";
import Copy from '@/components/Animations/Copy';

const Team = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <section data-theme="white" className="bg-white-1 py-[4vw]">
                <div className="px-[4vw]">
                    <div className="w-[45%] mb-10">
                        <Copy>
                            <h3 className="text-head-60 font-display text-black-1 capitalize">Meet the People who drive the Business forward</h3>
                        </Copy>
                    </div>
                    <div className="flex flex-col items-end justify-start w-full gap-y-[1.5vw]">
                        {TeamData.map((item, index) => (
                            <TeamCard
                                key={index}
                                name={item.name}
                                position={item.position}
                                image={item.image}
                                info={item.info}
                                isOpen={activeIndex === index}
                                onClick={() => handleAccordionClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team;