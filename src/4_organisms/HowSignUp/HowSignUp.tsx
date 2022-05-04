import React from 'react';

function HowSignUp() {
    return (
        <section className="howsignup section">
            <h2 className="howsignup__h2">How to sign up for this awesome blog?</h2>

            <p className="howsignup__p">
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
            </p>

            <div className="howsignup__steps">
                <div className="step">
                    <h3 className="step__title">Fill in email</h3>
                    <p className="step__p">Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.</p>

                    <div className="step__number">1</div>
                </div>

                <div className="step">
                    <h3 className="step__title">Make account</h3>
                    <p className="step__p">Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.</p>

                    <div className="step__number">2</div>
                </div>

                <div className="step">
                    <h3 className="step__title">Login</h3>
                    <p className="step__p">Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.</p>

                    <div className="step__number">3</div>
                </div>

                <div className="step">
                    <h3 className="step__title">Fulfill payment</h3>
                    <p className="step__p">Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.</p>

                    <div className="step__number">4</div>
                </div>
            </div>

            <a className="button button-primary" href="#">Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
        </section>
    );
}

export default HowSignUp;