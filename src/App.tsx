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
import { ArticleItem } from './types';
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



    // "dynamic" articles
    let articles: ArticleItem[] = [
        {
            id: 0,
            date: "Januari 13 2022 - 10:15",
            image: "./images/max-verstappen-red-bull.jpeg",
            mainTag: "Red Bull",
            mainTagColor: "redBull",
            mainTagBackgroundColor: "redBull-bg",
            minutesRead: 8,
            title: "Possible advantage for Red Bull in the second half of the season",
            intro: "Helmut Marko has confirmed that Red Bull Racing's RB18 is roughly ten kilos of 'overweight', but expects the team to be there within a few weeks",
            subtitleFirst: "Marko warns Red Bull for second competitor this season",
            paragraphFirst: "Marko states that at the start of the season he doubted whether Mercedes was actually short of speed. The Red Bull adviser has repeatedly experienced in recent years that the Germans withheld performance, so that he did not immediately take the problems with the team seriously. After two disappointing races, Charles Leclerc also has something to make up for, but according to Klien, Red Bull is in better shape for the next two races. He emphasizes that the Monegask had better pace in Spain and Monaco, but that Red Bull had an edge in terms of strategy and tire degradation. Now there are Baku and Montreal, two high-speed tracks, where I see Red Bull in the lead, he explains.",
            imageSecond: "./../images/sergio-perez-red-bull.webp",
            subtitleSecond: "Should Verstappen fear his teammate?",
            paragraphSecond: "Klien indicates to ServusTV that Verstappen was 'clearly the fastest man' in Baku last year and that he is keen to get revenge. Sergio Perez made up for the damage for his teammate and won the race, but according to the Austrian, Verstappen should have been the actual winner. The Monaco Grand Prix turned out better for Perez than for Verstappen, who was looking for the right balance all weekend. However, Klien does not believe that Perez can actually give his teammate a hard time in the championship. “Max maybe just lacked that little bit of confidence in the car. This is a setup story that will be resolved with the development of the car.",
            publisher: "Karel Decoene"
        },
        {
            id: 1,
            date: "February 13 2022 - 12:15",
            image: "./images/charles-leclerc-ferrari.webp",
            mainTag: "Ferrari",
            mainTagColor: "ferrari",
            mainTagBackgroundColor: "ferrari-bg",
            minutesRead: 8,
            title: "Ferrari hugely disappointed after last weekend in Monaco.",
            intro: "Yes, Charles Leclerc made it to the chequered flag at Monaco for the first time in his Formula 1 career. But that was scant consolation, after the home hero pole-sitter fell to P4 by the chequered flag ",
            subtitleFirst: "“It was a freaking disaster today”",
            paragraphFirst: "fumed Leclerc, who had pulled a 5s lead over Sainz in the early stages of the race. “The win was clearly in our hands: we had the performance, we had everything. I just don’t really understand the call that I had and I need explanations for now. “I couldn’t do much, I was called just before the last corner, so I couldn’t react or ask for any information, but that was clearly the wrong choice… We need to get better.”",
            imageSecond: "./../images/charles-leclerc-ferrari-2.webp",
            subtitleSecond: "Leclerc finishing behind Verstappen saw the Dutchman increase his title lead ",
            paragraphSecond: "But with Sainz then brought in for dry hard tyres three laps later, Leclerc was initially called in as well – only to then be told to stay out. But that call came too late, Leclerc’s total time in the pits four seconds longer than his team mate's as Ferrari double-stacked the pair, which saw him fall to P4 behind eventual winner Sergio Perez, Sainz and the second Red Bull of title rival Max Verstappen.",
            publisher: "Karel Decoene"
        },
        {
            id: 2,
            date: "February 13 2022 - 12:15",
            image: "./images/daniel-ricciardo-mclaren.webp",
            mainTag: "McLaren",
            mainTagColor: "mclaren",
            mainTagBackgroundColor: "mclaren-bg",
            minutesRead: 9,
            title: "McLaren may say goodbye to Ricciardo before the end of the season",
            intro: "Daniel Ricciardo may have won the 2018 Monaco Grand Prix, but the McLaren driver couldn't deliver any Monte Carlo magic on Sunday, finishing 13th…",
            subtitleFirst: "Obviously, a tough weekend to take, unfortunately I’m experienced with these",
            paragraphFirst: "A crash in FP2 (below) meant Ricciardo began the weekend on the back foot and he went on to qualify 14th and finish 13th. This season the Australian has struggled in comparison to team mate Lando Norris – now standing 37 points behind the Briton – and is looking to \"reset\" ahead of the Azerbaijan Grand Prix. \"Obviously, a tough weekend to take, unfortunately I’m experienced with these – had a few of them the last 12 months, so I feel like I can handle them a little bit better,\" said Ricciardo.",
            imageSecond: "./../images/daniel-ricciardo-mclaren-2.webp",
            subtitleSecond: "I will continue to smile or at least try to smile",
            paragraphSecond: "After a run of points scores at Monaco from 2014-19, the Honey Badger has finished outside the top 10 for McLaren in 2021 and 2022. He explained why this year's Monaco Grand Prix didn't go quite as well as past iterations. \"It’s tough. I mean, no mistake, Monaco you need confidence. You need to be at one with the car; for sure if you’re not quite there it can show on the stopwatch. So as much as I love this place, at the core, that’s what you need.",
            publisher: "Karel Decoene"
        }
    ]



    return (
        <Router>
            <div id="container" className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage articles={articles} />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/grandprixs" element={<GrandPrixsPage />} />
                    <Route path="/grandprix-detail" element={<GrandPrixDetailPage articles={articles} />} />
                    <Route path="/driverStandings" element={<DriverStandingsPage />} />
                    <Route path="/teamStandings" element={<TeamStandingsPage />} />
                    <Route path="/driver" element={<DriverPage articles={articles} />} />
                    <Route path="/team" element={<TeamPage articles={articles} />} />

                    <Route path="/blog" element={<BlogPage articles={articles} />} />
                    {/* <Route path="/article/:id" element={<ArticleDetailPage />} /> */}

                    <Route path="/blog-detail" element={<BlogDetailPage articles={articles} />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="*" element={<NotFoundPage />} />

                    {/* Test routes */}
                    <Route path="/test" element={<ListPage articles={articles} />} />
                    <Route path="/detail/:id" element={<DetailPage articles={articles} />} />
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
        </Router>
    );
}

export default App;