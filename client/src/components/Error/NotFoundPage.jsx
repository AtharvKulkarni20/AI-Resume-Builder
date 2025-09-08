import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Home, ArrowLeft, FileText, Search } from "lucide-react";
import StarsCanvas from "../Canvas/StarCanvas";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <main className="flex-1 flex items-center justify-center px-6 min-h-screen relative">
      <Link
        to="/"
        className="absolute top-6 left-16 flex gap-2 items-center z-50"
      >
        <img src="./src/assets/AIR.png" alt="Logo" className="w-12 h-10" />
        <p className="text-2xl font-bold hover:text-[#00FFFF]/80">
          <span className="text-[#00FFFF]">|</span> AI Resume
        </p>
      </Link>

      <StarsCanvas/>
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent font-sans bg-gradient-to-r from-white to-[#00FFFF]  bg-clip-text leading-none">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-gray-800 -z-10 translate-x-1 translate-y-1">
            404
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={handleGoHome}
            className="flex items-center space-x-2 px-6 py-3 bg-[#00FFFF] rounded-xl text-black  hover:bg-cyan-500 transition-all transform hover:scale-105 font-medium"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </button>

          <button
            onClick={handleGoBack}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-400 hover:text-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Or try these popular pages:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/create-resume"
              className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 hover:bg-gray-900 transition-all group"
            >
              <FileText className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-medium text-white">
                Create Resume
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Build your professional resume
              </div>
            </Link>

            <Link
              to="/templates"
              className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 hover:bg-gray-900 transition-all group"
            >
              <Search className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-medium text-white">Templates</div>
              <div className="text-xs text-gray-400 mt-1">
                Browse resume templates
              </div>
            </Link>

            <Link
              to="/features"
              className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 hover:bg-gray-900 transition-all group"
            >
              <Home className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-medium text-white">Features</div>
              <div className="text-xs text-gray-400 mt-1">
                Explore our features
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
