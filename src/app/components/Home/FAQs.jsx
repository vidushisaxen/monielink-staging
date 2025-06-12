"use client"
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);


const data=[
  {
    question: "What security measures do you have in place?",
    answer:
      "We implement bank-grade security protocols including end-to-end encryption, multi-factor authentication, and regular security audits to protect all data and transactions.",
  },
  {
    question: "How quickly can we integrate your SDK?",
    answer:
      "Our SDK is designed for rapid deployment, with most integrations completed within 2-4 weeks depending on your specific requirements and technical environment.",
  },
  {
    question: "Do you provide technical support?",
    answer:
      "Yes, we offer 24/7 technical support through multiple channels including dedicated account managers, developer documentation, and emergency response teams.",
  },
  {
    question: "What types of institutions do you work with?",
    answer:
      "We partner with a wide range of financial institutions including traditional banks, digital banks, fintech companies, and payment service providers across multiple regions.",
  },
  {
    question: "How do you handle data compliance?",
    answer:
      "We maintain strict compliance with international data protection regulations including GDPR, PSD2, and regional banking regulations, ensuring all data handling meets the highest standards.",
  },
];
export default function FAQs() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const faqsText = SplitText.create(".faqsText", {
        type: "lines",
        mask:"lines",
        linesClass: "faqsTextLines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#faqs",
          start: "top 80%",
          end: "bottom top",
          once: true,
          // markers: true,
        },
      });
      gsap.set(".faqsTextLines", { y: "100%" });
      tl.to(".faqsTextLines", {
        y: "0%",
        duration: 1,
        ease: "power3.inOut",
      });
      tl.to(".faqBox", {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: -0.5,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="faqs"
      className="h-fit w-full flex flex-col items-center justify-center bg-[#FBFBFB] pt-[5vw] white"
    >
      <div className=" flex items-center justify-center">
        <h2 className="text-background  faqsText text-[5.2vw] w-[100%] text-center leading-[1.25] font-display">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="m-[5vw] w-[80vw]">
        <Accordion className="w-full font-display" type="single" collapsible>
          {data.map((faq, index) => (
            <div
              key={index}
              style={{
                clipPath:
                  "polygon(0% 0%, 10% 0%, 15% 2vw, 85% 2vw, 90% 0%, 100% 0, 100% 100%, 0% 100%)",
              }}
              className="faqBox opacity-0 p-8 mb-[3vw] bg-[#F0F0F0] rounded-2xl border-2 border-[#E0E0E0] w-full"
            >
              <AccordionItem
                key={`item-${index + 1}`}
                value={`item-${index + 1}`}
              >
                <AccordionTrigger index={index} className="font-display">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[1.05vw]">{faq.answer}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
