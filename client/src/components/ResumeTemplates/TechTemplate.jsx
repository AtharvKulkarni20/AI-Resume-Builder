import React from "react";

const TechTemplate = ({ data }) => (
  <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg" id="resume-template">
    <div className="border-b-4 border-blue-600 pb-6 mb-6">
      <h1 className="text-3xl font-bold text-gray-900">{data?.personalInfo?.fullName || 'Your Name'}</h1>
      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
        <span>{data?.personalInfo?.email}</span>
        <span>{data?.personalInfo?.phone}</span>
        <span>{data?.personalInfo?.location}</span>
        <span>{data?.personalInfo?.linkedIn}</span>
      </div>
      {data?.personalInfo?.professionalSummary && (
        <p className="mt-4 text-gray-700">{data.personalInfo.professionalSummary}</p>
      )}
    </div>

    {data?.experience?.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 mb-4">EXPERIENCE</h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{exp.jobTitle}</h3>
              <span className="text-sm text-gray-600">{exp.duration}</span>
            </div>
            <p className="text-gray-700 font-medium">{exp.company} - {exp.location}</p>
            <ul className="mt-2 list-disc list-inside text-sm">
              {exp.achievements?.map((achievement, i) => (
                <li key={i} className="text-gray-700">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}

    {data?.skills && (
      <div className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 mb-4">SKILLS</h2>
        <div className="grid grid-cols-2 gap-4">
          {data.skills.technical?.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Technical:</h4>
              <p className="text-sm text-gray-700">{data.skills.technical.join(', ')}</p>
            </div>
          )}
          {data.skills.tools?.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Tools:</h4>
              <p className="text-sm text-gray-700">{data.skills.tools.join(', ')}</p>
            </div>
          )}
        </div>
      </div>
    )}

    {data?.projects?.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 mb-4">PROJECTS</h2>
        {data.projects.map((project, idx) => (
          <div key={idx} className="mb-3">
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-700">{project.description}</p>
            <p className="text-xs text-gray-600 mt-1">Technologies: {project.technologies?.join(', ')}</p>
          </div>
        ))}
      </div>
    )}

    {data?.education?.length > 0 && (
      <div>
        <h2 className="text-xl font-bold text-blue-600 mb-4">EDUCATION</h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-2">
            <div className="flex justify-between">
              <h3 className="font-semibold">{edu.degree}</h3>
              <span className="text-sm text-gray-600">{edu.year}</span>
            </div>
            <p className="text-gray-700">{edu.institution}</p>
            {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default TechTemplate;
