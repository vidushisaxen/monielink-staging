import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <section id="faqs" className="h-fit w-full flex flex-col items-center justify-center bg-[#FBFBFB] pt-[5vw]">
      <p className="text-background text-[5vw] w-[80%] text-center leading-none font-display">
        Frequently Asked Questions
      </p>
      <div className="m-[5vw] w-[80vw]">
        <Accordion className="w-full font-display" type="single" collapsible>
          {[
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
          ].map((faq, index) => (
            <div key={index} style={{
                clipPath: "polygon(0% 0%, 10% 0%, 15% 2vw, 85% 2vw, 90% 0%, 100% 0, 100% 100%, 0% 100%)"
            }} className=" p-8 mb-10 bg-[#F0F0F0] rounded-2xl border-2 border-[#E0E0E0] w-full">
              <AccordionItem
                key={`item-${index + 1}`}
                value={`item-${index + 1}`}
              >
                <AccordionTrigger index={index}>{faq.question}</AccordionTrigger>
                <AccordionContent >{faq.answer}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
