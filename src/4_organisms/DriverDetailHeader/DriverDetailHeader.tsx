import React from 'react';

import DriverTeamDetailItem from '../../3_molecules/DriverTeamDetailItem/DriverTeamDetailItem';
import Socials from '../../3_molecules/Socials/Socials';

import Max from './max.png';
import MaxLogo from './Max-logo.png';
import RedBullLogo from './redbull.png';
import { Link, NavLink } from 'react-router-dom';

function DriverDetailHeader() {
    return (
        <div className="detailHeader section">
            {/* Breadcrumbs */}
            <div className="breadcrumbs mobile">
                <Link to="/driverStandings" className="breadcrumbs__item">Drivers</Link>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <NavLink to="/driver" className="breadcrumbs__item">Max Verstappen</NavLink>
            </div>

            <div className="top flex">
                <div className="top__drivers top-driver">
                    <img className="top-driver__img" src={Max} alt="Picture of driver" />
                </div>

                <div className="top__info">
                    <div className="top__info__logos flex">
                        <Link to="/team">
                            <img className="top__info__logos__team-logo" src={RedBullLogo} alt="F1 team logo" />
                        </Link>

                        <a href="https://nl.verstappen.com/" target="_blank">
                            <img className="top__info__logos__driver-logo" src={MaxLogo} alt="F1 driver personal logo" />
                        </a>
                    </div>

                    <h2 className="top__info__title">Max<br /> Verstappen</h2>

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

export default DriverDetailHeader;