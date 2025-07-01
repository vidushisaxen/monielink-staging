import Image from 'next/image'
import React from 'react'
import Copy from '../Animations/Copy'

const Values = ({data}) => {
  return (
   <section data-theme="white" className='w-screen h-full bg-white-1'>
    <div className='w-full h-full px-[4vw] py-[7vw] flex items-start justify-between'>
        <div className='w-1/2 flex items-start justify-between'>
<div>
<Copy>
    <h2 className='text-head-100 font-display text-black-1'>{data.heading}</h2>
    </Copy>
</div>
        </div>
        <div className='w-[40%] pt-[5vw]'>
<div className='space-y-[10vw] '>
    {data.list.map((item,index)=>(
        <div key={index} className='w-full flex gap-[1.5vw] items-center overflow-hidden'>
        <span className='h-[2vw] w-[0.6vw] bg-[#FE6E00] fadeupanim'/>
        <Copy>
        <div className='text-content-20 text-black-1 font-body w-[80%]' dangerouslySetInnerHTML={{__html:item}}/>
        </Copy>
    </div>
    ))} 
</div>
</div>
</div>

   </section>
  )
}

export default Values