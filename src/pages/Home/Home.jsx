import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialSection from "./components/TestimonialSection";
import BenefitsSection from "./components/BenefitsSection";
import FooterSection from "./components/FooterSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* <TestimonialSection /> */}
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};

export default Home;
