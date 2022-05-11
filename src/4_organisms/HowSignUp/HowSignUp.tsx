import React from 'react';

import SignUpStep from '../../3_molecules/SignUpStep/SignUpStep';

function HowSignUp() {
    return (
        <section className="howsignup section">
            <h2 className="howsignup__title section__title">How to sign up for this awesome blog?</h2>

            <p className="howsignup__p">
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
            </p>

            <div className="howsignup__steps">
                <SignUpStep />
                <SignUpStep />
                <SignUpStep />
                <SignUpStep />
            </div>

            <div className="center">
                <a className="button button-primary" href="#">Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
        </section>
    );
}

export default HowSignUp;