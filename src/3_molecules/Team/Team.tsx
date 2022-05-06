import React from 'react';

import Ferrari from './Ferrari.jpg';

function Team() {
    return (
        <div className="driver-team">
            <img className="driver-team__img" src={Ferrari} alt="Charles Leclercq" />

            <div className="driver-team__content">
                <p className="tag tag-driver driver-team__content__tag"><i className="fa fa-flag" aria-hidden="true"></i> team</p>

                <h3 className="driver-team__content__title">Ferrari</h3>

                <p className="driver-team__content__paragraph">Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.</p>

                <a className="button button-secondary" href="#">Discover team <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
        </div>
    );
}

export default Team;