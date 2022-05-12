import React from 'react';

import Max from './max.png';
import RedBullLogo from './redbull.png';

function StandingDriver() {
    return (
        <div className="standing standing-driver redBull-bg flex-column">
            <div className="standing__top flex">
                <div className="standing__top__team-logo">
                    <img className="standing__top__team-logo__img" src={RedBullLogo} alt="team logo" />
                </div>

                <div className="standing__top__driver">
                    <p className="tag detail">Max</p>
                    <h4 className="standing__top__driver__lastname redBull">Verstappen</h4>
                </div>
            </div>

            <div className="standing__bottom">
                <div className="standing__bottom__place flex">
                    <div className="tag detail standing__bottom__place__div desktop">
                        3 poles
                    </div>

                    <div className="tag detail standing__bottom__place__div mobile">
                        1st place
                    </div>

                    <div className="tag detail standing__bottom__place__div">
                        12 wins
                    </div>
                </div>

                <h3 className="standing__bottom__points">333 points</h3>
            </div>

            <div className="standing__number redBull desktop">1</div>

            <img className="standing__driver-img" src={Max} alt="picture of driver" />
        </div>
    );
}

export default StandingDriver;