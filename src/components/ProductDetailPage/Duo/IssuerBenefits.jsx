import Copy from '@/components/Animations/Copy'
import React from 'react'

const IssuerBenefits = () => {
  return (
   <section data-theme="orange" className='bg-gradient h-full w-screen'>
    <div className='h-full w-full px-[5vw] py-[5vw]'>
        <div className='text-center'>
            <Copy>
                <h2 className='text-head-100 font-display'>DTS – Advantage to Issuers</h2>
                </Copy>
        </div>
        <div className='w-full h-full flex items-center justify-start gap-[6vw] flex-wrap py-[5vw]'>
            <div className='flex flex-col items-start justify-center gap-[3vw] w-[28%]'>
                <div className='rounded-full p-[1vw] text-content-20 border border-white fadeupanim'>
                    01
                </div>
                <Copy delay={0.5}>
                    <p className='text-content-20'>Instantly issue and activate virtual credit cards—no credit underwriting or sales channels required.</p>
                </Copy>
            </div>
             <div className='flex flex-col items-start justify-center gap-[3vw] w-[28%]'>
                <div className='rounded-full p-[1vw] text-content-20 border border-white fadeupanim'>
                    02
                </div>
                <Copy  delay={0.5}>
                    <p className='text-content-20'> Eliminates the usual costs and wait times involved in producing physical credit card.</p>
                </Copy>
            </div>
             <div className='flex flex-col items-start justify-center gap-[3vw] w-[28%]'>
                <div className='rounded-full p-[1vw] text-content-20 border border-white fadeupanim'>
                    03
                </div>
                <Copy  delay={0.5}>
                    <p className='text-content-20'>Engage a large base of creditworthy debit card users through our pre-approved, instant digital DUO card activation.</p>
                </Copy>
            </div>
             <div className='flex flex-col items-start justify-center gap-[3vw] w-[28%]'>
                <div className='rounded-full p-[1vw] text-content-20 border border-white fadeupanim'>
                    04
                </div>
                <Copy  delay={0.5}>
                    <p className='text-content-20'>Boost revenue by building a profitable credit card portfolio.</p>
                </Copy>
            </div>
        </div>

    </div>

   </section>
  )
}

export default IssuerBenefits