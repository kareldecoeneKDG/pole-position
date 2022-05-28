import React, { useEffect } from 'react';

import DriverDetailHeader from '../../4_organisms/DriverDetailHeader/DriverDetailHeader';
import LatestNews from '../../4_organisms/LatestNews/LatestNews';
import FactsNumbers from '../../4_organisms/FactsNumbers/FactsNumbers';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';
import RecentShots from '../../4_organisms/RecentShots/RecentShots';
import MightAlsoLikeDriver from '../../4_organisms/MightAlsoLikeDriver/MightAlsoLikeDriver';
import Slideshow from '../../4_organisms/Slideshow/Slideshow';

function DriverPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);

        //change title of tab
        document.title = "Driver | Pole Positon - F1 Blog";
    }, []);

    return (
        <div className="driverPage">
            <DriverDetailHeader />
            <LatestNews />
            <FactsNumbers />
            <MoreRecentNews />
            <Slideshow />
            <MightAlsoLikeDriver />
        </div>
    );
}

export default DriverPage;