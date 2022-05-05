import React from 'react';

import Max from './max.png';
import RedBullLogo from './redbull.png';

function StandingTeam() {
    return (
        <div className="standing standing-team redBull-bg flex-column">
            <div className="standing__top flex">
                <div className="standing__top__team-logo">
                    <img className="standing__top__team-logo__img" src={RedBullLogo} alt="team logo" />
                </div>

                <div className="standing__top__driver">
                    <h4 className="standing__top__driver__teamname redBull">Red Bull</h4>
                </div>
            </div>

            <div className="standing__bottom">
                <div className="standing__bottom__place flex">
                    <div className="standing__bottom__place__placing">
                        1st place
                    </div>

                    <div className="standing__bottom__place__wins">
                        12 wins
                    </div>
                </div>

                <h3 className="standing__bottom__points">333 points</h3>
            </div>

            <img className="standing-team__driver driver1" src={Max} alt="picture of driver" />
            <img className="standing-team__driver driver2" src={Max} alt="picture of driver" />
        </div>
    );
}

export default StandingTeam;