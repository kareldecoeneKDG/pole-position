import React from 'react';
import './Benefits.scss';

function Benefits() {
    return (
        <section className="benefits section">
            <h2 className="benefits__h2">Discuss the next F1 GP live with others</h2>

            <p className="benefits__p">
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
            </p>

            <div className="benefits__items flex-desktop">
                <div className="benefit">
                    <div className="benefit__icon-container">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </div>

                    <h4 className="benefit__title">Comment on live GP</h4>

                    <p className="benefit__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit__icon-container">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </div>

                    <h4 className="benefit__title">Comment on live GP</h4>

                    <p className="benefit__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit__icon-container">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </div>

                    <h4 className="benefit__title">Comment on live GP</h4>

                    <p className="benefit__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit__icon-container">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </div>

                    <h4 className="benefit__title">Comment on live GP</h4>

                    <p className="benefit__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                    </p>
                </div>
            </div>

            <p className="cta__p">You've heard enough?</p>

            <a className="button button-primary">Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
        </section>
    );
}

export default Benefits;