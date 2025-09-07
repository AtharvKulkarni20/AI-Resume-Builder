// 🔑 GET YOUR API KEY FROM GOOGLE CLOUD CONSOLE
const GEMINI_API_KEY = 'AIzaSyAeqNDIj-ArlhCEOuPSVXRwXlWfLsbU_4I'; // Replace with your key

export const processWithGemini = async (formData, selectedTemplate) => {
  const prompt = `You are a professional resume writer and career consultant. Transform the following raw resume data into polished, professional content. Return the response in valid JSON format only.

Requirements:
- Enhance descriptions with action verbs and quantifiable achievements
- Improve grammar and professional language  
- Keep information truthful but make it more impactful
- Optimize for ATS (Applicant Tracking Systems)
- Tailor language for the ${selectedTemplate.name} industry/role

Input Data: ${JSON.stringify(formData)}

Return JSON in this exact structure:
{
  "personalInfo": {
    "fullName": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedIn": "",
    "portfolio": "",
    "professionalSummary": ""
  },
  "experience": [
    {
      "jobTitle": "",
      "company": "",
      "duration": "",
      "location": "",
      "achievements": ["", "", ""]
    }
  ],
  "education": [
    {
      "degree": "",
      "institution": "",
      "year": "",
      "gpa": "",
      "relevantCoursework": []
    }
  ],
  "skills": {
    "technical": [],
    "soft": [],
    "languages": [],
    "tools": []
  },
  "projects": [
    {
      "name": "",
      "description": "",
      "technologies": [],
      "highlights": []
    }
  ],
  "achievements": [],
  "certifications": []
}`;

  try {
    console.log('🚀 Making API call to Gemini...');
    
    // 🔥 CORRECT ENDPOINT FORMAT FOR GOOGLE CLOUD
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH", 
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    console.log('📡 Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error Response:', errorText);
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('✅ Raw API Response:', data);
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      console.error('Invalid response structure:', data);
      throw new Error('Invalid response from Gemini API');
    }
    
    const generatedText = data.candidates[0].content.parts[0].text;
    console.log('📝 Generated text:', generatedText);
    
    // Extract JSON from the response
    const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsedData = JSON.parse(jsonMatch[0]);
      console.log('🎉 Successfully parsed JSON:', parsedData);
      return parsedData;
    } else {
      console.error('No JSON found in response:', generatedText);
      throw new Error('No valid JSON found in response');
    }
  } catch (error) {
    console.error('💥 Full error details:', error);
    throw error;
  }
};