import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { useEffect } from 'react'
import cover from '../public/images/cover.png'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[1]?.node
  const morePosts = edges

  return (
    <>
      <Head>
        <title>TEDXTRONDHEIM</title>
      </Head>
      
      <div className="flex h-screen flex-col">
        <div className="relative isolate flex flex-1 bg-[url('../public/images/cover.png')] bg-cover">
      
         
            <div className='pl-5 md:pl-14 flex-1 flex items-center'>
            <article className="leading-none  text-2xl md:text-4xl lg:text-5xl  text-neutral-200 dark:text-neutral-200 ">
              The largest community <br/>of TEDx enthusiasts
            </article>
            </div>
            <div  className='flex-1'/>
           
            
            {/* <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400">
              Learn about ideas worth spreading by attending our <span className='text-red-600 font-bold'>TEDx</span> events, watching our <span className='text-red-600 font-bold'>TEDx</span> talks and reading our <span className='text-red-600 font-bold'>TEDx</span> blogs.
            </p> */}
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
         
          {/* <div className="hidden sm:mt-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of talks.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Watch <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
       
    
      </div>
      <div className="w-full  bg-red-700 text-center py-4 text-white">
        <div>
          <p>Since 2016 more than</p>
        </div>
        <div className='flex justify-center pt-5'>
         <div className='px-5'>
           <p>5000</p>
           <p>Attendees</p>
         </div>
         <div className='px-5'>
           <p>100</p>
           <p>Speakers</p>
         </div>
         <div  className='px-5'>
           <p>1,00,000+</p>
           <p>Users reached</p>
         </div>
        </div>
        </div>
      </div>
      <Container>
      <div className="mt-5 ">
      <div className="text-center mb-16">
            <h1 className=" lg:text-7xl leading-auto font-bold  text-gray-900 dark:text-slate-100 sm:text-4xl">
             Up coming event
            </h1>
            </div>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} title={'More Events'} />}
        </div>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
