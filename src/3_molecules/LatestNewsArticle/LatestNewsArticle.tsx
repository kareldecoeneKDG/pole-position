import React, { useEffect } from 'react';

import { i18n, t } from "i18next";
import { useTranslation } from "react-i18next";

// Multilanguage cookies
const cookies = require('js-cookie');

const languages = [
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
        dir: 'empty'
    },
]

function LatestNewsArticle() {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(element => element.code === currentLanguageCode)

    const { t } = useTranslation()
    
    useEffect(() => {
        document.body.dir = currentLanguage!.dir || 'ltr';
        document.title = t('app_title');
    }, [currentLanguage, t])
    
    return (
        <div className="latestnews__articles__article">
            <h4>{t('latest_news_article')}</h4>
        </div>
    );
}

export default LatestNewsArticle;