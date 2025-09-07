import React from 'react';
import { Code, Briefcase, GraduationCap, FileText } from 'lucide-react';
import StarsCanvas from '../Canvas/StarCanvas';

const TemplateSelector = ({ onSelectTemplate }) => {
  const templates = [
    {
      id: 'tech',
      name: 'Tech Professional',
      description: 'Perfect for developers and engineers',
      color: 'blue',
      icon: Code
    },
    {
      id: 'marketing',
      name: 'Creative Marketing',
      description: 'Ideal for marketing professionals',
      color: 'pink',
      icon: Briefcase
    },
    {
      id: 'academic',
      name: 'Academic Research',
      description: 'Great for academic and research positions',
      color: 'green',
      icon: GraduationCap
    },
    {
      id: 'minimal',
      name: 'Clean Minimal',
      description: 'Simple and professional design',
      color: 'gray',
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen  p-8 relative">
        <StarsCanvas/>
      <div className="max-w-6xl mx-auto mt-36">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Resume Template</h1>
          <p className="text-xl text-white-600">Select a template that matches your industry and style</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => {
            const IconComponent = template.icon;
            return (
              <div
                key={template.id}
                className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => onSelectTemplate(template)}
              >
                <div className="bg-white rounded-xl shadow-[0_0_20px_#00FFFF] backdrop-blur-md hover:-translate-y-3 transition-transform duration-300  p-6 h-full">
                  <div className={`w-12 h-12 bg-${template.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${template.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                  <div className="mt-auto">
                    <div className="h-32 bg-gray-50 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;