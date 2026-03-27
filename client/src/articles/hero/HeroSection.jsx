import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const HeroSection = () => {
  return (
    
    <div className='lg:mt-[167px] flex justify-between'>
      
        <HeroText />
        <HeroImage />
        
    </div>
  )
}

export default HeroSection