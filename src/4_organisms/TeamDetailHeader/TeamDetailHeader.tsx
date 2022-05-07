import React from 'react';

import DriverTeamDetailItem from '../../3_molecules/DriverTeamDetailItem/DriverTeamDetailItem';
import Socials from '../../3_molecules/Socials/Socials';

import Max from './max.png';
import RedBullLogo from './redbull.png';

function TeamDetailHeader() {
    return (
        <div className="detailHeader">
            <div className="top flex">
                <div className="top__drivers top-team">
                    <img className="top-team__img" src={Max} alt="Picture of driver" />
                    <img className="top-team__img" src={Max} alt="Picture of driver" />
                </div>

                <div className="top__info">
                    <img className="top__info__logos__team-logo" src={RedBullLogo} alt="F1 team logo" />

                    <h2 className="top__info__title">Red Bull</h2>

                    <Socials />
                </div>
            </div>

            <div className="driver-team__items">
                <DriverTeamDetailItem />
                <DriverTeamDetailItem />
                <DriverTeamDetailItem />
            </div>
        </div>
    );
}

export default TeamDetailHeader;