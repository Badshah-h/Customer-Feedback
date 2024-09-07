import surveyQuestions from '../surveyQuestions.json'; // Import JSON file

export const fetchSurveyQuestions = (language) => {
    return surveyQuestions[language] || surveyQuestions['en'] || [];
};
