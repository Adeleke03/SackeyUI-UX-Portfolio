import React from "react";

const ToolsAndTech = () => {
  const tools = ["Figma", "Chat GPT", "FigJam", "Notion", "Slack"];
  return (
    <div>
      <h1 className="font-bold text-[25px] text-center mb-5">
        Tools & Technologies
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 w-fit mx-auto lg:w-200 gap-8 lg:gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`border-[0.84px] border-[#FFFFFF] w-25 h-13  ${
              index === tools.length - 1
                ? "col-span-2 justify-self-center lg:col-span-1"
                : ""
            } rounded-[14.65px] flex items-center justify-center bg-linear-to-b from-[#FFFFFF0D] to-[#00000000]`}
          >
            <p>{tool}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndTech;
