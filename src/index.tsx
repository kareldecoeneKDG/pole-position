import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './index.scss';
//import 'flag-icon-css/css/flag-icon.min.css';
import App from './App';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

        supportedLngs: ['en', 'fr'],

        //lng: document.querySelector('html')!.lang, // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: 'assets/locales/{{lng}}/translation.json', //change to Laravel API later
        },
        //react: { useSuspense: false, }

        /*interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }*/
    });

/* function App() {
    const { t } = useTranslation();

    return <h2>{t('welcome_to_react')}</h2>; //t() is for the key of the content in translation
} */

/* show during loading */
const loadingMarkup = (
    <div>
        <h2>Loading...</h2>
    </div>
)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
