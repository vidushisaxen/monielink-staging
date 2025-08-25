import Copy from '@/components/Animations/Copy'
import React from 'react'

const benefits = [
  {
    id: '01',
    text: 'Instantly issue and activate virtual credit cards, no credit underwriting or sales channels required.'
  },
  {
    id: '02',
    text: 'Skip the paperwork, no forms or documents required for credit evaluation.'
  },
  {
    id: '03',
    text: 'No need to visit a branch. Get DUO credit card and activate it instantly, right from your device.'
  },
  {
    id: '04',
    text: 'Make local payments with your DUO Virtual Credit Card through your existing debit card.'
  },
  {
    id: '05',
    text: 'Make online purchases using the Virtual Credit Card on partner apps integrated with our SDK. One card, dual purpose. Use your debit card as a credit card.'
  }
]

const CustomerBenefits = () => {
  return (
    <section data-theme="orange" className="bg-gradient h-full w-screen">
      <div className="h-full w-full px-[5vw] py-[5vw] max-sm:py-[10vw]">
        <div className="text-center max-sm:text-left">
          <Copy>
            <h2 className="text-head-100 font-display ">
              DTS – Advantage to Customers
            </h2>
          </Copy>
        </div>

        <div className="w-full h-full flex items-center justify-start gap-[6vw] flex-wrap py-[5vw] max-sm:flex-col max-sm:items-start max-sm:gap-[10vw]">
          {benefits.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-center gap-[3vw] w-[28%] max-sm:w-full max-sm:gap-[5vw]"
            >
              <div className="rounded-full h-[3.5vw] w-[3.5vw] flex items-center justify-center fadeupanim text-content-20 border border-white fadeupanim max-sm:h-[10vw] max-sm:w-[10vw]">
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

export default CustomerBenefits
