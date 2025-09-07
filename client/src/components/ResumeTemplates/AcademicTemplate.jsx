import React from "react";

const AcademicTemplate = ({ data }) => (
  <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg" id="resume-template">
    <div className="mb-8">
      <h1 className="text-3xl font-serif text-center text-gray-900 mb-2">{data?.personalInfo?.fullName || 'Your Name'}</h1>
      <div className="text-center text-sm text-gray-600">
        {data?.personalInfo?.email} | {data?.personalInfo?.phone} | {data?.personalInfo?.location}
      </div>
      {data?.personalInfo?.professionalSummary && (
        <p className="mt-6 text-gray-700 text-center">{data.personalInfo.professionalSummary}</p>
      )}
    </div>

    {data?.education?.length > 0 && (
      <div className="mb-8">
        <h2 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">EDUCATION</h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-semibold">{edu.degree}</h3>
              <span className="text-sm">{edu.year}</span>
            </div>
            <p className="italic">{edu.institution}</p>
            {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
            {edu.relevantCoursework?.length > 0 && (
              <p className="text-sm mt-1">Relevant Coursework: {edu.relevantCoursework.join(', ')}</p>
            )}
          </div>
        ))}
      </div>
    )}

    {data?.experience?.length > 0 && (
      <div className="mb-8">
        <h2 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">EXPERIENCE</h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-semibold">{exp.jobTitle}</h3>
              <span className="text-sm">{exp.duration}</span>
            </div>
            <p className="italic">{exp.company}, {exp.location}</p>
            <ul className="mt-2 list-disc list-inside text-sm">
              {exp.achievements?.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default AcademicTemplate;
