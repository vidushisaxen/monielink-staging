import Image from 'next/image'
import React from 'react'
import Copy from '../Animations/Copy'

const Overview = () => {
  return (
    <section data-theme="orange" className='h-[80vh] w-screen bg-gradient relative max-sm:h-fit max-md:h-[70vh' id='productsOverview'>
    <div className='h-full w-full py-[8vw] px-[8vw]  flex justify-center gap-[7vw] max-sm:px-[5.5vw] max-md:flex-col max-sm:flex-col max-sm:py-[25%] max-sm:pt-[40%] max-sm:gap-[8vw] max-md:gap-[5vw]'>
      <div className='w-[45%] max-md:w-[100%] flex items-start max-sm:w-full'>
        <Copy>
        <h2 className='text-head-60 capitalize font-display max-sm:text-head-100'>
          Explore Our Suite of Scalable Financial Products
        </h2>
        </Copy>
        <div className='absolute top-[10%] left-[9%] h-[3vw] w-[3vw] max-md:top-[14%] max-md:w-[10vw] max-md:h-[10vw] max-md:left-[8%] max-sm:top-[14%] max-sm:left-[7%] max-sm:w-[15vw] max-sm:h-auto overflow-hidden'>
<Image src={"/assets/icons/overview-icon.svg"} height={50} width={50} alt='overview-icon' className='h-full w-full fadeupanim'/>
        </div>
      </div>
  
      <div className='w-[35%] max-md:w-[100%] flex items-end max-sm:w-full'>
        <Copy>
        <p className='text-content-20'>
          Launch, scale, and optimize retail financial services with a powerful suite of modular tools.
          From digital wallets and card issuing to payments, lending, and identity verification —
          Monielink gives banks and fintechs the infrastructure to deliver secure, compliant,
          and seamless financial experiences. Built for performance and flexibility, our platform
          enables you to go to market faster, adapt to customer needs, and unlock new revenue streams
          — all through a single integration.
        </p>
        </Copy>
      </div>
    </div>
  </section>
  
  )
}

export default Overview