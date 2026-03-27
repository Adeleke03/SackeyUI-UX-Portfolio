import React from 'react'
import AboutMeImage from './AboutMeImage'
import AboutMeText from './AboutMeText'

const AboutSection = () => {
  return (
    <section className='relative'>
     <div className="absolute top-0  w-full h-[1px] bg-gradient-to-r from-[#000000] via-[#00B8DB] to-[#000000] opacity-30"></div>

    <div className='absolute top-[64.05px] lg:flex '>
        <AboutMeImage />
        <AboutMeText />
    </div>
    </section>
  )
}

export default AboutSection