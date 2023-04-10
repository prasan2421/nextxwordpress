import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges

  return (
    <>
      <Head>
        <title>TEDXTRONDHEIM</title>
      </Head>
      <Container>
      
      <div className="mt-5 ">
      <div className="text-center mb-16">
            <h1 className=" lg:text-7xl leading-auto font-bold  text-gray-900 sm:text-4xl">
             Events
            </h1>
            </div>
      
        {morePosts.length > 0 && <MoreStories posts={morePosts} title={'Events'}/>}
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