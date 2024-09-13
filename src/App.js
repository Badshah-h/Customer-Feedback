import React, {useEffect} from 'react';
import SurveyForm from './components/Survey/SurveyForm.js';
import {I18nextProvider, useTranslation} from 'react-i18next';
import {SurveyProvider} from "./components/Survey/context/SurveyContext.js";

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.className = i18n.dir();
    }, [i18n]);

    return (
        <I18nextProvider i18n={i18n}>
            <SurveyProvider>
                <SurveyForm />
            </SurveyProvider>
        </I18nextProvider>
    );
}

export default App;
