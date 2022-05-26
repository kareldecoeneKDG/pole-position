import React, { useEffect } from 'react';
import './HomePage.scss';

import Header from '../../4_organisms/Header/Header';
import LatestNews from '../../4_organisms/LatestNews/LatestNews';
import Benefits from '../../4_organisms/Benefits/Benefits';
import Platform from '../../4_organisms/Platform/Platform';
import HowSignUp from '../../4_organisms/HowSignUp/HowSignUp';
import Newsletter from '../../4_organisms/Newsletter/Newsletter';

function HomePage() {
    useEffect(() => { document.documentElement.scrollTo(0,0); }, []);
    
    return (
        <div className="homePage">
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