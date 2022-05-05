// Core React
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Multilanguage
import { useTranslation } from "react-i18next";
import i18n from "i18next";

// Components
import Nav from './4_organisms/Nav/Nav';
import Footer from './4_organisms/Footer/Footer';

// Pages
import HomePage from './5_pages/HomePage/HomePage';
import Dashboard from './5_pages/Dashboard/Dashboard';
import GrandPrixs from './5_pages/GrandPrixs/GrandPrixs';
import GrandPrixDetail from './5_pages/GrandPrixDetail/GrandPrixDetail';
import Standings from './5_pages/Standings/Standings';
import DriverPage from './5_pages/DriverPage/DriverPage';

// Global styles
import './style.scss';

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



    // Light/dark theme
    let theme = localStorage.getItem('data-theme');

    const changeThemeToDark = () => {
        document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
        localStorage.setItem("data-theme", "dark") // save theme to local storage
    }

    const changeThemeToLight = () => {
        document.documentElement.setAttribute("data-theme", "light") // set theme light
        localStorage.setItem("data-theme", 'light') // save theme to local storage
    }

    // Get the element based on ID
    const checkbox = document.getElementById("switch");

    // Apply retrived them to the website
    checkbox?.addEventListener('change', () => {
        //let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage

        if (theme === 'dark') {
            theme = 'light';
            changeThemeToLight()
            console.log('test');
        } else {
            theme = 'dark';
            changeThemeToDark()
            console.log('test2');
        }
    });



    return (
        <Router>
            {/*<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <StyledApp>*/}
            {/* <div className="container"> */}

            <div>
                <Nav />

                {/*<div className="toggle-container">
                    <input type="checkbox" id="switch" name="theme" /><label htmlFor="switch">Toggle</label>
            </div>*/}

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/grandprixs" element={<GrandPrixs />} />
                    <Route path="/grandprix-detail" element={<GrandPrixDetail />} />
                    <Route path="/standings" element={<Standings />} />
                    <Route path="/driver" element={<DriverPage />} />
                </Routes>

                <Footer />

                {/*<div className="dropdown">
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><span>{t('language')}</span></li>
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}>
                                    <button onClick={() => i18n.changeLanguage(code)}
                                    disabled={code === currentLanguageCode}>
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
                    
                    <button onClick={() => themeToggler()}>Change theme</button>
                    */}
            </div>
            {/* </StyledApp>
            </ThemeProvider> */}
        </Router>
    );
}

export default App;