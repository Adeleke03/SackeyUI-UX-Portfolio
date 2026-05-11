import React from 'react'
import ContactText from './ContactText'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <div id='Contact' className='relative px-5 bg-gradient-to-b from-[#0A0E1A] to-[#0C111D] min-h-screen overflow-x-hidden'>
      
      {/* RESPONSIVE GLOW - Different sizes for different screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[120%] h-[80%] 
          sm:w-[100%] sm:h-[70%] 
          md:w-[80%] md:h-[60%] 
          lg:w-[70%] lg:h-[70%]
          bg-[radial-gradient(ellipse_at_center,_rgba(0,211,243,0.04)_0%,_rgba(0,211,243,0.01)_50%,_transparent_100%)]">
        </div>
      </div>
      
      <div className='relative z-10 lg:flex lg:gap-10'>
        <ContactText/>
        <ContactForm/> 
      </div>
      
      <div className="relative lg:hidden z-10 mt-16 h-[0.8px] w-full bg-gradient-to-r from-transparent via-[#00D3F3] to-transparent opacity-40"></div>
    </div>
  )
}

export default ContactSection