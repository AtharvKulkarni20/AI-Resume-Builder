import React from "react";

const badges = [
  {
    id: "AI",
    text: "AI-Powered",
  },
  {
    id: "ATS",
    text: "ATS-Friendly",
  },
  {
    id: "Templates",
    text: "Professional Templates",
  },
  {
    id: "Download",
    text: "Instant Download",
  },
];

const HeroSection = () => {
  return (
    <>
      <div className="h-screen text-center">
        <h1 className="text-5xl font-bold sm:w-1/3 mx-auto  mt-20 sm:mt-44 font-sans bg-gradient-to-r from-white to-[#00FFFF] bg-clip-text text-transparent">
          Make your professional resume
        </h1>
        <div className="w-full">
          <div className="bg-gray-200 mx-12 sm:mx-auto sm:w-1/3 rounded-xl">
            <p className="text-xl py-2 font-medium my-8 w-auto text-black">
              Create a stunning resume in seconds with AI Resume
            </p>
          </div>
        </div>
        <button className="text-black text-xl rounded-xl my-12 bg-[#00FFFF] hover:bg-[#00FFFF]/80 font-medium hover:text-gray-900 py-4 px-6 border border-[#00FFFF] hover:border-transparent ">
          Get Started
        </button>
        <div>
          {badges.map((badge) => (
            <p
              className="inline-block font-medium px-4 py-2 mx-4 my-1 border-2 border-[#00FFFF] rounded-xl shadow-[0_0_15px_#00FFFF] backdrop:blur-md  hover:-translate-y-3 transition-transform duration-300"
              key={badge.id}
            >
              {badge.text}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
