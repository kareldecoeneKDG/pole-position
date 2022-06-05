import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Navbar from '../../4_organisms/NavBar/NavBar';
import StandingDriver from '../../3_molecules/StandingDriver/StandingDriver';
import Subnav from '../../4_organisms/Subnav/Subnav';

function DriverStandingsPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    const [selected, setSelected] = useState("");

    if(selected == "") {
        setSelected("Drivers");
    }

    return (
        <div className="standings">
            <Helmet>
                <title>Driver Standings | Pole Positon - F1 Blog</title>
            </Helmet>

            <Navbar />
            
            {/* Subnavigation */}
            <Subnav selected={selected} setSelected={setSelected} />

            <section className="standings__drivers">
                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                {/* <hr className="standings__drivers__line line" /> */}

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>

                <Link to="/driver">
                    <StandingDriver />
                </Link>
            </section>
        </div>
    );
}

export default DriverStandingsPage;