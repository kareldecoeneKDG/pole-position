import React, { useEffect } from 'react';

//types
import { BenefitItem } from '../../types';

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

//not needed now
interface BenefitProps {
    benefit: BenefitItem
}

function Benefit() {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(element => element.code === currentLanguageCode)

    const { t } = useTranslation()
    
    useEffect(() => {
        document.body.dir = currentLanguage!.dir || 'ltr';
        document.title = t('app_title');
    }, [currentLanguage, t])
    
    return (
        <div className="benefit">
            <div className="icon-bg-lg">
                <i className="fa fa-users" aria-hidden="true"></i>
            </div>

            <h4 className="benefit__title">title</h4>

            <p className="benefit__p">paragraph</p>
        </div>
    );
}

export default Benefit;