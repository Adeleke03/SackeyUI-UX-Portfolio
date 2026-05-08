import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../articles/hero/HeroSection";
import AboutSection from "../articles/aboutme/AboutSection";
import ExpertiseSection from "../articles/expertise/ExpertiseSection";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
    </MainLayout>
  );
};

export default Home;
