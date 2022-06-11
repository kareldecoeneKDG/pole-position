import React from 'react';
import { Link } from 'react-router-dom';

//types
import { DriverItem } from '../../types';

import Max from './max.png';
import RedBullLogo from './redbull.png';

interface StandingDriverProps {
    driver: DriverItem
}

function StandingDriver({ driver }: StandingDriverProps) {
    return (
        <Link to={`/driver/${driver.id}`}>
            <div className={`standing standing-driver ${driver.team}-bg flex-column`}>
                <div className="standing__top flex">
                    <div className="standing__top__team-logo">
                        <img className="standing__top__team-logo__img" src={driver.teamLogo} alt="team logo" />
                    </div>

                    <div className="standing__top__driver">
                        <p className="tag detail">{driver.firstName}</p>
                        <h4 className={`standing__top__driver__lastname ${driver.team}`}>{driver.lastName}</h4>
                    </div>
                </div>

                <div className="standing__bottom">
                    <div className="standing__bottom__place flex">
                        <div className="tag detail standing__bottom__place__div standing-div-border desktop">
                            {driver.polePositions} poles
                        </div>

                        <div className="tag detail standing__bottom__place__div standing-div-border mobile">
                            {driver.polePositions} poles
                        </div>

                        <div className="tag detail standing__bottom__place__div">
                            {driver.fastestLaps} fastest laps
                        </div>
                    </div>

                    <h3 className="standing__bottom__points">{driver.points} pts</h3>
                </div>

                <div className={`standing__number ${driver.team} desktop`}>{driver.raceNumber}</div>

                <div className="standing__driver-img">
                    <img src={driver.image} alt="picture of driver" />
                </div>
            </div>
        </Link>
    );
}

export default StandingDriver;