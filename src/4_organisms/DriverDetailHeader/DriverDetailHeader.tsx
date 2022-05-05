import React from 'react';

import DriverTeamDetailItem from '../../3_molecules/DriverTeamDetailItem/DriverTeamDetailItem';

import Max from './max.png';
import MaxLogo from './Max-logo.png';
import RedBullLogo from './redbull.png';

function DriverDetailHeader() {
    return (
        <div className="detail-header">
            <div className="top flex">
                <div className="top__drivers top-driver">
                    <img className="top-driver__img" src={Max} alt="Picture of driver" />
                </div>

                <div className="top__info">
                    <div className="top__info__logos flex">
                        <img className="top__info__logos__team-logo" src={RedBullLogo} alt="F1 team logo" />
                        <img className="top__info__logos__driver-logo" src={MaxLogo} alt="F1 driver personal logo" />
                    </div>

                    <h2 className="top__info__title">Max<br /> Verstappen</h2>

                    <div className="top__info__socials socials flex">
                        <a className="socials__item" href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>

                        <a className="socials__item" href="#">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>

                        <a className="socials__item" href="#">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>

                        <a className="socials__item" href="#">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
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

export default DriverDetailHeader;