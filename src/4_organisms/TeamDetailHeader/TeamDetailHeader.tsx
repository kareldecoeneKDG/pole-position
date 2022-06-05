import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import DriverTeamDetailItem from '../../3_molecules/DriverTeamDetailItem/DriverTeamDetailItem';
import Socials from '../../3_molecules/Socials/Socials';

import Max from './max.png';
import RedBullLogo from './redbull.png';

function TeamDetailHeader() {
    return (
        <div className="detailHeader detailHeader-team section">
            {/* Breadcrumbs */}
            <div className="breadcrumbs mobile">
                <Link to="/teamStandings" className="breadcrumbs__item">Teams</Link>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <NavLink to="/driver" className="breadcrumbs__item">Red Bull Racing</NavLink>
            </div>

            <div className="top flex">
                <div className="top__drivers top-team">

                    {/* INSERT DRIVER LINKS */}
                    <img className="top-team__img" src={Max} alt="Picture of driver" />
                    <img className="top-team__img" src={Max} alt="Picture of driver" />
                </div>

                <div className="top__info">
                    <a href="https://www.redbullracing.com/int-en" target="_blank">
                        <img className="top__info__logos__team-logo" src={RedBullLogo} alt="F1 team logo" />
                    </a>

                    <h2 className="top__info__title">Red Bull</h2>

                    <div className="top__info__middle flex-desktop desktop">
                        <div className="top__info__driver-stats flex-desktop">
                            <div className="top__info__driver-stats__item">
                                <h5 className="top__info__driver-stats__item__title">Nationality</h5>
                                <p className="top__info__driver-stats__item__p">Dutch</p>
                            </div>

                            <div className="top__info__driver-stats__item">
                                <h5 className="top__info__driver-stats__item__title">Age</h5>
                                <p className="top__info__driver-stats__item__p">24</p>
                            </div>

                            <div className="top__info__driver-stats__item">
                                <h5 className="top__info__driver-stats__item__title">Experience</h5>
                                <p className="top__info__driver-stats__item__p">7 years</p>
                            </div>
                        </div>

                        <Socials />
                    </div>

                    <div className="socials-mobile mobile">
                        <Socials />
                    </div>

                    <div className="driver-team__items desktop">
                        <DriverTeamDetailItem />
                        <DriverTeamDetailItem />
                        <DriverTeamDetailItem />
                    </div>
                </div>
            </div>

            <div className="driver-team__items mobile">
                <DriverTeamDetailItem />
                <DriverTeamDetailItem />
                <DriverTeamDetailItem />
            </div>
        </div>
    );
}

export default TeamDetailHeader;