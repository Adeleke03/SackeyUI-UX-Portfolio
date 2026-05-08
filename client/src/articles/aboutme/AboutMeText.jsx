import React from "react";

const AboutMeText = () => {
  const skills = [
    "User Research",
    "Interface Design",
    "Prototyping",
    "Design Systems",
    "User Testing",
    "Collaboration",
  ];

  return (
    <div>
      <h3 className="uppercase font-medium text-[#00D3F3] text-[14.65px] ">
        About Me
      </h3>
      <h1 className="text-large-style">Passionate Designer</h1>
      <h1 className="aboutme-gradient-header font-bold text-[50.24px] ">
        Based in Nigeria
      </h1>
      <p className="text-[#99A1AF] font-normal text-[18.84px] w-[542.13px]">
        Hey! I'm a product designer who's passionate about making digital
        experiences feel effortless, human, and a little bit delightful. I enjoy
        the challenge of turning fuzzy ideas or complex problems into clean,
        intuitive interfaces that actually work — not just look good.
      </p>
      <p className="text-[#99A1AF] font-normal text-[18.84px] w-[542.13px] mt-5">
        Whether I'm prototyping in Figma, collaborating with devs, or refining
        the details that users might never notice (but always feel), I'm all
        about creating products that people love to use.
      </p>
      {/* skills */}
      <div className="grid grid-cols-3 gap-4 gap-x-0 mt-5">
        {skills.map((skill, index) => (
          <div
            className="w-[136px] h-[39px] flex items-center justify-center rounded-full border-[0.84px] border-[#00B8DB33] bg-[#00B8DB1A]  whitespace-nowrap
          "
            key={index}
          >
            <p className="text-[#00D3F3] font-medium text-[14.65px] text-center">
              {skill}
            </p>
          </div>
        ))}
      </div>
      {/* button */}
      <button className="text-[#ffffff] font-medium text-[18.75px] text-center mt-5 border-[0.84px] border-[#00B8DB4D] w-[181.25px] h-[60.28px] rounded-[14.65px] bg-linear-to-r from-[#00B8DB33] to-[#AD46FF33] ">
        Let's Connect
      </button>
    </div>
  );
};

export default AboutMeText;
