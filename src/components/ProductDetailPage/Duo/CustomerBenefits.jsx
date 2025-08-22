import Copy from '@/components/Animations/Copy'
import React from 'react'

const CustomerBenefits = () => {
  return (
   <section data-theme="orange" className='bg-gradient h-full w-screen'>
    <div className='h-full w-full px-[5vw] py-[5vw]'>
        <div className='text-center'>
            <Copy>
                <h2 className='text-head-100 font-display'>DTS – Advantage to Customers</h2>
                </Copy>
        </div>
        <div className='w-full h-full flex items-center justify-start gap-[6vw] flex-wrap py-[5vw]'>
            <div className='flex flex-col items-start justify-center gap-[3vw] w-[28%]'>
                <div className='rounded-full p-[1vw] text-content-20 border border-white fadeupanim'>
                    01
                </div>
                <Copy delay={0.5}>
                    <p className='text-content-20'>Instantly issue and activate virtual credit cards, no credit underwriting or sales channels required. </p>
                </Copy>
            </div>
             <div className='flex flex-col items-start justify-center gap-[3vw] w-[28%]'>
                <div className='rounded-full p-[1vw] text-content-20 border border-white fadeupanim'>
                    02
                </div>
                <Copy  delay={0.5}>
                    <p className='text-content-20'>Skip the paperwork, no forms or documents required for credit evaluation.</p>
                </Copy>
            </div>
             <div className='flex flex-col items-start justify-center gap-[3vw] w-[28%]'>
                <div className='rounded-full p-[1vw] text-content-20 border border-white fadeupanim'>
                    03
                </div>
                <Copy  delay={0.5}>
                    <p className='text-content-20'>No need to visit a branch. Get DUO credit card and activate it instantly, right from your device .</p>
                </Copy>
            </div>
             <div className='flex flex-col items-start justify-center gap-[3vw] w-[28%]'>
                <div className='rounded-full p-[1vw] text-content-20 border border-white fadeupanim'>
                    04
                </div>
                <Copy  delay={0.5}>
                    <p className='text-content-20'>Make local payments with your DUO Virtual Credit Card through your existing debit card.</p>
                </Copy>
            </div>
             <div className='flex flex-col items-start justify-center gap-[3vw] w-[28%]'>
                <div className='rounded-full p-[1vw] text-content-20 border border-white fadeupanim'>
                    05
                </div>
                <Copy  delay={0.5}>
                    <p className='text-content-20'>Make online purchases using the Virtual Credit Card on partner apps integrated with our SDK. One card, dual purpose. Use your debit card as a credit card.</p>
                </Copy>
            </div>

        </div>

    </div>

   </section>
  )
}

export default CustomerBenefits