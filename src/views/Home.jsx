import React from 'react'
import Section1 from '../components/HomeSection1'
import Section2 from '../components/HomeSection2'
import Section3 from '../components/HomeSection3'

const Home = () => {
  return (
    <div>
    <div className='home'>
      <Section1 />
      <Section3 />
    </div>
      <Section2 />
    </div>
  )
}

export default Home