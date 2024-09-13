import surveyQuestions from '../surveyQuestions.json'; // Import JSON file
import { saveAs } from 'file-saver';

export const fetchSurveyQuestions = (language) => {
    return surveyQuestions[language] || surveyQuestions['en'] || [];
};


// Simulated file saving or API submission
export const submitSurveyData = async (data) => {
    // Simulate saving data to a file
    const fileContent = JSON.stringify(data, null, 2);
    const blob = new Blob([fileContent], { type: "application/json" });

    // Save as a file for now
    saveAs(blob, `survey_result_${Date.now()}.json`);

    // In the future, you can replace this with an API call:
    /*
    return fetch('https://your-api-endpoint.com/survey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
        throw error; // If you want to catch this in the form component
    });
    */
};