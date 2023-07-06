import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { useEffect, useState, createRef,useRef } from 'react'
import cover from '../public/images/cover.png' 
// Import Slick React components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import Slider from "react-slick";
// Import Swiper React components
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import  { Grid, Pagination, Navigation } from "swiper";

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

  const swiperRef = useRef(null);




  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    pagination: true,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    centerPadding: "60px",
    pauseOnHover: true,
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
        <div className="relative isolate flex flex-1 bg-cover-image bg-cover">
      
         
            <div className='justify-center md:justify-start pl-5 md:pl-14 flex-1 flex items-center '>
            <article className="leading-none   text-4xl lg:text-5xl  text-neutral-200 dark:text-neutral-200 ">
              The largest community <br/>of TEDx enthusiasts
            </article>
            </div>
    
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
      
      <div>
        <div className="mt-14 px-8 md:px-14 ">
            <h1 className=" text-xl md:text-2xl  text-gray-900 dark:text-slate-100 ">
             Most seen videos <span className='text-red-500 text-lg ml-5'>Explore now</span>
            </h1>
        </div>
        <div className="my-10 ">
           
    {morePosts && (
      <Slider {...settings}>
    {morePosts.map((slideContent, index) => (
        <div className='p-3'>
           <Link
              href={`/posts/${slideContent.node.slug}`}
              className="flex flex-col"
              // dangerouslySetInnerHTML={{ __html: title }}
            >
          <img
            key={index}
            src={slideContent.node.featuredImage.node.sourceUrl}
            
            className="h-40 md:h-40 lg:h-60  object-cover overflow-hidden  "
          />
          
          <div className='text-black dark:text-white text-center justify-center py-4 text-xs md:text-sm lg:text-lg'>{slideContent.node.title}</div>
          </Link>
        </div>
      ))}
    </Slider>
    )}
    
    {/* </Swiper> */}
    </div>

{/* Speakers swiper */}
<div> <div className="mt-14 ">
            <h1 className=" text-xl md:text-2xl  text-gray-900 dark:text-slate-100 text-center">
             Our Speakers 
            </h1>
        </div>
        
       
       <div>
         
    
      
        <div className="px-10 md:px-20 py-10 relative">
        <button
     onClick={goPrev}
     className="absolute left-3 top-1/3"
    >
      <ChevronLeftIcon className="text-black dark:text-white h-5 lg:h-10 w-5 lg:w-10 bg-red-600 rounded-lg" />
    </button>
    <button
     
     onClick={goNext}
     className="absolute right-3 top-1/3"
    >
    
      <ChevronRightIcon className="text-black dark:text-white h-5 lg:h-10 w-5 lg:w-10 bg-red-600 rounded-lg" />
     
    </button>
       
        <Swiper
    //  navigation={true}
        slidesPerView={4}
        grid={{
          rows: 2,
          fill:"row"
        }}
        
        ref={swiperRef}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination,Navigation]}
        className="mySwiper"
      >
            
         <SwiperSlide><div className='py-10 md:py-28 bg-black dark:bg-white'>Slide 1</div></SwiperSlide>
        <SwiperSlide><div className='py-10 md:py-28 bg-black dark:bg-white'>Slide 2</div></SwiperSlide>
        <SwiperSlide><div className='py-10 md:py-28 bg-black dark:bg-white'>Slide 3</div></SwiperSlide>
        <SwiperSlide><div className='py-10 md:py-28 bg-black dark:bg-white'>Slide 4</div></SwiperSlide>
        <SwiperSlide><div className='py-10 md:py-28 bg-black dark:bg-white'>Slide 5</div></SwiperSlide>
        <SwiperSlide><div className='py-10 md:py-28 bg-black dark:bg-white'>Slide 6</div></SwiperSlide>
        <SwiperSlide><div className='py-10 md:py-28 bg-black dark:bg-white'>Slide 7</div></SwiperSlide>
        <SwiperSlide><div className='py-10 md:py-28 bg-black dark:bg-white'>Slide 8</div></SwiperSlide>
        <SwiperSlide><div className='py-10 md:py-28 bg-black dark:bg-white'>Slide 9</div></SwiperSlide>
        
      </Swiper>

    </div>
    <div className=" ">
            <h1 className=" text-xl md:text-2xl  text-gray-900 dark:text-slate-100 text-center">
             Our Partners 
            </h1>
            <div className='px-10 sm:px-20  md:px:36  lg:px-40 py-10'>
            <p className='text-black dark:text-white text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex'>
<div className='h-20 w-full flex flex-1 m-5 bg-black dark:bg-white'></div>
<div className='h-20 w-full flex flex-1 m-5 bg-black dark:bg-white'></div>
<div className='h-20 w-full flex flex-1 m-5 bg-black dark:bg-white'></div>
<div className='h-20 w-full flex flex-1 m-5 bg-black dark:bg-white'></div>
            </div>
            <div className='flex'>
<div className='h-20 w-full flex flex-1 m-5 bg-black dark:bg-white'></div>
<div className='h-20 w-full flex flex-1 m-5 bg-black dark:bg-white'></div>
<div className='h-20 w-full flex flex-1 m-5 bg-black dark:bg-white'></div>
<div className='h-20 w-full flex flex-1 m-5 bg-black dark:bg-white'></div>
            </div>
            </div>
           
        </div>

        <div className="flex flex-col md:flex-row bg-slate-200 dark:bg-slate-800 px-10 py-10">
          <div className='text-center md:text-left'>
          <h1 className=" text-xl md:text-2xl  text-gray-900 dark:text-slate-100 ">
             Do you want to volunteer or Be a partner?
            </h1>
            <h1 className=" text-xl md:text-2xl  text-gray-900 dark:text-slate-100">
             Or just simply contact us for more? Let us know!
            </h1>
          </div>

            <div className=" flex flex-1 justify-center items-center mt-10 md:mt-0 ">
            <button className="bg-red-500 px-10 py-3 text-white rounded-lg mr-10">Save Changes</button>
            <button className="border-solid border-2 border-red-500   px-10 py-3 text-red-500 rounded-lg">Contact us</button>
            </div>
            
           
        </div>
        
    </div>
</div>
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
