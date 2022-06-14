import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { i18n, t } from "i18next";
import { useTranslation } from "react-i18next";

import Benefit from '../../3_molecules/Benefit/Benefit';

//types
import { BenefitItem } from '../../types';

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

interface BenefitsProps {
    benefits: BenefitItem[]
}

function Benefits({ benefits }: { benefits: BenefitItem[] }) {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(element => element.code === currentLanguageCode)

    const { t } = useTranslation()

    useEffect(() => {
        document.body.dir = currentLanguage!.dir || 'ltr';
        document.title = t('app_title');
    }, [currentLanguage, t])

    return (
        <section id="benefits" className="benefits section">
            <h2 className="benefits__title section__title">{t('benefits_title')}</h2>

            <p className="benefits__p">
                {t('benefits_introduction')}
            </p>

            <div className="benefits__items flex-desktop">
                <div className="benefit">
                    <div className="icon-bg-lg">
                        <i className="fa fa-users" aria-hidden="true"></i>
                    </div>

                    <h4 className="benefit__title">{t('benefits_item1_title')}</h4>

                    <p className="benefit__p">{t('benefits_item1_p')}</p>
                </div>

                <div className="benefit">
                    <div className="icon-bg-lg">
                        <i className="fa fa-users" aria-hidden="true"></i>
                    </div>

                    <h4 className="benefit__title">{t('benefits_item2_title')}</h4>

                    <p className="benefit__p">{t('benefits_item2_p')}</p>
                </div>

                <div className="benefit">
                    <div className="icon-bg-lg">
                        <i className="fa fa-users" aria-hidden="true"></i>
                    </div>

                    <h4 className="benefit__title">{t('benefits_item3_title')}</h4>

                    <p className="benefit__p">{t('benefits_item3_p')}</p>
                </div>

                <div className="benefit">
                    <div className="icon-bg-lg">
                        <i className="fa fa-users" aria-hidden="true"></i>
                    </div>

                    <h4 className="benefit__title">{t('benefits_item4_title')}</h4>

                    <p className="benefit__p">{t('benefits_item4_p')}</p>
                </div>

                {/*<Benefit />
                <Benefit />
                <Benefit />
                <Benefit />*/}
                {/* {benefits.map((benefit: BenefitItem) => {
                    return <Benefit benefit={benefit} />
                })}*/}
            </div>

            <p className="cta__p">{t('benefits_cta_p')}</p>

            <Link className="button button-primary skew" to="/register">
                <span>{t('benefits_cta_button')} <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
            </Link>
        </section>
    );
}

export default Benefits;