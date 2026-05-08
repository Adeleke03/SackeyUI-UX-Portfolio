import React from "react";
import ExpertiseText from "./ExpertiseText";
import ExpertiseCard from "../../components/ui/ExpertiseCard";
import ToolsAndTech from "./ToolsAndTech";

const ExpertiseSection = () => {
  return (
    <div id="Skills" className="py-16">
      <ExpertiseText />
      <ExpertiseCard />
      <ToolsAndTech />
    </div>
  );
};

export default ExpertiseSection;
