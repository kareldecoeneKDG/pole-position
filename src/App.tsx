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
import { ArticleItem, BenefitItem, DriverItem, PlatformItemType } from './types';

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



    // "dynamic" articles -> just for showcase
    let articles: ArticleItem[] = [
        {
            id: 0,
            date: "Januari 13 2022 - 10:15",
            image: "./images/articles/max-verstappen-red-bull.jpeg",
            mainTag: "Red Bull",
            mainTagColor: "redBull",
            mainTagBackgroundColor: "redBull-bg",
            minutesRead: 8,
            title: "Possible advantage for Red Bull in the second half of the season",
            intro: "Helmut Marko has confirmed that Red Bull Racing's RB18 is roughly ten kilos of 'overweight', but expects the team to be there within a few weeks",
            subtitleFirst: "Marko warns Red Bull for second competitor this season",
            paragraphFirst: "Marko states that at the start of the season he doubted whether Mercedes was actually short of speed. The Red Bull adviser has repeatedly experienced in recent years that the Germans withheld performance, so that he did not immediately take the problems with the team seriously. After two disappointing races, Charles Leclerc also has something to make up for, but according to Klien, Red Bull is in better shape for the next two races. He emphasizes that the Monegask had better pace in Spain and Monaco, but that Red Bull had an edge in terms of strategy and tire degradation. Now there are Baku and Montreal, two high-speed tracks, where I see Red Bull in the lead, he explains.",
            imageSecond: "./../images/articles/sergio-perez-red-bull.webp",
            subtitleSecond: "Should Verstappen fear his teammate?",
            paragraphSecond: "Klien indicates to ServusTV that Verstappen was 'clearly the fastest man' in Baku last year and that he is keen to get revenge. Sergio Perez made up for the damage for his teammate and won the race, but according to the Austrian, Verstappen should have been the actual winner. The Monaco Grand Prix turned out better for Perez than for Verstappen, who was looking for the right balance all weekend. However, Klien does not believe that Perez can actually give his teammate a hard time in the championship. “Max maybe just lacked that little bit of confidence in the car. This is a setup story that will be resolved with the development of the car.",
            publisher: "Karel Decoene"
        },
        {
            id: 1,
            date: "February 13 2022 - 12:15",
            image: "./images/articles/charles-leclerc-ferrari.webp",
            mainTag: "Ferrari",
            mainTagColor: "ferrari",
            mainTagBackgroundColor: "ferrari-bg",
            minutesRead: 8,
            title: "Ferrari hugely disappointed after last weekend in Monaco.",
            intro: "Yes, Charles Leclerc made it to the chequered flag at Monaco for the first time in his Formula 1 career. But that was scant consolation, after the home hero pole-sitter fell to P4 by the chequered flag ",
            subtitleFirst: "“It was a freaking disaster today”",
            paragraphFirst: "fumed Leclerc, who had pulled a 5s lead over Sainz in the early stages of the race. “The win was clearly in our hands: we had the performance, we had everything. I just don’t really understand the call that I had and I need explanations for now. “I couldn’t do much, I was called just before the last corner, so I couldn’t react or ask for any information, but that was clearly the wrong choice… We need to get better.”",
            imageSecond: "./../images/articles/charles-leclerc-ferrari-2.webp",
            subtitleSecond: "Leclerc finishing behind Verstappen saw the Dutchman increase his title lead ",
            paragraphSecond: "But with Sainz then brought in for dry hard tyres three laps later, Leclerc was initially called in as well – only to then be told to stay out. But that call came too late, Leclerc’s total time in the pits four seconds longer than his team mate's as Ferrari double-stacked the pair, which saw him fall to P4 behind eventual winner Sergio Perez, Sainz and the second Red Bull of title rival Max Verstappen.",
            publisher: "Karel Decoene"
        },
        {
            id: 2,
            date: "February 13 2022 - 12:15",
            image: "./images/articles/daniel-ricciardo-mclaren.webp",
            mainTag: "McLaren",
            mainTagColor: "mclaren",
            mainTagBackgroundColor: "mclaren-bg",
            minutesRead: 9,
            title: "McLaren may say goodbye to Ricciardo before the end of the season",
            intro: "Daniel Ricciardo may have won the 2018 Monaco Grand Prix, but the McLaren driver couldn't deliver any Monte Carlo magic on Sunday, finishing 13th…",
            subtitleFirst: "Obviously, a tough weekend to take, unfortunately I’m experienced with these",
            paragraphFirst: "A crash in FP2 (below) meant Ricciardo began the weekend on the back foot and he went on to qualify 14th and finish 13th. This season the Australian has struggled in comparison to team mate Lando Norris – now standing 37 points behind the Briton – and is looking to \"reset\" ahead of the Azerbaijan Grand Prix. \"Obviously, a tough weekend to take, unfortunately I’m experienced with these – had a few of them the last 12 months, so I feel like I can handle them a little bit better,\" said Ricciardo.",
            imageSecond: "./../images/articles/daniel-ricciardo-mclaren-2.webp",
            subtitleSecond: "I will continue to smile or at least try to smile",
            paragraphSecond: "After a run of points scores at Monaco from 2014-19, the Honey Badger has finished outside the top 10 for McLaren in 2021 and 2022. He explained why this year's Monaco Grand Prix didn't go quite as well as past iterations. \"It’s tough. I mean, no mistake, Monaco you need confidence. You need to be at one with the car; for sure if you’re not quite there it can show on the stopwatch. So as much as I love this place, at the core, that’s what you need.",
            publisher: "Karel Decoene"
        }
    ]

    // "dynamic" benefits -> just for showcase
    let benefits: BenefitItem[] = [
        {
            id: 0,
            icon: "fa-users",
            title: "Community",
            paragraph: "Join a community of true F1 enthusiasts. Only they will share your level of passion."
        },
        {
            id: 1,
            icon: "fa-bell",
            title: "Real time news",
            paragraph: "Don't rely on rumors but on true real time info instead. Never miss anything F1 again."
        },
        {
            id: 2,
            icon: "fa-comment",
            title: "Discuss recent news",
            paragraph: "Nothing goes above explaining why a time-penalty was correct to a stranger on the internet."
        },
        {
            id: 3,
            icon: "fa-clock-o",
            title: "Comment on live GP",
            paragraph: "You want to share your exitement during the GP? We see you. You're not the only one, join others now."
        },
    ]

    // "dynamic" platformItems -> just for showcase
    let platformItems: PlatformItemType[] = [
        {
            id: 0,
            title: "test title 1",
            paragraph: "paragraph 1"
        },
        {
            id: 1,
            title: "test title 2",
            paragraph: "paragraph 2"
        },
        {
            id: 2,
            title: "test title 3",
            paragraph: "paragraph 3"
        },
        {
            id: 3,
            title: "test title 4",
            paragraph: "paragraph 4"
        }
    ]

    // "dynamic" drivers -> just for showcase
    let drivers: DriverItem[] = [
        {
            id: 0,
            image: "./images/drivers/max-verstappen.webp",
            raceNumber: 1,
            points: 125,
            team: "redBull",
            teamLogo: "./images/teams/red-bull.webp",
            firstName: "Max",
            lastName: "Verstappen",
            age: 24,
            experience: 8,
            worldChampionships: 1,
            fastestLaps: 18,
            polePositions: 14,
            nationality: "Dutch",
            countryFlag: "flag",
            twitter: "https://twitter.com/max33verstappen",
            facebook: "https://www.facebook.com/MaxVerstappen",
            instagram: "https://www.instagram.com/maxverstappen1/"
        },
        {
            id: 1,
            image: "./images/drivers/charles-leclerc.webp",
            raceNumber: 16,
            points: 116,
            team: "ferrari",
            teamLogo: "./images/teams/ferrari.webp",
            firstName: "Charles",
            lastName: "Leclerq",
            age: 24,
            experience: 5,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 14,
            nationality: "Monegasque",
            countryFlag: "flag",
            twitter: "https://twitter.com/charles_leclerc",
            facebook: "https://www.facebook.com/CharlesLeclercOfficiel",
            instagram: "https://www.instagram.com/charles_leclerc/"
        },
        {
            id: 2,
            image: "./images/drivers/sergio-perez.webp",
            raceNumber: 11,
            points: 110,
            team: "redBull",
            teamLogo: "./images/teams/red-bull.webp",
            firstName: "Sergio",
            lastName: "Perez",
            age: 32,
            experience: 12,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "Mexican",
            countryFlag: "flag",
            twitter: "https://twitter.com/schecoperez",
            facebook: "https://www.facebook.com/sergioperezf1",
            instagram: "https://www.instagram.com/schecoperez/"
        },
        {
            id: 3,
            image: "./images/drivers/george-russel.webp",
            raceNumber: 63,
            points: 84,
            team: "mercedes",
            teamLogo: "./images/teams/mercedes.webp",
            firstName: "George",
            lastName: "Russel",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 4,
            image: "./images/drivers/carlos-sainz.webp",
            raceNumber: 55,
            points: 83,
            team: "ferrari",
            teamLogo: "./images/teams/ferrari.webp",
            firstName: "Carlos",
            lastName: "Sainz",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 5,
            image: "./images/drivers/lewis-hamilton.webp",
            raceNumber: 44,
            points: 50,
            team: "mercedes",
            teamLogo: "./images/teams/mercedes.webp",
            firstName: "Lewis",
            lastName: "Hamilton",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 6,
            image: "./images/drivers/lando-norris.webp",
            raceNumber: 4,
            points: 48,
            team: "mclaren",
            teamLogo: "./images/teams/mclaren.webp",
            firstName: "Lando",
            lastName: "Norris",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 7,
            image: "./images/drivers/valtteri-bottas.webp",
            raceNumber: 77,
            points: 40,
            team: "alfaRomeo",
            teamLogo: "./images/teams/alfa-romeo.webp",
            firstName: "Valtteri",
            lastName: "Bottas",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 8,
            image: "./images/drivers/esteban-ocon.webp",
            raceNumber: 31,
            points: 30,
            team: "alpine",
            teamLogo: "./images/teams/alpine.webp",
            firstName: "Esteban",
            lastName: "Ocon",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 9,
            image: "./images/drivers/kevin-magnussen.webp",
            raceNumber: 20,
            points: 15,
            team: "haas",
            teamLogo: "./images/teams/haas.webp",
            firstName: "Kevin",
            lastName: "Magnussen",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 10,
            image: "./images/drivers/daniel-ricciardo.webp",
            raceNumber: 3,
            points: 11,
            team: "mclaren",
            teamLogo: "./images/teams/mclaren.webp",
            firstName: "Daniel",
            lastName: "Ricciardo",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 11,
            image: "./images/drivers/yuki-tsunoda.webp",
            raceNumber: 22,
            points: 11,
            team: "alphaTauri",
            teamLogo: "./images/teams/alpha-tauri.webp",
            firstName: "Yuki",
            lastName: "Tsunoda",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 12,
            image: "./images/drivers/fernando-alonso.webp",
            raceNumber: 14,
            points: 10,
            team: "alpine",
            teamLogo: "./images/teams/alpine.webp",
            firstName: "Fernando",
            lastName: "Alonso",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 13,
            image: "./images/drivers/pierre-gasly.webp",
            raceNumber: 10,
            points: 6,
            team: "alphaTauri",
            teamLogo: "./images/teams/alpha-tauri.webp",
            firstName: "Pierre",
            lastName: "Gasly",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 14,
            image: "./images/drivers/sebastian-vettel.webp",
            raceNumber: 5,
            points: 5,
            team: "astonMartin",
            teamLogo: "./images/teams/aston-martin.webp",
            firstName: "Sebastian",
            lastName: "Vettel",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 15,
            image: "./images/drivers/alexander-albon.webp",
            raceNumber: 23,
            points: 3,
            team: "williams",
            teamLogo: "./images/teams/williams.webp",
            firstName: "Alexander",
            lastName: "Albon",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 16,
            image: "./images/drivers/lance-stroll.webp",
            raceNumber: 18,
            points: 2,
            team: "astonMartin",
            teamLogo: "./images/teams/aston-martin.webp",
            firstName: "Lance",
            lastName: "Stroll",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 17,
            image: "./images/drivers/guanyu-zhou.webp",
            raceNumber: 24,
            points: 1,
            team: "alfaRomeo",
            teamLogo: "./images/teams/alfa-romeo.webp",
            firstName: "Guanyu",
            lastName: "Zhou",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 18,
            image: "./images/drivers/mick-schumacher.webp",
            raceNumber: 47,
            points: 0,
            team: "haas",
            teamLogo: "./images/teams/haas.webp",
            firstName: "Mick",
            lastName: "Schumacher",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 19,
            image: "./images/drivers/nicholas-latifi.webp",
            raceNumber: 6,
            points: 0,
            team: "williams",
            teamLogo: "./images/teams/williams.webp",
            firstName: "Nicholas",
            lastName: "Latifi",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        }
    ]



    return (
        <Router>
            <div id="container" className="container">
                <Routes>
                    <Route path="/" element={<HomePage benefits={benefits} platformItems={platformItems} />} />
                    <Route path="/dashboard" element={<DashboardPage articles={articles} />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/grandprixs" element={<GrandPrixsPage />} />
                    <Route path="/grandprix-detail" element={<GrandPrixDetailPage articles={articles} />} />
                    <Route path="/driverStandings" element={<DriverStandingsPage drivers={drivers} />} />
                    <Route path="/teamStandings" element={<TeamStandingsPage />} />
                    <Route path="/driver/:id" element={<DriverPage articles={articles} drivers={drivers} />} />
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