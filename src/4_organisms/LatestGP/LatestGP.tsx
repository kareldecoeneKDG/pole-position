import React from 'react';
import { Link } from 'react-router-dom';

function LatestGP() {
    return (
        <div className="latestGP">
            <h2 className="latestGP__title">See the latest news for the next GP!</h2>

            <p className="latestGP__paragraph">
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
            </p>

            <Link className="button button-primary" to="/grandprix-detail">
                Australian GP <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i>
            </Link>
        </div>
    );
}

export default LatestGP;