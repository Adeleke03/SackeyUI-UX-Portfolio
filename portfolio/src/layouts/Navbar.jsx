import React from 'react'
import { Logo } from '../components/Logo'
import MyButton from '../components/MyButton'

const Navbar = () => {
  return (
    <>
    {/* mobile view  */}
    <nav className='lg:hidden flex justify-between items-center text-white'>
    <Logo />
    <MyButton/>

    </nav>
  {/* desktop view */}
    <nav>

    </nav>


        
        </>
  )
}

export default Navbar