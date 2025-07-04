import BlogContent from '@/components/BlogDetail/BlogContent'
import Hero from '@/components/BlogDetail/Hero'
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs'
import CTA from '@/components/Footer/CTA'
import Layout from '@/components/Layout'
import React from 'react'

const page = () => {
  return (
   <>
   <Layout>
    <Hero/>
    <BlogContent/>
    <RelatedBlogs/>
     <CTA/>
   </Layout>
   </>
  )
}

export default page