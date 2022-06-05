import React, { useEffect } from 'react';

import Navbar from '../../4_organisms/NavBar/NavBar';
import Header from '../../4_organisms/Header/Header';
import LatestNews from '../../4_organisms/LatestNews/LatestNews';
import Benefits from '../../4_organisms/Benefits/Benefits';
import Platform from '../../4_organisms/Platform/Platform';
import HowSignUp from '../../4_organisms/HowSignUp/HowSignUp';
import Newsletter from '../../4_organisms/Newsletter/Newsletter';
import { Helmet } from 'react-helmet';

function HomePage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <div className="homePage">
            <Helmet>
                <title>Home | Pole Positon - F1 Blog</title>
            </Helmet>

            <Navbar />
            <Header />
            <LatestNews />
            <Benefits />
            <Platform />
            <HowSignUp />
            <Newsletter />
        </div>
    );
}

export default HomePage;