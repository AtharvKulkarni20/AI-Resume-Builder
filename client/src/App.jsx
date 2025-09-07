import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import LoginForm from "./components/Login/LogionForm";
import SignupForm from "./components/Signup/SignupForm";
import NotFoundPage from "./components/Error/NotFoundPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FeaturesSection from "./components/Features/FeaturesSection";
// ✅ new pages
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";


function AppContent() {
  const location = useLocation();
  const validRoutes = ["/", "/about", "/contact" , "/features",  "/resume", "/resume/form"];
  const isValidRoute = validRoutes.includes(location.pathname);

  return (
    <>
      {isValidRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/resume/*" element={<ResumeBuilder />} /> 

        <Route path="/features" element={<FeaturesSection />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isValidRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (

      <AppContent />

  );
}
