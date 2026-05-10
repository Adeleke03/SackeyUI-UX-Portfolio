import React from "react";
import { Logo } from "../components/common/Logo";
import Pages from "../pages/Pages";

const Footer = () => {
  return (
    <footer className="text-[#99A1AF] flex flex-col lg:flex-row items-center justify-between border-t border-white/10 py-8 gap-6">
      <div>
        <Logo />
        <p className="tracking-normal text-[14px] lg:text-sm/[20px] font-normal mt-3 lg:mt-0">
          Crafting digital experiences that inspire and engage
        </p>
      </div>
      <Pages
        excludeItems={["Home"]}
        className="max-md:text-[14px] gap-5 lg:gap-15"
      />
      <p className="tracking-normal text-sm/[20px] font-normal">
        Made with love <span style={{ color: "red" }}>&#9829;</span>{" "}
        <span>&copy; 2026</span>
      </p>
    </footer>
  );
};

export default Footer;
