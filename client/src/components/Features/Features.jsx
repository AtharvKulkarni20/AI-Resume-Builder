import React from "react";

const Features = () => {
  const features = [
    {
      title: "Craft Your Best Resume in Minutes",
      description:
        "Say goodbye to outdated resumes! Effortlessly create a polished resume that catches recruiters' attention.",
    },
    {
      title: "Templates That Pass ATS Checks",
      description:
        "Ensure your resume isn't ignored by hiring software. Our templates are optimized to meet ATS requirements.",
    },
    {
      title: "Expertly Curated Content",
      description:
        "No more writer's block! Add pre-approved, professionally written content with ease.",
    },
    {
      title: "AI-Powered Assistance",
      description:
        "Speed up your resume creation with AI. Generate formal, professional phrases and summaries in seconds.",
    },
    {
      title: "Stand Out From the Crowd",
      description:
        "Our proven templates make you irresistible to recruiters, increasing your chances of getting hired.",
    },
    {
      title: "Maximize Your Earning Potential",
      description:
        "A strong resume leads to better offers. Use our salary insights to ensure your compensation is competitive.",
    },
  ];

  return (
    <>
      <div className=" h-screen text-white my-40">
        <h1 className="text-5xl text-center font-bold font-sans bg-gradient-to-r from-white to-[#00FFFF] bg-clip-text text-transparent">
          Features we offer...
        </h1>

        <div>
          <div>
            {features.map((feature) => (
              <div
                key={feature.id}
                className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8"
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-12 h-12"
                  />
                  <h1 className="text-2xl font-bold font-sans bg-gradient-to-r from-white to-[#00FFFF] bg-clip-text text-transparent">
                    {feature.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
