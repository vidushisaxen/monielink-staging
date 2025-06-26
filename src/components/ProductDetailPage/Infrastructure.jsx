import React from 'react'
import Copy from '../Animations/Copy'
import Image from 'next/image'

const Infrastructure = () => {
  return (
   <section data-theme="orange" className='w-screen h-full bg-gradient'>
<div className='px-[4vw] py-[7vw] flex flex-col items-center  gap-[10vw]'>
    <div className='w-[80%]'>
        <Copy>
            <h2 className='text-head-100 font-display text-center capitalize'>
            All-in-One Wallet Infrastructure for Cards, Lending & Rewards
            </h2>
        </Copy>
    </div>
    <div className='h-full w-[80%]'>
        <Image src={"/assets/icons/diagrams/balance.svg"} height={100} width={100} className='h-full w-full' alt='balance diagram'/>

    </div>

</div>
   </section>
  )
}

export default Infrastructure