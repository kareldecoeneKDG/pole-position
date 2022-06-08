import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import StandingDriver from '../../3_molecules/StandingDriver/StandingDriver';
import Subnav from '../../4_organisms/SubNav/SubNav';
import NavBar from '../../4_organisms/NavBar/NavBar';

const Fade = require("react-reveal/Fade");

function DriverStandingsPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    const [selected, setSelected] = useState("");

    if (selected == "") {
        setSelected("Drivers");
    }

    return (
        <FadeIn className="page-flex">
            <div className="standings">
                <Helmet>
                    <title>Driver Standings | Pole Positon - F1 Blog</title>
                </Helmet>

                <NavBar />

                {/* Subnavigation */}
                <Subnav selected={selected} setSelected={setSelected} />

                <Fade>
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
                </Fade>
            </div>
        </FadeIn>
    );
}

export default DriverStandingsPage;