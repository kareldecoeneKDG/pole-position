import React from 'react';

import Charles from './Charles.jpg';
import Helmet from './helmet-cut.png';

function Driver() {
    return (
        <div className="driver-team">
            <img className="driver-team__img" src={Charles} alt="Charles Leclercq" />

            <div className="driver-team__content">
                <p className="tag tag-driver driver-team__content__tag"><img className="driver-team__content__tag__helmet-flag" src={Helmet} alt="driver helmet icon" />driver</p>

                <h3 className="driver-team__content__title">Charles Leclercq</h3>

                <p className="driver-team__content__paragraph">Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.</p>

                <a className="button button-secondary" href="#">Discover driver <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
        </div>
    );
}

export default Driver;