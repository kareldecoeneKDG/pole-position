import React from 'react';

import Article from '../../3_molecules/Article/Article';

import DriverDetailHeader from '../../4_organisms/DriverDetailHeader/DriverDetailHeader';
import LatestNews from '../../4_organisms/LatestNews/LatestNews';
import FactsNumbers from '../../4_organisms/FactsNumbers/FactsNumbers';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';
import RecentShots from '../../4_organisms/RecentShots/RecentShots';
import MightAlsoLikeDriver from '../../4_organisms/MightAlsoLikeDriver/MightAlsoLikeDriver';

function DriverPage() {
    return (
        <div className="driverPage">
            <DriverDetailHeader />
            <LatestNews />
            <FactsNumbers />
            <MoreRecentNews />
            <RecentShots />
            <MightAlsoLikeDriver />
        </div>
    );
}

export default DriverPage;