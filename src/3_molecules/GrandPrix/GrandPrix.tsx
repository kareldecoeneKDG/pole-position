import React from 'react';
import circuit from './gp-1.png';
import flag from './flag-italy.png';

function GrandPrix() {
    return (
        <div className="grandprix">
            <div className="grandprix__header">
                <div className="grandprix__header__title flex">
                    <img className="flag" src={flag} alt="Flag of country GP" />
                    <h3>Italian GP</h3>
                </div>
                <div className="tag detail">
                    Autodromo Nazionale Monza
                </div>
            </div>

            <img className="grandprix__circuit" src={circuit} alt="Circuit of GP" />

            <div className="grandprix__datetime">
                <h3 className="grandprix__datetime__date">24th april | 12:30</h3>
                <p className="tag circuit"><i className="fa fa-clock-o" aria-hidden="true"></i> 2 days, 8 hours</p>
            </div>

            <a className="button button-secondary" href="#">Italian GP <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
        </div>
    );
}

export default GrandPrix;