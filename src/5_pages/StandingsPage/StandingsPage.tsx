import React from 'react';

import SubNav from '../../4_organisms/SubNav/SubNav';
import StandingDriver from '../../3_molecules/StandingDriver/StandingDriver';
import StandingTeam from '../../3_molecules/StandingTeam/StandingTeam';

function StandingsPage() {
    return (
        <div className="standings">
            <SubNav />

            {/* <section className="standings__drivers">
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />

                {/* <hr className="standings__drivers__line line" /> 

                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
                <StandingDriver />
            </section> */}

            <section className="standings__drivers">
                <StandingTeam />
                <StandingTeam />
                <StandingTeam />

                {/* <hr className="standings__drivers__line line" /> */}


                <StandingTeam />
                <StandingTeam />
                <StandingTeam />
                <StandingTeam />
                <StandingTeam />
                <StandingTeam />
                <StandingTeam />
            </section>
        </div>
    );
}

export default StandingsPage;