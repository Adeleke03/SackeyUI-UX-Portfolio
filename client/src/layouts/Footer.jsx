import React from "react";
import { Logo } from "../components/common/Logo";
import Pages from "../pages/Pages";

const Footer = () => {
  return (
    <footer className="text-[#99A1AF] lg:flex items-center justify-between border-t-[1px] h-[200px] border-white/10">
      <div>

      <Logo />
      <p className="tracking-normal text-sm/[20px] font-normal">Crafting digital experiences that inspire and engage</p>
      </div>
      <Pages excludeItems={['Home']}/>
      <p className="tracking-normal text-sm/[20px] font-normal">Made with love <span style={{color: 'red'}}>&#9829;</span> <span>&copy; 2026</span></p>
    </footer>
  );
};

export default Footer;
