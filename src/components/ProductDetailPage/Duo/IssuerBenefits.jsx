import Copy from '@/components/Animations/Copy'
import React from 'react'

const issuerBenefits = [
  {
    id: '01',
    text: 'Instantly issue and activate virtual credit cards, no credit underwriting or sales channels required',
  },
  {
    id: '02',
    text: 'Eliminates the usual costs and wait times involved in producing physical credit card.',
  },
  {
    id: '03',
    text: 'Engage a large base of creditworthy debit card users through our pre-approved, instant digital DUO card activation.',
  },
  {
    id: '04',
    text: 'Boost revenue by building a profitable credit card portfolio.',
  },
]

const IssuerBenefits = () => {
  return (
    <section data-theme="orange" className="bg-gradient h-full w-screen">
      <div className="h-full w-full px-[5vw] py-[5vw] max-sm:py-[10vw]">
        <div className="text-center max-sm:text-left">
          <Copy>
            <h2 className="text-head-100 font-display">
              DTS – Advantage to Issuers
            </h2>
          </Copy>
        </div>

        <div className="w-full h-full flex items-center justify-start gap-[6vw] flex-wrap py-[5vw] max-sm:flex-col max-sm:gap-[10vw] max-sm:items-start">
          {issuerBenefits.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-center gap-[3vw] w-[28%] max-sm:w-full max-sm:gap-[6vw] "
            >
              <div className="rounded-full fadeupanim  h-[3.5vw] w-[3.5vw] flex items-center justify-center text-content-20 border border-white fadeupanim max-sm:h-[10vw] max-sm:w-[10vw]">
                {item.id}
              </div>
              <Copy delay={0.5 + index * 0.1}>
                <p className="text-content-20">{item.text}</p>
              </Copy>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IssuerBenefits
