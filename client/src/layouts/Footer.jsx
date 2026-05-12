import React from "react";
import { Logo } from "../components/common/Logo";
import Pages from "../pages/Pages";

const Footer = () => {
  return (
    <footer className="text-[#99A1AF] px-5 flex flex-col lg:flex-row items-center justify-between border-t border-white/10 py-8 lg:gap-6 gap-[32px]">
      <div className="flex flex-col gap-[15.99px] ">
        <Logo />
        <p className="tracking-normal text-sm/[20px] text-[14px] leading-[20px] font-normal">
          Crafting digital experiences that inspire and engage
        </p>
      </div>
      <Pages className="flex-row gap-3" excludeItems={["Home"]} />
      <div>
        <p className="tracking-normal text-sm/[20px] font-normal text-[14px] leading-[20px]">
          Made with love{" "}
          <span style={{ color: "red", fontSize: "21px" }}>&#9829;</span>{" "}
          <span>&copy; 2026</span>
        </p>
      </div>
      <div className="h-[1.5px] mt-9 lg:hidden   w-full bg-gradient-to-r from-transparent via-[#00D3F3] to-transparent"></div>
    </footer>
  );
};

export default Footer;
