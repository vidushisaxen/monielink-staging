import Layout from '@/components/Layout'
import Content from '@/components/Privacy Policy/Content'
import Hero from '@/components/Privacy Policy/Hero'
import React from 'react'


export default function page() {
  return (
    <>
    <Layout>
      <Hero heading1={"Monielink"} heading2={"Cookies Policy"}/>
      <Content />
      </Layout>
    </>
  )
}
