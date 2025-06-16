import React from 'react'
import Hero from '../../components/Hero/Hero'
import Solutions from '../../components/Home/Solutions'
import Solutions2 from '../../components/Home/Solutions2'
import Overview2 from '../../components/Home/OverviewGIF'
import Clients2 from '../../components/Home/Clients2'
import NavBar from '../../components/Header/NavBar'
import Footer from '../../components/Footer/Footer'
import FAQs from '../../components/Home/FAQs'

const page = () => {
  return (
   <>
   {/* <Hero/> */}
   {/* <Solutions2/> */}
   {/* <Overview2/> */}
   <Clients2/>
   <FAQs/>
   </>
  )
}

export default page