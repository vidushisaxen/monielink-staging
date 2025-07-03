import Image from 'next/image'
import React from 'react'
import Copy from '../Animations/Copy'

const Intro = ({content}) => {
  return (
   <section data-theme="white" className='w-screen h-full bg-white-1'>
    <div className='w-full h-full px-[4vw] py-[7vw] flex items-start justify-start'>
        <div className='w-[45%] flex items-start justify-start'>
<div className='w-[15vw] h-[5vw] fadeupanim'>
    <Image src={content.logo} height={100} width={100} alt='balance' className='h-full w-full'/>
</div>
        </div>
        <div className='w-1/2 flex items-start justify-start'>
<div className='flex flex-col w-[70%] space-y-[5vw]'>
    <Copy>
    <h2 className='text-head-60 font-display text-black-1'>{content.heading}</h2>
    </Copy>

<div className='space-y-[2vw] '>
    {content.list.map((item,index)=>(
        <div key={index} className='w-full flex gap-[1.5vw] items-center overflow-hidden'>
        <span className='h-[2vw] w-[0.6vw] bg-[#FE6E00] fadeupanim'/>
        <Copy>
        <p className='text-content-20 text-black-1 font-body w-[75%]'>{item}</p>
        </Copy>
    </div>
    ))}
</div>
</div>
        </div>

    </div>

   </section>
  )
}

export default Intro