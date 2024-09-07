import React, {useEffect} from 'react';
import SurveyForm from './components/Survey/SurveyForm.js';
import {I18nextProvider, useTranslation} from 'react-i18next';
import i18n from './localization/i18n.js';

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.className = i18n.dir();
    }, [i18n.language]);

    return (
        <I18nextProvider i18n={i18n}>
            <SurveyForm />
        </I18nextProvider>
    );
}
export default App;
