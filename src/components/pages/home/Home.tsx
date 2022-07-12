import React from 'react'
import Banner from './Banner'
import TopArticles from './TopArticles'

const Home = () => {
  return (
    <div className='p-4 min-h-screen md:px-8'>
        <Banner/>
        <TopArticles/>
    </div>
  )
}

export default Home