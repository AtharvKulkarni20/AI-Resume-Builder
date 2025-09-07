export const enhanceDataLocally = (formData) => {
  return {
    ...formData,
    personalInfo: {
      ...formData.personalInfo,
      professionalSummary: formData.personalInfo.professionalSummary || 
        `Dynamic professional with expertise in ${formData.skills.technical.slice(0, 3).join(', ')}. Proven track record of delivering results and driving innovation.`
    },
    experience: formData.experience.map(exp => ({
      ...exp,
      achievements: exp.achievements.map(achievement => 
        achievement.startsWith('•') ? achievement : `• ${achievement}`
      )
    }))
  };
};