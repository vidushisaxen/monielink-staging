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
    <section id="faqs" className="bg-[#FBFBFB] py-[5vw] px-[4.5vw] white">
      <div className="w-3/4 mx-auto text-center">
        <Copy>
          <h2 className="text-[5.2vw] text-background leading-[1.25] font-display">
            Frequently Asked Questions
          </h2>
        </Copy>
      </div>

      <div className="w-4/5 mx-auto pt-[5vw]">
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
                className="relative mb-[3vw] w-full h-full fadeupanim faq-tab"
              >
                <div
                  className={`inset-0 z-0 overflow-hidden rounded-[1vw] p-[1px] relative ${
                    isActive ? "animate-border" : ""
                  }`}
                  style={{
                    clipPath:
                      "polygon(0% 0%, 10% 0%, 15% 2vw, 85% 2vw, 90% 0%, 100% 0, 100% 100%, 0% 100%)",
                  }}
                >
                  <div
                    className="relative z-10 bg-[#F0F0F0] p-[2vw] rounded-[1vw]"
                    style={{
                      clipPath:
                        "polygon(0% 0%, calc(10% - 1px) 0%, calc(15% - 1px) 2vw, calc(85% + 1px) 2vw, calc(90% + 1px) 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    <AccordionItem value={itemKey}>
                      <AccordionTrigger index={index} className="font-display">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[1.05vw]">
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
