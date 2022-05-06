import React from 'react';

import Socials from '../../3_molecules/Socials/Socials';

import newsletterImage from './article1.jpeg';

function Newsletter() {
    return (
        <section className="newsletter section">
            <div className="newsletter__content">
                <img className="newsletter__content__img" src={newsletterImage} alt="" />

                <div className="newsletter__content__container">
                    <h3 className="newsletter__content__title">Make sure you don't miss anything!</h3>

                    <p className="newsletter__content__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                    </p>

                    <form className="form">
                        <input className="form__input" type="text" placeholder="Your email here..." />
                        <button className="button button-primary">Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                    </form>

                    <Socials />
                </div>
            </div>
        </section>
    );
}

export default Newsletter;