import React from 'react'
import MainLayout from '../layouts/MainLayout'
import HeroSection from '../articles/hero/HeroSection';
import AboutSection from '../articles/aboutme/AboutSection';

const Home = () => {
  return (
  <MainLayout>
    <HeroSection />
    <AboutSection  />
  </MainLayout>
  );
};

export default Home