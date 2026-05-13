import React from "react";

const PortfolioText = () => {
  return (
    <div>
      <div className="flex justify-center mb-5">
        <div className="relative inline-block">
          <h3 className="uppercase font-medium text-[#00D3F3] text-[14px] lg:text-[14.65px] mb-5 lg:mb-0">
            Portfolio
          </h3>
          <div className="absolute left-0 top-[105%] w-full h-px bg-linear-to-r from-[#00D3F3] to-[#00000000]" />
        </div>
      </div>
      <h2 className="font-bold text-[50.24px] text-center mb-3">
        <span className=" text-[#ffffff]">Featured</span>
        <br className="lg:hidden" />
        <span className="aboutme-gradient-header">Projects</span>
      </h2>
      <div className="md:flex justify-center items-center">
        <p className="text-[18px] lg:text-[20px] text-[#99A1AF] font-normal w-90 md:w-[90%] text-center lg:w-[803.78px] ">
          A curated selection of my recent work across mobile and web platforms,
          showcasing user-centered design solutions.
        </p>
      </div>
    </div>
  );
};

export default PortfolioText;
