import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { useEffect, useState, createRef } from 'react'
import cover from '../public/images/cover.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

const images = [{id:1,img:'https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'},{id:2,img:'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'},{id:3,img:'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'},{id:4,img:'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'},{id:5,img:'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'} ]

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
     
      onClick={onClick}
    >
    
      <ChevronRightIcon className="text-black dark:text-white h-5 lg:h-10 w-5 lg:w-10 bg-red-600 rounded-lg" />
     
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  
  return (
    <div
      className={`${className}`}
     
      onClick={onClick}
    >
      <ChevronLeftIcon className="text-black dark:text-white h-5 lg:h-10 w-5 lg:w-10 bg-red-600 rounded-lg" />
    </div>
  );
};

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[1]?.node
  const morePosts = edges

  useEffect(()=>{
console.log(morePosts)
  },[])

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    pagination: true,
    slidesToShow: 4,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      
    ],
    speed: 500,
    nextArrow: <CustomNextArrow  />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <Head>
        <title>TEDXTRONDHEIM</title>
      </Head>
      
      <div className="flex h-screen flex-col">
        <div className="relative isolate flex flex-1 bg-[url('../public/images/cover.png')] bg-cover">
      
         
            <div className='justify-center md:justify-start pl-5 md:pl-14 flex-1 flex items-center '>
            <article className="leading-none   text-4xl lg:text-5xl  text-neutral-200 dark:text-neutral-200 ">
              The largest community <br/>of TEDx enthusiasts
            </article>
            </div>
            {/* <div  className='flex-1 '/> */}
           
            
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
      <div className="w-full  bg-red-600 text-center py-4 text-white">
        <div>
          <p className='text-2xl'>Since 2016 more than</p>
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
      
      <div >
        <div className="mt-14 px-8 md:px-14 ">
            <h1 className=" text-xl md:text-2xl  text-gray-900 dark:text-slate-100 ">
             Most seen videos <span className='text-red-500 text-lg ml-5'>Explore now</span>
            </h1>
        </div>
        <div className="my-10 ">
            
            {/* <Swiper
      // install Swiper modules
  
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      // slidesPerView={3}
      navigation
      className="mySwiper"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        // Configure breakpoints based on screen width
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    > */}
    {morePosts && (
      <Slider {...settings}>
    {morePosts.map((slideContent, index) => (
        <div className='p-3'>
           <Link
              href={`/posts/${slideContent.node.slug}`}
              // className="hover:underline"
              // dangerouslySetInnerHTML={{ __html: title }}
            >
          <img
            key={index}
            src={slideContent.node.featuredImage.node.sourceUrl}
            
            className="h-20 md:h-40 lg:h-60  object-cover overflow-hidden  "
          />
          
          <div className='text-black dark:text-white text-center justify-center py-4'>{slideContent.node.title}</div>
          </Link>
        </div>
      ))}
    </Slider>
    )}
    
       
     
    {/* </Swiper> */}
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
