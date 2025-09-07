import React from "react";

const MarketingTemplate = ({ data }) => (
  <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg" id="resume-template">
    <div className="text-center border-b-2 border-pink-500 pb-6 mb-6">
      <h1 className="text-4xl font-bold text-gray-900">{data?.personalInfo?.fullName || 'Your Name'}</h1>
      <div className="flex justify-center gap-6 mt-2 text-sm text-gray-600">
        <span>{data?.personalInfo?.email}</span>
        <span>{data?.personalInfo?.phone}</span>
        <span>{data?.personalInfo?.location}</span>
      </div>
      {data?.personalInfo?.professionalSummary && (
        <p className="mt-4 text-gray-700 italic">{data.personalInfo.professionalSummary}</p>
      )}
    </div>

    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        {data?.experience?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-pink-600 mb-4 uppercase">Experience</h2>
            {data.experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-bold text-lg text-gray-900">{exp.jobTitle}</h3>
                <p className="text-pink-600 font-medium">{exp.company} | {exp.duration}</p>
                <ul className="mt-2 list-disc list-inside text-sm">
                  {exp.achievements?.map((achievement, i) => (
                    <li key={i} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-1">
        {data?.skills && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-pink-600 mb-4 uppercase">Skills</h2>
            {data.skills.technical?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Marketing Tools:</h4>
                <div className="flex flex-wrap gap-1">
                  {data.skills.technical.map((skill, i) => (
                    <span key={i} className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {data?.education?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-pink-600 mb-4 uppercase">Education</h2>
            {data.education.map((edu, idx) => (
              <div key={idx} className="mb-3">
                <h3 className="font-semibold text-sm">{edu.degree}</h3>
                <p className="text-gray-700 text-sm">{edu.institution}</p>
                <p className="text-gray-600 text-xs">{edu.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default MarketingTemplate;
