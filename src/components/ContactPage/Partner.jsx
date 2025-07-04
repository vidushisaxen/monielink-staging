import React from 'react'
import Copy from '../Animations/Copy'
import ContactForm from './ContactForm'

const Partner = () => {
  return (
   <>
   <section data-theme="orange" className='w-screen h-full bg-gradient'>
    <div className='h-full w-full flex items-start justify-between px-[4vw] py-[7vw] max-sm:flex-col max-sm:gap-[15vw] max-sm:px-[5.5vw]'>
        <div className='w-1/2 max-sm:w-full max-sm:space-y-[3vw]'>
          <Copy>
            <h2 className='text-head-100 font-display'>Partner With Us</h2>
          </Copy>
          <div className='w-[68%] max-sm:w-[80%]'>
          <Copy>
            <p className='text-content-20 text-white'>Looking to integrate our SDKs, explore co-branded solutions, or join the Moneylink ecosystem? We&apos;re excited to hear from you.
            Fill out our partnership form.</p>
          </Copy>
          </div>
        </div>
        <div className='w-1/2 max-sm:w-full'>
        <ContactForm/>
        </div>

    </div>

   </section>
   </>
  )
}

export default Partner