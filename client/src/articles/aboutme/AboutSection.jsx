import React from "react";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";

const AboutSection = () => {
  return (
    <section className="relative py-16">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-[#000000] via-[#00B8DB] to-[#000000] opacity-30"></div>

      <div className="lg:flex items-center gap-10">
        <AboutMeImage />
        <AboutMeText />
      </div>
    </section>
  );
};

export default AboutSection;
