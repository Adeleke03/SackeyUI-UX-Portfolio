import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const HeroSection = () => {
  return (
    <div className='lg:mt-[75px] px-5 lg:flex justify-between relative'>

      {/* RESPONSIVE GLOWS - Centered container approach */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-7xl h-full">
          
          {/* Cyan/Blue Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[80%] h-[70%] 
            lg:w-[50%] lg:h-[80%]
            bg-[radial-gradient(ellipse_at_center,_rgba(0,211,243,0.1)_0%,_rgba(0,211,243,0.02)_60%,_transparent_100%)]
            blur-2xl">
          </div>
          
          {/* Purple/Magenta Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[80%] h-[70%] 
            lg:w-[50%] lg:h-[80%]
            bg-[radial-gradient(ellipse_at_center,_rgba(173,70,255,0.1)_0%,_rgba(173,70,255,0.02)_60%,_transparent_100%)]
            blur-2xl">
          </div>
          
        </div>
      </div>
      
      <HeroText />
      <HeroImage />
    </div>
  )
}

export default HeroSection