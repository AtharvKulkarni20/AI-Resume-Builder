import React from "react";

const MinimalTemplate = ({ data }) => (
  <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg" id="resume-template">
    <div className="mb-8">
      <h1 className="text-2xl font-light text-gray-900 mb-1">{data?.personalInfo?.fullName || 'Your Name'}</h1>
      <div className="text-sm text-gray-600 mb-4">
        {data?.personalInfo?.email} • {data?.personalInfo?.phone} • {data?.personalInfo?.location}
      </div>
      <hr className="border-gray-300" />
      {data?.personalInfo?.professionalSummary && (
        <p className="mt-4 text-gray-700 text-sm">{data.personalInfo.professionalSummary}</p>
      )}
    </div>

    {data?.experience?.length > 0 && (
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Experience</h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium">{exp.jobTitle}</h3>
              <span className="text-xs text-gray-500">{exp.duration}</span>
            </div>
            <p className="text-sm text-gray-600">{exp.company}</p>
            <ul className="mt-1 text-sm">
              {exp.achievements?.map((achievement, i) => (
                <li key={i} className="text-gray-700">• {achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}

    <div className="grid grid-cols-2 gap-8">
      <div>
        {data?.skills && (
          <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Skills</h2>
            <p className="text-sm text-gray-700">{data.skills.technical?.join(' • ')}</p>
          </div>
        )}
      </div>
      <div>
        {data?.education?.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Education</h2>
            {data.education.map((edu, idx) => (
              <div key={idx}>
                <h3 className="font-medium text-sm">{edu.degree}</h3>
                <p className="text-sm text-gray-600">{edu.institution} • {edu.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default MinimalTemplate;
