import React from 'react'
import { GetStaticProps } from 'next'
import { getAllTeamPosts } from '../../lib/api'
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Swiper React components
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from '../../components/container';

// import required modules

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


function team({ allPosts: { edges }, preview }) {
  const morePosts = edges;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    pagination: true,
    // autoplay: true,
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
  
    <div className='mt-20'>
   
        <div className="relative isolate flex flex-1 h-80 bg-about-cover bg-cover">
      
         
            <div className='justify-center   flex-1 flex items-center '>
            <article className="leading-none   text-4xl lg:text-5xl  text-neutral-200 dark:text-neutral-200 ">
             OUR TEAM
            </article>
            </div>
         
    
      </div>
      <div className="my-20 ">
            {morePosts && (
      <Slider {...settings}>
    {morePosts.map((slideContent, index) => (
        <div className='p-3'>
           <Link
              href={`/posts/${slideContent.node.slug}`}
              className="flex flex-col items-center"
              // dangerouslySetInnerHTML={{ __html: title }}
            >
          <img
            key={index}
            src={slideContent.node.featuredImage.node.sourceUrl}
            
            className="h-full w-1/2 md:h-full md:w-1/2 lg:h-full  lg:w-1/2 "
          />
          
          <div className='text-black dark:text-white text-center justify-center py-4 text-xs md:text-sm lg:text-lg'>{slideContent.node.title}</div>
          </Link>
        </div>
      ))}
    </Slider>
    )}
            </div>
      
      <Container>
            <div>
              <div className='flex flex-row gap-10 mt-20 '>
                <div  className='flex-1 text-black dark:text-white'>
                <h1 className='text-3xl mb-5'>What is TEDxTrondheim?</h1>
                <p className='text-justify text-gray-400'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                </div>
                <div className='flex-1 bg-black dark:bg-white'>
                  <div className=' bg-white'/>
                </div>
              </div>

              <div className='flex gap-10 flex-row-reverse mt-20 '>
                <div  className='flex-1  text-black dark:text-white'>
                <h1 className='text-3xl mb-5'>What is TED?</h1>
                <p className='text-justify text-gray-400'>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.                  </p>
                </div>
                <div className='flex-1  bg-black dark:bg-white'>
                  <div className=' bg-white'/>
                </div>
              </div>

              <div className='flex flex-row gap-10 mt-20 '>
                <div  className='flex-1  text-black dark:text-white'>
                <h1 className='text-3xl mb-5'>What is TEDx?</h1>
                <p className='text-justify text-gray-400'>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.                  </p>
                </div>
                <div className='flex-1  bg-black dark:bg-white'>
                  <div className=' bg-white'/>
                </div>
              </div>
            </div>
            <div>
            <div  className='flex flex-col  text-black dark:text-white items-center my-20'>
                <h1 className='text-3xl mb-5'>Contact Us</h1>
                <p className='text-justify text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore                 </p>
                <div className='shadow-md bg-gray-100 dark:bg-zinc-900 p-20 mt-10'>
                  <div className='flex flex-row gap-2'>
                  <input type="text" className="mt-2
                    block
                    w-full
                    rounded-md
                    ring-1
                    ring-gray-500
                    dark:bg-zinc-700 
                    border-transparent
                    focus:dark:border-zinc-500 focus:ring-0 focus:ring-gray-500" placeholder="Firstname" />
                <input type="text" className="mt-2
                    block
                    w-full
                    rounded-md
                    ring-1
                    ring-gray-500
                    dark:bg-zinc-700 
                    border-transparent
                    focus:dark:border-zinc-500 focus:ring-0 focus:ring-gray-500" placeholder="Lastname" />
                  </div>
                
                <input type="email" className="mt-2
                    block
                    w-full
                    rounded-md
                    ring-1
                    ring-gray-500
                    dark:bg-zinc-700 
                    border-transparent
                    focus:dark:border-zinc-500 focus:ring-0 focus:ring-gray-500" placeholder="john@example.com" />
                <textarea className="mt-2
                    block
                    w-full
                    rounded-md
                    ring-1
                    ring-gray-500
                    dark:bg-zinc-700 
                    border-transparent
                    focus:dark:border-zinc-500 focus:ring-0 focus:ring-gray-500" rows={4} placeholder="Your message" />

                </div>
                </div>
            </div>
            </Container>
    </div>
  )
}

export default team

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllTeamPosts(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}