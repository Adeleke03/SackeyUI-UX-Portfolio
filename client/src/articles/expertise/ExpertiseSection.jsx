import React from "react";
import ExpertiseText from "./ExpertiseText";
import ExpertiseCard from "../../components/ui/ExpertiseCard";
import ToolsAndTech from "./ToolsAndTech";

const ExpertiseSection = () => {
  return (
    <div id="Skills">
      <ExpertiseText />
      <ExpertiseCard />
      <ToolsAndTech />
    </div>
  );
};

export default ExpertiseSection;
