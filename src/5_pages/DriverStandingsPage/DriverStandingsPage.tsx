import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import StandingDriver from '../../3_molecules/StandingDriver/StandingDriver';
import Subnav from '../../4_organisms/Subnav/Subnav';

function DriverStandingsPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);

        //change title of tab
        document.title = "Driver Standings | Pole Positon - F1 Blog";
    }, []);

    const [selected, setSelected] = useState("");

    if(selected == "") {
        setSelected("Drivers");
    }

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
        </div>
    );
}

export default DriverStandingsPage;