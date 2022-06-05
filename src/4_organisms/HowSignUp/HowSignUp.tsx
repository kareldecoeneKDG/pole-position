import React from 'react';
import { Link } from 'react-router-dom';

import SignUpStep from '../../3_molecules/SignUpStep/SignUpStep';

function HowSignUp() {
    return (
        <section className="howsignup section">
            <h2 className="howsignup__title section__title">How to sign up for this awesome blog?</h2>

            <p className="howsignup__p">
                Follow these steps to give yourself quick and easy access to everything F1! You will thank yourself later...
            </p>

            <div className="howsignup__steps">
                <SignUpStep />
                <SignUpStep />
                <SignUpStep />
                <SignUpStep />
            </div>

            <div className="center">
                <Link className="button button-primary skew" to="/register">
                    <span>Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                </Link>
            </div>
        </section>
    );
}

export default HowSignUp;