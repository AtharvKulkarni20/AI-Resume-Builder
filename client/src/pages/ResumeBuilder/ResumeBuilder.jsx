import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Components
import TemplateSelector from "@/components/TemplateSelector/TemplateSelector";
import ResumeForm from "@/components/ResumeForm/ResumeForm";
import PDFGenerator from "@/components/PDFGenerator/PDFGenerator";

// Services & Utils
import { processWithGemini } from "@/Services/geminiAPI";
import { enhanceDataLocally } from "@/utils/dataEnhancer";

// Templates
import TechTemplate from "@/components/ResumeTemplates/TechTemplate";
import MarketingTemplate from "@/components/ResumeTemplates/MarketingTemplate";
import AcademicTemplate from "@/components/ResumeTemplates/AcademicTemplate";
import MinimalTemplate from "@/components/ResumeTemplates/MinimalTemplate";

const templates = {
  tech: TechTemplate,
  marketing: MarketingTemplate,
  academic: AcademicTemplate,
  minimal: MinimalTemplate,
};

export default function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    navigate("/resume/form");
  };

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const enhancedData = await processWithGemini(formData, selectedTemplate);
      setResumeData(enhancedData);
      navigate("/resume/preview");
    } catch (error) {
      console.error("Error processing resume data:", error);
      const fallbackData = enhanceDataLocally(formData);
      setResumeData(fallbackData);
      navigate("/resume/preview");
    } finally {
      setIsLoading(false);
    }
  };

  const resetBuilder = () => {
    setSelectedTemplate(null);
    setResumeData(null);
    navigate("/resume");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<TemplateSelector onSelectTemplate={handleTemplateSelect} />}
      />
      <Route
        path="/form"
        element={
          <ResumeForm
            templateType={selectedTemplate?.id}
            onSubmit={handleFormSubmit}
            isLoading={isLoading}
          />
        }
      />
      <Route
        path="/preview"
        element={
          resumeData ? (
            <PDFGenerator
              TemplateComponent={templates[selectedTemplate?.id]}
              resumeData={resumeData}
              onReset={resetBuilder}
            />
          ) : (
            <p>No data found. Please go back.</p>
          )
        }
      />
    </Routes>
  );
}
