import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';

import Settings from '../../4_organisms/Settings/Settings';
import Subnav from '../../4_organisms/Subnav/Subnav';

function AccountPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    const [selected, setSelected] = useState("");

    if (selected == "") {
        setSelected("Account");
    }

    return (
        <div className="dashboard">
            <Helmet>
                <title>Account | Pole Positon - F1 Blog</title>
            </Helmet>

            {/* Subnavigation */}
            <Subnav selected={selected} setSelected={setSelected} />

            {/* Breadcrumbs */}
            <div className="breadcrumbs mobile">
                <Link to="/dashboard" className="breadcrumbs__item">Dashboard</Link>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <NavLink to="/dashboard" className="breadcrumbs__item">Account</NavLink>
            </div>

            {/* Settings content */}
            <Settings />
        </div>
    );
}

export default AccountPage;