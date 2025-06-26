import Image from 'next/image'
import React from 'react'
import Copy from '../Animations/Copy'

const Values = () => {
  return (
   <section data-theme="white" className='w-screen h-full bg-white-1'>
    <div className='w-full h-full px-[4vw] py-[7vw] flex items-start justify-between'>
        <div className='w-1/2 flex items-start justify-between'>
<div>
<Copy>
    <h2 className='text-head-100 font-display text-black-1'>Creating Lasting Value, Together</h2>
    </Copy>
</div>
        </div>
        <div className='w-[40%] pt-[5vw]'>
<div className='space-y-[10vw] '>
    <div className='w-full flex gap-[1.5vw] items-center overflow-hidden'>
        <span className='h-[2vw] w-[0.6vw] bg-[#FE6E00] fadeupanim'/>
        <Copy>
        <p className='text-content-20 text-black-1 font-body w-[80%]'>Nigeria’s retail banking income per user is just $33 — far behind India ($350), China ($750), and the U.S. ($4,500).<b> By 2030, it’s projected to rise to $200.</b></p>
        </Copy>
    </div>
    <div className='w-full flex gap-[1.5vw] items-center overflow-hidden'>
        <span className='h-[2vw] w-[0.6vw] bg-[#FE6E00] fadeupanim'/>
        <Copy>
        <p className='text-content-20 text-black-1 font-body w-[60%]'>Over <b>40 MN </b>Unbanked Nigerian Adults are likely to <b> start banking by 2030. </b></p>
        </Copy>
    </div>
    <div className='w-full flex gap-[1.5vw] items-center overflow-hidden'>
        <span className='h-[2vw] w-[0.6vw] bg-[#FE6E00] fadeupanim'/>
        <Copy>
        <p className='text-content-20 text-black-1 font-body w-[60%]'><b>Average cross selling ratio </b> of banks is likely to increase from 1.6 to <b> 3.4 </b>by 2030.</p>
        </Copy>
    </div>
</div>
</div>
</div>

   </section>
  )
}

export default Values