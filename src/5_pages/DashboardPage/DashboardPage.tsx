import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import SavedBlogposts from '../../4_organisms/SavedBlogposts/SavedBlogposts';
import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import Settings from '../../4_organisms/Settings/Settings';
import Subnav from '../../4_organisms/Subnav/Subnav';

function DashboardPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);

        //change title of tab
        document.title = "Dashboard | Pole Positon - F1 Blog";
    }, []);

    const [selected, setSelected] = useState("");

    if (selected == "") {
        setSelected("Saved Blogposts");
    }

    return (
        <div className="dashboard">
            <Helmet>
                <title>Dashboard | Pole Positon - F1 Blog</title>
            </Helmet>
            
            {/* Subnavigation */}
            <Subnav selected={selected} setSelected={setSelected} />

            {/* Saved blogposts content */}
            <SavedBlogposts />
            <LatestGP />
        </div>
    );
}

export default DashboardPage;