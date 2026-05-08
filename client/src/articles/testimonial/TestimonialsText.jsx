import React from "react";

const TestimonialsText = () => {
  return (
    <div>
      <div className="flex justify-center mb-5">
        <div className="relative inline-block">
          <h3 className="uppercase font-medium text-[#00D3F3] text-[14px] lg:text-[14.65px] mb-5 lg:mb-0">
            Testimonials
          </h3>
          <div className="absolute left-0 top-[105%] w-full h-px bg-linear-to-r from-[#00D3F3] to-[#00000000]" />
        </div>
      </div>
      <h2 className="font-bold text-[50.24px] text-center mb-3">
        <span className=" text-[#ffffff]">What Clients</span>
        <br className="lg:hidden" />
        <span className="aboutme-gradient-header">Say</span>
      </h2>
      <div className="lg:flex justify-center">
        <p className="text-[18px] lg:text-[20px] text-[#99A1AF] font-normal w-90 md:w-120 text-center lg:w-[803.78px] ">
          Trusted by startups and enterprises to deliver exceptional design
          solutions
        </p>
      </div>
    </div>
  );
};

export default TestimonialsText;
