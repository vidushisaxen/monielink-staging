import Image from 'next/image'
import React from 'react'
import Copy from '../Animations/Copy'

const Intro = () => {
  return (
   <section data-theme="white" className='w-screen h-screen bg-white-1'>
    <div className='w-full h-full px-[4vw] py-[7vw] flex items-start justify-start'>
        <div className='w-[45%] flex items-start justify-start'>
<div className='w-[15vw] h-[5vw] fadeupanim'>
    <Image src={"/assets/icons/balance-logo.svg"} height={100} width={100} alt='balance' className='h-full w-full'/>
</div>
        </div>
        <div className='w-1/2 flex items-start justify-start'>
<div className='flex flex-col w-[70%] space-y-[5vw]'>
    <Copy>
    <h2 className='text-head-60 font-display text-black-1'>One Platform. Every Retail Banking Service.</h2>
    </Copy>

<div className='space-y-[2vw] '>
    <div className='w-full flex gap-[1.5vw] items-center overflow-hidden'>
        <span className='h-[2vw] w-[0.6vw] bg-[#FE6E00] fadeupanim'/>
        <Copy>
        <p className='text-content-20 text-black-1 font-body w-[75%]'>Digital Account Management with integrated KYC and soft-token authentication</p>
        </Copy>
    </div>
    <div className='w-full flex gap-[1.5vw] items-center overflow-hidden'>
        <span className='h-[2vw] w-[0.6vw] bg-[#FE6E00] fadeupanim'/>
        <Copy>
        <p className='text-content-20 text-black-1 font-body w-[65%]'>Instant Card Issuance for virtual debit, credit, and prepaid cards via SDK</p>
        </Copy>
    </div>
    <div className='w-full flex gap-[1.5vw] items-center overflow-hidden'>
        <span className='h-[2vw] w-[0.6vw] bg-[#FE6E00] fadeupanim'/>
        <Copy>
        <p className='text-content-20 text-black-1 font-body w-[65%]'>NUBAN Account Linking to verified mobile numbers for easy fund transfers</p>
        </Copy>
    </div>
    <div className='w-full flex gap-[1.5vw] items-center overflow-hidden'>
        <span className='h-[2vw] w-[0.6vw] bg-[#FE6E00] fadeupanim'/>
        <Copy>
        <p className='text-content-20 text-black-1 font-body w-[85%]'>Unified Payments including QR payments, bank transfers, inflows, and merchant collections</p>
        </Copy>
    </div>

</div>
</div>
        </div>

    </div>

   </section>
  )
}

export default Intro