import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const HeroSection = () => {
  return (
    
    <div className='lg:mt-[75px] px-5 lg:flex justify-between'>
      
        <HeroText />
        <HeroImage />
        
    </div>
  )
}

export default HeroSection