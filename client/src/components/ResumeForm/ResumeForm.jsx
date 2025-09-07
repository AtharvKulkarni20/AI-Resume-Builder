import React, { useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Loader,
} from "lucide-react";
import StarsCanvas from "../Canvas/StarCanvas";


const ResumeForm = ({ templateType, onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: "",
      portfolio: "",
      professionalSummary: "",
    },
    experience: [
      {
        jobTitle: "",
        company: "",
        duration: "",
        location: "",
        achievements: [""],
      },
    ],
    education: [
      {
        degree: "",
        institution: "",
        year: "",
        gpa: "",
        relevantCoursework: [],
      },
    ],
    skills: { technical: [], soft: [], languages: [], tools: [] },
    projects: [{ name: "", description: "", technologies: [], highlights: [] }],
    achievements: [],
    certifications: [],
  });

  const handlePersonalInfoChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          jobTitle: "",
          company: "",
          duration: "",
          location: "",
          achievements: [""],
        },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen  p-8 relative">
        <StarsCanvas/>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-[0_0_20px_#00FFFF] backdrop-blur-md mb-16 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Tell us about yourself
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.personalInfo.fullName}
                  onChange={(e) =>
                    handlePersonalInfoChange("fullName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg  text-black focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.personalInfo.email}
                  onChange={(e) =>
                    handlePersonalInfoChange("email", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.personalInfo.phone}
                  onChange={(e) =>
                    handlePersonalInfoChange("phone", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={formData.personalInfo.location}
                  onChange={(e) =>
                    handlePersonalInfoChange("location", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                />
              </div>
              <textarea
                placeholder="Professional Summary (Tell us about your career goals and key strengths)"
                value={formData.personalInfo.professionalSummary}
                onChange={(e) =>
                  handlePersonalInfoChange("professionalSummary", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent mt-4"
                rows="4"
              />
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Work Experience
              </h3>
              {formData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 mb-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Job Title"
                      value={exp.jobTitle}
                      onChange={(e) =>
                        handleExperienceChange(index, "jobTitle", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) =>
                        handleExperienceChange(index, "company", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Duration (e.g., Jan 2020 - Present)"
                      value={exp.duration}
                      onChange={(e) =>
                        handleExperienceChange(index, "duration", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={exp.location}
                      onChange={(e) =>
                        handleExperienceChange(index, "location", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                    />
                  </div>
                  <textarea
                    placeholder="Describe your key achievements and responsibilities (separate each point with a new line)"
                    value={exp.achievements.join("\n")}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        "achievements",
                        e.target.value
                          .split("\n")
                          .filter((item) => item.trim())
                      )
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent mt-4"
                    rows="4"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addExperience}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                + Add Another Experience
              </button>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Skills
              </h3>
              <textarea
                placeholder="Technical Skills (separate with commas: React, Node.js, Python, etc.)"
                value={formData.skills.technical.join(", ")}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      technical: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter((s) => s),
                    },
                  }))
                }
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent mb-4"
                rows="3"
              />
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Degree"
                  value={formData.education[0].degree}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      education: [
                        { ...prev.education[0], degree: e.target.value },
                      ],
                    }))
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Institution"
                  value={formData.education[0].institution}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      education: [
                        { ...prev.education[0], institution: e.target.value },
                      ],
                    }))
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Graduation Year"
                  value={formData.education[0].year}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      education: [
                        { ...prev.education[0], year: e.target.value },
                      ],
                    }))
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="GPA (optional)"
                  value={formData.education[0].gpa}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      education: [
                        { ...prev.education[0], gpa: e.target.value },
                      ],
                    }))
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                />
              </div>
            </div>

            {/* Projects (only for tech template) */}
            {templateType === "tech" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Projects
                </h3>
                <div className="border border-gray-200 rounded-lg p-4">
                  <input
                    type="text"
                    placeholder="Project Name"
                    value={formData.projects[0].name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        projects: [
                          { ...prev.projects[0], name: e.target.value },
                        ],
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent mb-4"
                  />
                  <textarea
                    placeholder="Project Description"
                    value={formData.projects[0].description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        projects: [
                          { ...prev.projects[0], description: e.target.value },
                        ],
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent mb-4"
                    rows="3"
                  />
                  <input
                    type="text"
                    placeholder="Technologies Used (separate with commas)"
                    value={formData.projects[0].technologies.join(", ")}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        projects: [
                          {
                            ...prev.projects[0],
                            technologies: e.target.value
                              .split(",")
                              .map((s) => s.trim())
                              .filter((s) => s),
                          },
                        ],
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:border-transparent"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-white to-[#00FFFF] border border-black rounded-xl text-black py-4 px-4  font-semibold text-lg  transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader className="animate-spin w-5 h-5 mr-2" />
                  Processing with AI...
                </>
              ) : (
                "Generate My Resume"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
