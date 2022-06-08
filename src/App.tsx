// Core React
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Multilanguage
import { useTranslation } from "react-i18next";
import i18n from "i18next";

// Components
import Navbar from './4_organisms/NavBar/NavBar';
import Footer from './4_organisms/Footer/Footer';

// Pages
import HomePage from './5_pages/HomePage/HomePage';
import DashboardPage from './5_pages/DashboardPage/DashboardPage';
import GrandPrixsPage from './5_pages/GrandPrixsPage/GrandPrixsPage';
import GrandPrixDetailPage from './5_pages/GrandPrixDetailPage/GrandPrixDetailPage';
import DriverPage from './5_pages/DriverPage/DriverPage';
import TeamPage from './5_pages/TeamPage/TeamPage';
import BlogPage from './5_pages/BlogPage/BlogPage';
import BlogDetailPage from './5_pages/BlogDetailPage/BlogDetailPage';
import PrivacyPolicyPage from './5_pages/PrivacyPolicyPage/PrivacyPolicyPage';
import LoginPage from './5_pages/LoginPage/LoginPage';
import RegisterPage from './5_pages/RegisterPage/RegisterPage';
import PaymentPage from './5_pages/PaymentPage/PaymentPage';
import NotFoundPage from './5_pages/NotFoundPage/NotFoundPage';
import TestPage from './5_pages/TestPage/TestPage';
import AccountPage from './5_pages/AccountPage/AccountPage';
import DriverStandingsPage from './5_pages/DriverStandingsPage/DriverStandingsPage';
import TeamStandingsPage from './5_pages/TeamStandingsPage/TeamStandingsPage';
import ListPage from './5_pages/ListPage/ListPage';
import DetailPage from './5_pages/DetailPage/DetailPage';

// Global styles
import './style.scss';

//types
import { ArticleItem, Game } from './types';
import ArticleDetailPage from './5_pages/ArticleDetailPage/ArticleDetailPage';
//import Article from './3_molecules/Article/Article';

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
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);

        //change title of tab
        document.title = "Pole Positon - F1 Blog";
    }, []);

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



    // Light/dark theme - KEEP THIS CODE
    let theme = localStorage.getItem('data-theme');



    const changeThemeToDark = () => {
        document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
        localStorage.setItem("data-theme", "dark") // save theme to local storage
        theme = "dark";
    }

    const changeThemeToLight = () => {
        document.documentElement.setAttribute("data-theme", "light") // set theme light
        localStorage.setItem("data-theme", 'light') // save theme to local storage
        theme = "light";
    }



    if (localStorage.getItem('data-theme') == '' || localStorage.getItem('data-theme') == null) {
        let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

        if (darkThemeMq.matches == true) {
            changeThemeToDark()
        } else {
            changeThemeToLight()
        }
    }
    else {
        document.documentElement.setAttribute("data-theme", localStorage.getItem('data-theme')!);
    }
    //const [checked, setChecked] = useState(false); */



    //test dynamic -> Game type is imported above
    let games: Game[] = [
        {
            id: 0,
            name: "World of Warcraft",
            releaseYear: 2004,
            sales: 0
        },
        {
            id: 1,
            name: "Valheim",
            releaseYear: 2004,
            sales: 0
        },
        {
            id: 2,
            name: "Minecraft",
            releaseYear: 2011,
            sales: 0
        }
    ]



    //test articles
    let articles: ArticleItem[] = [
        {
            id: 0,
            image: "max-verstappen-red-bull.webp",
            mainTag: "Red Bull",
            mainTagColor: "redbull",
            mainTagBackgroundColor: "redbull-bg",
            minutesRead: 8,
            title: "Mogelijk voordeel voor Red Bull in tweede helft van seizoen",
            intro: "Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de."
        },
        {
            id: 1,
            image: "charles-leclerq-ferrari.webp",
            mainTag: "Ferrari",
            mainTagColor: "ferrari",
            mainTagBackgroundColor: "ferrari-bg",
            minutesRead: 7,
            title: "Ferrari enorm teleurgesteld na afgelopen weekend in Monaco.",
            intro: "Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de."
        },
        {
            id: 2,
            image: "lando-norris-mclaren.webp",
            mainTag: "McLaren",
            mainTagColor: "mclaren",
            mainTagBackgroundColor: "mclaren-bg",
            minutesRead: 9,
            title: "McLaren neemt mogelijks voor einde seizoen afscheid van Ricciardo",
            intro: "Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de."
        },
    ]



    return (
        <Router>
            {/*<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <StyledApp>*/}
            {/* <div className="container"> */}

            <div id="container" className="container">


                {/* <Nav /> */}


                {/* <div className="toggle-container">
                    <input type="checkbox" id="switch" name="theme" checked={checked} onChange={(e) => setChecked(e.target.checked)} /><label htmlFor="switch" onClick={() => setChecked((c) => c)}>Toggle</label>
                </div> */}

                {/*<div className="test">
                    <button onClick={() => setChecked((c) => !c)}>toggle</button>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                </div>*/}


                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/grandprixs" element={<GrandPrixsPage />} />
                    <Route path="/grandprix-detail" element={<GrandPrixDetailPage />} />
                    <Route path="/driverStandings" element={<DriverStandingsPage />} />
                    <Route path="/teamStandings" element={<TeamStandingsPage />} />
                    <Route path="/driver" element={<DriverPage />} />
                    <Route path="/team" element={<TeamPage />} />

                    <Route path="/blog" element={<BlogPage articles={articles} />} />
                    <Route path="/article/:id" element={<ArticleDetailPage articles={articles} />} />

                    <Route path="/blog-detail" element={<BlogDetailPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="*" element={<NotFoundPage />} />


                    <Route path="/test" element={<ListPage games={games} />} />
                    <Route path="/detail/:id" element={<DetailPage games={games} />} />



                    <Route path="/404" element={<NotFoundPage />} />
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