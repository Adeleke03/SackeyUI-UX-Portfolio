import Hamburger from 'hamburger-react'
import { useState } from "react";
import Pages from '../pages/Pages';
import MyButton from '../components/common/MyButton';

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div className='border-[1.18px] border-white/10 rounded-[14px] bg-white/5 cursor-pointer'>
    <Hamburger  toggled={isOpen} toggle={setIsOpen} />
    {isOpen && (
        <div className='menu rounded-[16px] border-[1.18px] w-[319.59px] h-[370px] px-[17.17px] pt-[17.17px] pb-[1.18px]'>
            <Pages />
            <MyButton
        text="navtext"
        className=""
      />
        </div>
    )}
  </div>
  );
};

export default HamburgerNav;
