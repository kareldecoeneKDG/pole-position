import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import Header from '../../4_organisms/Header/Header';
import LatestNews from '../../4_organisms/LatestNews/LatestNews';
import Benefits from '../../4_organisms/Benefits/Benefits';
import Platform from '../../4_organisms/Platform/Platform';
import HowSignUp from '../../4_organisms/HowSignUp/HowSignUp';
import Newsletter from '../../4_organisms/Newsletter/Newsletter';

//types
import { BenefitItem, PlatformItemType } from '../../types';

const Fade = require("react-reveal/Fade");

interface HomePageProps {
    benefits: BenefitItem[],
    platformItems: PlatformItemType[]
}

function HomePage({benefits, platformItems} : HomePageProps) {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <FadeIn className="page-flex">
            <div className="homePage">
                <Helmet>
                    <title>Home | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <Header />
                </Fade>

                <Fade delay={500}>
                    <LatestNews />
                </Fade>

                <Fade delay={500}>
                    <Benefits benefits={benefits} />
                </Fade>

                <Fade delay={500}>
                    <Platform platformItems={platformItems} />
                </Fade>

                <Fade delay={500}>
                    <HowSignUp />
                </Fade>

                <Fade delay={500}>
                    <Newsletter />
                </Fade>
            </div>
        </FadeIn>
    );
}

export default HomePage;