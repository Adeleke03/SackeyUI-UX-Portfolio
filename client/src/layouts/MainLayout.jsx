import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer"


const MainLayout = ({children}) => {
  return (
    
    <div className='container mx-auto bg-[#0A0E1A] mt-5'>
      <Navbar />
      <main className='h-[85vh] '>
        {children}
      </main>
      <Footer />

    </div>
    
  );
};

export default MainLayout