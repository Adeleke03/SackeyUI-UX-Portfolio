const HeroImage = () => {
  const caseStudyText = "4+ Case Studies";
  const caseStudyP = "Successfully Done";
  const checkMark = "✓";
  return (
    <div className="relative min-h-screen">
      <div className="top-[-16.7px] left-[469px] z-98 absolute border-[1.67px] border-[#00B8DB]/30 w-[100.5px] h-[100.5px] rounded-[28094142px] "></div>
      <div className="top-[597px] left-[-16.7px] z-99 absolute border-[1.67px] border-[#AD46FF]/30 w-[134px] h-[134px] rounded-[28094142px]"></div>
    <div className="relative rounded-[25px] lg:mr-[33px]  border-[0.8px] border-white/10 hero-image-bg-gradient lg:w-[553px] lg:h-[714.5px] overflow-hidden">
      <div className="relative top-[34.33px] left-[34.33px] rounded-[16.75px] w-[484.36px] h-[645.81px]">
        
        <div className="relative">
         
          <img src="/Container.png" alt="" /> 
          {/* Rating Div */}
          <div className="absolute bg-[#0F1419]/90 bottom-0 right-0 rounded-[16.75px] border-[0.84px] border-[#AD46FF]/20 h-[81.63px] w-[197.8px] shadow-[0px_26.16px_52.33px_-12.56_#000000]/25 px-[17.58px] pt-[17.58px] pb-[0.84px] flex gap-[12.56px]">
          <div className="aboutme-rating-bg-gradient w-[41.86px] h-[41.86px] rounded-[28094142px] text-center justify-center flex items-center text-white">☆</div>
          <div>
            <h2 className="text-[#C27AFF] font-bold text-[16.75px] whitespace-nowrap leading-[25px] tracking-normal">5-Star Rating</h2>
            <p className="text-[#6A7282] tracking-normal leading-[20.93px] text-[14.65px] font-regular">on LinkedIn</p>
          </div>
          </div>
          {/* Case study */}
          <div className="absolute bg-[#0F1419]/90 top-0 left-0 rounded-[16.75px] border-[0.84px] border-[#AD46FF]/20 h-[81.63px] w-[227.1px] shadow-[0px_26.16px_52.33px_-12.56_#000000]/25 px-[17.58px] pt-[17.58px] pb-[0.84px] flex gap-[12.56px]">
          <div className="aboutme-caseStudy-bg-gradient w-[41.86px] h-[41.86px] rounded-[28094142px] text-center justify-center flex items-center text-white">{checkMark}</div>
          <div>
            <h2 className="text-[#C27AFF] font-bold text-[16.75px] whitespace-nowrap leading-[25px] tracking-normal">{caseStudyText}</h2>
            <p className="text-[#6A7282] tracking-normal leading-[20.93px] text-[14.65px] font-regular">{caseStudyP}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroImage;