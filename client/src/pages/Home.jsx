import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../articles/hero/HeroSection";
import AboutSection from "../articles/aboutme/AboutSection";
import ExpertiseSection from "../articles/expertise/ExpertiseSection";
import PortfolioSection from "../articles/portfolio/PortfolioSection";
import Testimonials from "../articles/testimonial/Testimonials";
import ContactSection from "../articles/GetInTouch/ContactSection";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <PortfolioSection />
      <Testimonials />
      <ContactSection/>
            <div className="h-[0.8px] mt-9 hidden lg:block  w-full bg-gradient-to-r from-transparent via-[#00D3F3] to-transparent"></div>       

    </MainLayout>
  );
};

export default Home;
