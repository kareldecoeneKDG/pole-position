import React, { useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { Helmet } from 'react-helmet';

import Navbar from '../../4_organisms/NavBar/NavBar';
import DriverDetailHeader from '../../4_organisms/DriverDetailHeader/DriverDetailHeader';
import LatestNews from '../../4_organisms/LatestNews/LatestNews';
import FactsNumbers from '../../4_organisms/FactsNumbers/FactsNumbers';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';
import RecentShots from '../../4_organisms/RecentShots/RecentShots';
import MightAlsoLikeDriver from '../../4_organisms/MightAlsoLikeDriver/MightAlsoLikeDriver';
import Slideshow from '../../4_organisms/Slideshow/Slideshow';

//types
import { ArticleItem, DriverItem } from '../../types';
import { useParams } from 'react-router-dom';

const Fade = require("react-reveal/Fade");

interface DriverPageProps {
    articles: ArticleItem[],
    drivers: DriverItem[]
}

interface ParamTypes {
    id: string | undefined
}

function DriverPage({articles, drivers} : DriverPageProps) {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    let { id } = useParams();
    let driver = drivers.find((driver: DriverItem) => driver.id === parseInt(id!))!;

    return (
        <FadeIn className="page-flex">
            <div className="driverPage">
                <Helmet>
                    <title>Driver | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <DriverDetailHeader drivers={drivers} />
                </Fade>

                <Fade delay={500}>
                    <MoreRecentNews articles={articles} />
                </Fade>

                <Fade delay={500}>
                    <FactsNumbers />
                </Fade>

                <Fade delay={500}>
                    <Slideshow />
                </Fade>

                <Fade delay={500}>
                    <MightAlsoLikeDriver />
                </Fade>
            </div>
        </FadeIn>
    );
}

export default DriverPage;