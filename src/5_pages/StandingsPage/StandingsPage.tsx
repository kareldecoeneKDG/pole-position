import React, { useEffect, useState } from 'react';

import Subnav from '../../4_organisms/Subnav/Subnav';
import StandingDriver from '../../3_molecules/StandingDriver/StandingDriver';
import StandingTeam from '../../3_molecules/StandingTeam/StandingTeam';
import { Link } from 'react-router-dom';

function StandingsPage() {
    useEffect(() => { document.documentElement.scrollTo(0, 0); }, []);

    const [selected, setSelected] = useState("");

    return (
        <div className="standings">
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

            {/* <section className="standings__drivers">
                <Link to="/team">
                    <StandingTeam />
                </Link>

                <Link to="/team">
                    <StandingTeam />
                </Link>

                <Link to="/team">
                    <StandingTeam />
                </Link>

                {/* <hr className="standings__drivers__line line" /> 

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
            </section> */}
        </div>
    );
}

export default StandingsPage;