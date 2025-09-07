import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Companies from "../../components/Companies/CompanyLogos";
import Features from "../../components/Features/FeaturesSection";
import Testomonials from "../../components/Testmonials/TestimonialsSection";
import Templates from "../../components/Template/TemplatesSection";
import MakeResumeSection from "../../components/MakeResume/MakeResumeSection";
import ResumeCount from "../../components/ResumeCount/ResumeCountSection";
import StarsCanvas from "@/components/Canvas/StarCanvas";
import { useState } from "react";

const HomePage = () => {
  const [animation, setAnimation] = useState({
    name: "starryNight",
    blendMode: "normal",
  });
  return (
    <>
      <div className="relative h-screen">
        <StarsCanvas />
        <HeroSection />
      </div>
      <Companies />
      <Features />
      <Templates />
      <MakeResumeSection />
      <ResumeCount />
      <Testomonials />
    </>
  );
};

export default HomePage;
