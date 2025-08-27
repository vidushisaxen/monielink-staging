import React from 'react'
import Copy from '../Animations/Copy'
import ContactForm from './ContactForm'

const Partner = () => {
  return (
    <>
      <section data-theme="orange" className='w-screen h-full bg-gradient'>
        <div className='h-full w-full flex items-start justify-between px-[4vw] py-[7vw] max-md:py-[15%] max-md:flex-col max-sm:flex-col max-sm:gap-[15vw] max-md:gap-[10vw] max-sm:px-[5.5vw] max-md:px-[4vw]'>
          <div className='w-1/2 max-sm:w-full max-md:w-[100%] max-md:space-y-[3vw] max-sm:space-y-[3vw]'>
            <Copy>
              <h2 className='text-head-100 font-display'>Partner With Us</h2>
            </Copy>
            <div className='w-[68%] max-sm:w-[85%] max-md:w-[85%] space-y-[1vw]'>
              <Copy>
                <p className='text-content-20 text-white font-normal'>Looking to integrate our SDKs, explore co-branded solutions, or join the Moneylink ecosystem? We’re excited to hear from you.
                </p>
              </Copy>
              <Copy>
                <p className='text-content-20 text-white font-normal'>
                  Fill out our partnership form.
                </p>
              </Copy>
            </div>
          </div>
          <div className='w-1/2 max-md:w-[100%] max-sm:w-full'>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Partner