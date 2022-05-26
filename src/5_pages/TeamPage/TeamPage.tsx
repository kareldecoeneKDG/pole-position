import React, { useEffect } from 'react';

import TeamDetailHeader from '../../4_organisms/TeamDetailHeader/TeamDetailHeader';
import LatestNews from '../../4_organisms/LatestNews/LatestNews';
import FactsNumbers from '../../4_organisms/FactsNumbers/FactsNumbers';
import HistoryHighlights from '../../4_organisms/HistoryHighlights/HistoryHighlights';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';
import RecentShots from '../../4_organisms/RecentShots/RecentShots';
import MightAlsoLikeTeams from '../../4_organisms/MightAlsoLikeTeams/MightAlsoLikeTeams';

function TeamPage() {
    useEffect(() => { document.documentElement.scrollTo(0,0); }, []);
    
    return (
        <section className="teamPage">
            <TeamDetailHeader />
            <LatestNews />
            <FactsNumbers />
            <HistoryHighlights />
            <MoreRecentNews />
            <RecentShots />
            <MightAlsoLikeTeams />
        </section>
    );
}

export default TeamPage;