import React from "react";
import featured1 from "../../assets/featured1.png";
import featured2 from "../../assets/featured2.png";
import featured3 from "../../assets/featured3.png";
import featured4 from "../../assets/featured4.png";
import featured5 from "../../assets/featured5.png";
import featured6 from "../../assets/featured6.png";

const PortfolioCard = () => {
  const projects = [
    {
      imgg: featured1,
      title: "Task-Management Web App",
      description:
        "A task management web application designed to simplify productivity while staying visually engaging.",
      skill: ["Web Design", "UX Research"],
    },
    {
      imgg: featured2,
      title: "Job Applications Website",
      description:
        "ResumeAI is an intelligent platform designed to help users create, analyze, and optimize their resumes and job applications using AI.",
      skill: ["Web", "UX Research"],
    },
    {
      imgg: featured3,
      title: "Event Website",
      description:
        "Eventra is a modern event management platform built to simplify how events are planned, organized, and attended.",
      skill: ["Website", "UX Research"],
    },
    {
      imgg: featured4,
      title: "CICI Mobile App",
      description:
        "CICI is your personal wellness companion — designed to support, educate, and empower women through every phase of their journey.",
      skill: ["Analytics", "Dashboard"],
    },
    {
      imgg: featured5,
      title: "E-commerce Landing Page",
      description:
        "Smart technology, simplified. A clean design paired with powerful features — everything you need, nothing you don’t.",
      skill: ["E-commerce", "Landing Page"],
    },
    {
      imgg: featured6,
      title: "Restaurant Landing Page",
      description:
        "Where flavor meets comfort. Enjoy freshly prepared meals, rich aromas, and a dining experience that feels like home.",
      skill: ["Restaurant", "Website"],
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-4 mx-auto my-7">
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="w-[368.67px] h-[479.8px] border-[0.84px] border-[#FFFFFF1A] rounded-[25.12px]"
          >
            <img
              src={project.imgg}
              alt="project"
              className="w-full h-[275.24px] rounded-tl-[25.12px] rounded-tr-[25.12px]"
            />
            <div className="p-[25.12px]">
              <h3>{project.title}</h3>
              <p className="font-normal text-[#99A1AF] text-[14.65px] mb-5">
                {project.description}
              </p>
              <div className="flex items-center gap-3">
                {project.skill.map((item, index) => (
                  <button
                    key={index}
                    className="border-[0.84px] border-[#00B8DB33] w-[102.7px] h-[26.78px] rounded-[10.47px] font-medium text-[#00D3F3] text-[12.56px]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioCard;
