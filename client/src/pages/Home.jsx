import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../articles/hero/HeroSection";
import AboutSection from "../articles/aboutme/AboutSection";
import ExpertiseSection from "../articles/expertise/ExpertiseSection";
import PortfolioSection from "../articles/portfolio/PortfolioSection";
import Testimonials from "../articles/testimonial/Testimonials";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <PortfolioSection />
      <Testimonials />
    </MainLayout>
  );
};

export default Home;
