import React from "react";

const ExpertiseText = () => {
  return (
    <div>
      <div className="flex justify-center mb-5">
        <div className="relative inline-block">
          <h3 className="uppercase font-medium text-[#00D3F3] text-[14px] lg:text-[14.65px] mb-5 lg:mb-0">
            Expertise
          </h3>
          <div className="absolute left-0 top-[105%] w-full h-[1px] bg-linear-to-r from-[#00D3F3] to-[#00000000]" />
        </div>
      </div>
      <h2 className="font-bold text-[50.24px] text-center mb-3">
        <span className=" text-[#ffffff]">Core</span>
        <span className="aboutme-gradient-header">Skills</span>
      </h2>
      <div className="lg:flex justify-center">
        <p className="text-[18px] lg:text-[20px] text-[#99A1AF] font-normal w-90 md:w-120 text-center lg:w-[803.78px] ">
          I am skilled in UX/UI design, creating intuitive interfaces and
          seamless user flows, and experienced in building scalable design
          systems and interactive prototypes.
        </p>
      </div>
    </div>
  );
};

export default ExpertiseText;
