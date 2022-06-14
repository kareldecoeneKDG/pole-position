import React, { useEffect } from 'react';

import Socials from '../../3_molecules/Socials/Socials';

import newsletterImage from './article1.jpeg';

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

function Newsletter() {

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(element => element.code === currentLanguageCode)

    const { t } = useTranslation()
    
    useEffect(() => {
        document.body.dir = currentLanguage!.dir || 'ltr';
        document.title = t('app_title');
    }, [currentLanguage, t])

    /* --- FORM FEEDBACK --- */
    //form
    const form = document.querySelector('.form');

    //inputs
    const email = document.querySelector('.email') as HTMLInputElement;

    if (form != null) {

        //If you really want to make the form work, change structure...
        form!.addEventListener('submit', (e) => {
            e.preventDefault();

            checkInputs();
        });
    }

    function checkInputs() {
        const emailValue = email.value.trim();

        //email input
        if (emailValue === "") {
            setErrorFor(email, 'Email can\'t be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }

        email.addEventListener('input', checkInputs);
    }

    //Function sets error for certain input
    function setErrorFor(input: { parentElement: any; }, message: any) {
        const formGroup = input.parentElement; //form-group
        const small = formGroup.querySelector('small');

        if (small != null) {
            small.innerText = message;
        }

        formGroup.className = 'form-group error';
    }

    //Function sets success for certain input
    function setSuccessFor(input: { parentElement: any; }) {
        const formGroup = input.parentElement;
        formGroup.className = 'form-group success';
    }

    //Function to check if value is mail
    function isEmail(email: string) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    return (
        <section id="newsletter" className="newsletter section">
            <div className="newsletter__content">
                <img className="newsletter__content__img" src={newsletterImage} alt="close up Max Verstappen" />

                <div className="newsletter__content__container">
                    <h3 className="newsletter__content__title">{t('newsletter_title')}</h3>
                    <p className="newsletter__content__p">{t('newsletter_p')}</p>

                    <form className="form">

                        {/* EMAIL INPUT */}
                        <div className="form-control-forms">
                            <div className="form-group">
                                <input type="text" id="email" className="form__input input email" name="email" placeholder=" " />
                                <label htmlFor="email" className="form__label">Email</label>

                                {/* form feedback */}
                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                <small>Error message</small>
                            </div>
                        </div>

                        <button className="button button-primary skew"><span>{t('newsletter_button')} <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></button>
                    </form>

                    <Socials />
                </div>
            </div>
        </section>
    );
}

export default Newsletter;