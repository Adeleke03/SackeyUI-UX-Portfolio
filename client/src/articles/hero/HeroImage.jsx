const HeroImage = () => {
  const caseStudyText = "4+ Case Studies";
  const caseStudyP = "Successfully Done";
  const checkMark = "✓";
  return (
    <div className="relative  my-15 lg:my-0">

          
      <div className="md:top-[-16.7px] top-[-15px] lg:right-0 right-[-15px]  z-98 absolute border-[1.67px] border-[#00B8DB]/30 md:w-[134px] md:h-[134px] w-[95px] h-[95px] lg:rounded-[28094142px] rounded-[39602500px] "></div>
      <div className="md:top-[597px] bottom-[-15px]   left-[-15px]  z-99 absolute border-[1.67px] border-[#AD46FF]/30 lg:w-[134px] lg:h-[134px]  w-[95px] h-[95px] lg:rounded-[28094142px] rounded-[39602500px]"></div>
          

          {/* case study and rating div overflow to hide */}
    <div className="relative rounded-[25px]   lg:mr-[33px]  border-[0.8px] border-white/10 hero-image-bg-gradient lg:w-[553px] lg:h-[714.5px] md:h-[650px]  overflow-hidden flex items-center justify-center">   

          {/* Rating Div */}
          <div className="z-99 absolute bg-[#0F1419]/90 bottom-0 right-0 rounded-[16.75px] border-[0.84px] border-[#AD46FF]/20 h-[81.63px] w-[197.8px] shadow-[0px_26.16px_52.33px_-12.56_#000000]/25 px-[17.58px] pt-[17.58px] pb-[0.84px] flex gap-[12.56px]">
          <div className="aboutme-rating-bg-gradient w-[41.86px] h-[41.86px] rounded-[28094142px] text-center justify-center flex items-center text-white">☆</div>
          <div>
            <h2 className="text-[#C27AFF] font-bold text-[16.75px] whitespace-nowrap leading-[25px] tracking-normal">5-Star Rating</h2>
            <p className="text-[#6A7282] tracking-normal leading-[20.93px] text-[14.65px] font-regular">on LinkedIn</p>
          </div>
          </div>
          {/* Case study */}
          <div className="z-99 absolute bg-[#0F1419]/90 top-0 left-0 rounded-[16.75px] border-[0.84px] border-[#00B8DB33] h-[81.63px] w-[227.1px] shadow-[0px_26.16px_52.33px_-12.56_#000000]/25 px-[17.58px] pt-[17.58px] pb-[0.84px] flex gap-[12.56px]">
          <div className="aboutme-caseStudy-bg-gradient w-[41.86px] h-[41.86px] rounded-[28094142px] text-center justify-center flex items-center text-white">{checkMark}</div>
          <div>
            <h2 className="text-[#00D3F3] font-bold text-[16.75px] whitespace-nowrap leading-[25px] tracking-normal">{caseStudyText}</h2>
            <p className="text-[#6A7282] tracking-normal leading-[20.93px] text-[14.65px] font-regular">{caseStudyP}</p>
          </div>
          </div>
          

      <div className="px-3 pt-5 top-[34.33px] left-[34.33px] rounded-[16.75px] w-[484.36px] md:h-[645.81px] h-[450px]">
        
        <div className="">
         
          <img src="/Container.png" alt="" /> 
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default HeroImage;