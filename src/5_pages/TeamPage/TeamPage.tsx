import React, { useEffect } from 'react';

import Navbar from '../../4_organisms/NavBar/NavBar';
import TeamDetailHeader from '../../4_organisms/TeamDetailHeader/TeamDetailHeader';
import LatestNews from '../../4_organisms/LatestNews/LatestNews';
import FactsNumbers from '../../4_organisms/FactsNumbers/FactsNumbers';
import HistoryHighlights from '../../4_organisms/HistoryHighlights/HistoryHighlights';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';
import RecentShots from '../../4_organisms/RecentShots/RecentShots';
import MightAlsoLikeTeams from '../../4_organisms/MightAlsoLikeTeams/MightAlsoLikeTeams';
import Slideshow from '../../4_organisms/Slideshow/Slideshow';
import { Helmet } from 'react-helmet';

function TeamPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <section className="teamPage">
            <Helmet>
                <title>Red Bull | Pole Positon - F1 Blog</title>
            </Helmet>

            <Navbar />
            <TeamDetailHeader />
            <MoreRecentNews />
            <FactsNumbers />
            <HistoryHighlights />
            <Slideshow />
            <MightAlsoLikeTeams />
        </section>
    );
}

export default TeamPage;