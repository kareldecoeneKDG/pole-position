import React, { useState, useEffect } from 'react';
import Test from './1_fundaments/test/Test';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
//import cookies from "js-cookie";
const cookies = require('js-cookie');

//for the light/dark theme
const StyledApp = styled.div`

    color: ${(props) => props.theme.fontColor};

`;

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

function App() {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(element => element.code === currentLanguageCode)
    
    const { t } = useTranslation()

    const releaseDate = new Date('2021-03-07')
    const timeDifference = new Date().valueOf() - releaseDate.valueOf()
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    useEffect(() => {
        document.body.dir = currentLanguage!.dir || 'ltr';
        document.title = t('app_title');
    }, [currentLanguage, t])

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <div>
                    <div className="dropdown">
                        <button id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><span>{t('language')}</span></li>
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}>
                                    <button onClick={() => i18n.changeLanguage(code)}
                                    disabled={code === currentLanguageCode}>
                                        {/* <span className={`flag-icon flag-icon-${country_code}`}></span> */}
                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    Hello world!
                    {t('welcome_message')}
                    <p>{t('days_since_release', { number_of_days })}</p>

                    <Test />
                </div>

                <button onClick={() => themeToggler()}>Change theme</button>
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;