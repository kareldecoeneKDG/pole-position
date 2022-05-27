import React from 'react';
import { Link } from 'react-router-dom';

import Benefit from '../../3_molecules/Benefit/Benefit';

function Benefits() {
    return (
        <section className="benefits section">
            <h2 className="benefits__title section__title">Discuss the next F1 GP live with others</h2>

            <p className="benefits__p">
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
            </p>

            <div className="benefits__items flex-desktop">
                <Benefit />
                <Benefit />
                <Benefit />
                <Benefit />
            </div>

            <p className="cta__p">You've heard enough?</p>

            <Link className="button button-primary skew" to="/register">
                <span>Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
            </Link>
        </section>
    );
}

export default Benefits;