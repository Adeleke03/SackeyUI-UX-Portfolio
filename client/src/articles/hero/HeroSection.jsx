import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const HeroSection = () => {
  return (
    <div className='lg:mt-[75px] lg:pb-9 px-5 lg:flex justify-between relative'>

      {/* GLOWS - Exact design specs with responsive adjustments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Purple Glow (#AD46FF) */}
        <div className="absolute 
          w-[401.89px] h-[401.89px]
          md:w-[300px] md:h-[300px]
          lg:w-[401.89px] lg:h-[401.89px]
          rounded-full
          bg-[radial-gradient(circle,_#AD46FF33_0%,_rgba(173,70,255,0.3)_40%,_transparent_80%)]
          opacity-[52px] blur-[251.18px]"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Cyan Glow (#00B8DB) */}
        <div className="absolute 
          w-[401.89px] h-[401.89px]
          md:w-[300px] md:h-[300px]
          lg:w-[401.89px] lg:h-[401.89px]
          rounded-full
          bg-[radial-gradient(circle,_#00B8DB33_0%,_rgba(0,184,219,0.3)_40%,_transparent_80%)]
          opacity-[52px] blur-[251.18px]"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Combined glow for blending effect */}
        <div className="absolute 
          w-[401.89px] h-[401.89px]
          md:w-[300px] md:h-[300px]
          lg:w-[401.89px] lg:h-[401.89px]
          rounded-full
          bg-[radial-gradient(circle,_rgba(0,184,219,0.15)_0%,_rgba(173,70,255,0.15)_50%,_transparent_100%)]
          opacity-[52px] blur-[200px]"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        
      </div>
      
      <HeroText />
      <HeroImage />
    </div>
  )
}

export default HeroSection