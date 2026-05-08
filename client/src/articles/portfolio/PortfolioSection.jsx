import React from "react";
import PortfolioText from "./PortfolioText";
import PortfolioCard from "../../components/ui/PortfolioCard";
import arrowright from "../../assets/arrowright.png";

const PortfolioSection = () => {
  return (
    <div id="Projects" className="py-16">
      <PortfolioText />
      <PortfolioCard />
      <button className="border-[0.84px] border-[#00B8DB4D] bg-linear-to-r from-[#00B8DB33] to-[#AD46FF33] w-[229.81px] h-[60.28px] rounded-[14.65px] flex items-center justify-center gap-4 mx-auto cursor-pointer">
        <p>View All Projects</p> <img src={arrowright} alt="arrow" />
      </button>
    </div>
  );
};

export default PortfolioSection;
