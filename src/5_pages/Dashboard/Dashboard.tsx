import React from 'react';

import SubNav from '../../4_organisms/SubNav/SubNav';
import SavedBlogposts from '../../4_organisms/SavedBlogposts/SavedBlogposts';
import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import Settings from '../../4_organisms/Settings/Settings';

function Dashboard() {
    return (
        <div className="dashboard">
            <SubNav />

            {/*
            <SavedBlogposts />
            <LatestGP />
            */}

            <Settings />
        </div>
    );
}

export default Dashboard;