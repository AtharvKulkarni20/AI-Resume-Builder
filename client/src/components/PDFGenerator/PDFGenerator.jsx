import React from 'react';
import { Download, Award } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const PDFGenerator = ({ TemplateComponent, resumeData, onReset }) => {
  const downloadPDF = async () => {
    const element = document.getElementById('resume-template');
    const opt = {
      margin: 0.5,
      filename: `${resumeData.personalInfo.fullName || 'Resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your AI-Enhanced Resume</h2>
              <p className="text-gray-600">Review your resume and download when ready</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={onReset}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Start Over
              </button>
              <button
                onClick={downloadPDF}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <TemplateComponent data={resumeData} />
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <Award className="w-5 h-5 text-green-600 mr-2" />
            <p className="text-green-800">
              <strong>Success!</strong> Your resume has been enhanced with AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFGenerator;