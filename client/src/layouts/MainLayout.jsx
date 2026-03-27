import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer"


const MainLayout = ({children}) => {
  return (
    
    <div className='container mx-auto bg-[#0A0E1A] lg:mt-[24px]'>
      <Navbar />
      <main className=' '>
        {children}
      </main>
      <Footer />

    </div>
    
  );
};

export default MainLayout