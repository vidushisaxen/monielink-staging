import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Copy from "../Animations/Copy";

export default function FAQs() {
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
        <Accordion className="w-full font-display" type="single" collapsible>
          {data.map((faq, index) => (
            <div key={index} className="relative mb-[3vw] w-full h-full fadeupanim">
              {/* Outer Gradient Layer with Clip-Path */}
              <div
                className="inset-0 z-0 overflow-hidden rounded-[1vw] p-[1px] relative animate-border"
                style={{
                  clipPath:
                    "polygon(0% 0%, 10% 0%, 15% 2vw, 85% 2vw, 90% 0%, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                {/* Inner Gray Content Box */}
                <div style={{
                  clipPath: "polygon(0% 0%, calc(10% - 1px) 0%, calc(15% - 1px) 2vw, calc(85% + 1px) 2vw, calc(90% + 1px) 0%, 100% 0%, 100% 100%, 0% 100%)",
                }} className="relative z-10 bg-[#F0F0F0] p-[2vw] rounded-[1vw]">
                  <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
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
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const data = [
  {
    question: "What security measures do you have in place?",
    answer: "We implement bank-grade security protocols including end-to-end encryption, multi-factor authentication, and regular security audits to protect all data and transactions.",
  },
  {
    question: "How quickly can we integrate your SDK?",
    answer: "Our SDK is designed for rapid deployment, with most integrations completed within 2-4 weeks depending on your specific requirements and technical environment.",
  },
  {
    question: "Do you provide technical support?",
    answer: "Yes, we offer 24/7 technical support through multiple channels including dedicated account managers, developer documentation, and emergency response teams.",
  },
  {
    question: "What types of institutions do you work with?",
    answer: "We partner with a wide range of financial institutions including traditional banks, digital banks, fintech companies, and payment service providers across multiple regions.",
  },
  {
    question: "How do you handle data compliance?",
    answer: "We maintain strict compliance with international data protection regulations including GDPR, PSD2, and regional banking regulations, ensuring all data handling meets the highest standards.",
  },
];