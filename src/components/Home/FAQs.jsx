"use client"
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Copy from "../Animations/Copy";

export default function FAQs({data}) {
  const [activeItem, setActiveItem] = useState('item-1');

 

  return (
    <section data-theme="white" id="faqs" className="bg-[#FBFBFB] py-[7%] px-[4.5vw] max-sm:px-[4.5vw] max-md:px-[2vw] white max-sm:py-[15%] max-md:py-[15%] max-sm:pt-[20%] w-screen overflow-hidden">
      <div className="w-3/4 mx-auto max-md text-center max-sm:w-[90%]">
        <Copy>
          <h2 className="text-[5.2vw] max-md:text-head-100 text-background leading-[1.25] font-display max-sm:text-head-100">
            Frequently Asked Questions
          </h2>
        </Copy>
      </div>

      <div className="w-4/5 max-md:w-[90%] mx-auto pt-[5vw] max-md:pt-[10vw] max-sm:w-[95%] max-sm:pt-[15vw]">
        <Accordion
          type="single"
          collapsible
          value={activeItem || ""}
          onValueChange={(value) => setActiveItem(value)}
          className="w-full font-display"
        >
          {data.map((faq, index) => {
            const itemKey = `item-${index + 1}`;
            const isActive = activeItem === itemKey;

            return (
              <div
                key={index}
                className="relative mb-[3vw] w-full h-full fadeupanim faq-tab max-sm:mb-[6vw]"
              >
                <div
                  className={`inset-0 z-0 overflow-hidden rounded-[1vw] p-[1px] relative max-sm:rounded-[2.5vw] faq-outer ${
                    isActive ? "animate-border" : ""
                  }`}
                 
                >
                  <div
                    className="relative z-10 bg-[#F0F0F0] p-[2vw] rounded-[1vw] max-sm:px-[4vw] faq-inner max-sm:rounded-[2.5vw]"
                    
                  >
                    <AccordionItem value={itemKey} >
                      <AccordionTrigger index={index} className=" max-sm:text-content-18 font-display  max-md:text-[2.5vw] max-sm:text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-[1.05vw] max-sm:text-content-20 max-md:text-content-20">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              </div>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
