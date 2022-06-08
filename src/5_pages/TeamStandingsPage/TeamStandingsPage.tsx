import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import StandingTeam from '../../3_molecules/StandingTeam/StandingTeam';
import Subnav from '../../4_organisms/SubNav/SubNav';
import NavBar from '../../4_organisms/NavBar/NavBar';

function TeamStandingsPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    const [selected, setSelected] = useState("");

    if (selected == "") {
        setSelected("Teams");
    }

    return (
        <FadeIn className="page-flex">
            <div className="standings">
                <Helmet>
                    <title>Team standings | Pole Positon - F1 Blog</title>
                </Helmet>

                <NavBar />

                {/* Subnavigation */}
                <Subnav selected={selected} setSelected={setSelected} />

                <section className="standings__drivers">
                    <Link to="/team">
                        <StandingTeam />
                    </Link>

                    <Link to="/team">
                        <StandingTeam />
                    </Link>

                    <Link to="/team">
                        <StandingTeam />
                    </Link>

                    {/* <hr className="standings__drivers__line line" /> */}

                    <Link to="/team">
                        <StandingTeam />
                    </Link>

                    <Link to="/team">
                        <StandingTeam />
                    </Link>

                    <Link to="/team">
                        <StandingTeam />
                    </Link>

                    <Link to="/team">
                        <StandingTeam />
                    </Link>

                    <Link to="/team">
                        <StandingTeam />
                    </Link>

                    <Link to="/team">
                        <StandingTeam />
                    </Link>

                    <Link to="/team">
                        <StandingTeam />
                    </Link>
                </section>
            </div>
        </FadeIn>
    );
}

export default TeamStandingsPage;