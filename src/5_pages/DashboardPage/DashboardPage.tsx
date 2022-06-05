import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import SavedBlogposts from '../../4_organisms/SavedBlogposts/SavedBlogposts';
import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import Settings from '../../4_organisms/Settings/Settings';
import Subnav from '../../4_organisms/Subnav/Subnav';
import { Link, NavLink } from 'react-router-dom';

function DashboardPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
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

            {/* Breadcrumbs */}
            <div className="breadcrumbs mobile">
                <Link to="/dashboard" className="breadcrumbs__item">Dashboard</Link>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <NavLink to="/dashboard" className="breadcrumbs__item">Saved blogposts</NavLink>
            </div>

            {/* Saved blogposts content */}
            <SavedBlogposts />
            <LatestGP />
        </div>
    );
}

export default DashboardPage;