import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Companies from "../../components/Companies/Companies";
import Features from "../../components/Features/Features";
import Testomonials from "../../components/Testmonials/Testmonials";
import Templates from "../../components/Templates/Templates";
import MakeResume from "../../components/MakeResume/MakeResume";
import ResumeCount from "../../components/ResumeCount/ResumeCount";
import Footer from "../../components/Footer/Footer";
import { AnimatedBackground } from 'animated-backgrounds';
import { useState } from "react";



const HomePage = () => {
  const [animation, setAnimation] = useState({
    name: 'starryNight',
    blendMode: 'normal'
    

  });
  return (
    <>
      <div className="relative h-screen">
      <AnimatedBackground 
        animationName={animation.name}
        blendMode={animation.blendMode}
        style={{ opacity: 0.5 }}
      />
        <NavBar />
        <HeroSection />
      </div>
      <Companies />
      <Features />
      <Templates />
      <MakeResume />
      <ResumeCount />
      <Testomonials />
      <Footer />
    </>
  );
};

export default HomePage;
