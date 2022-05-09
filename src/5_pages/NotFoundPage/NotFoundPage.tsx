import React from 'react';

import ErrorLogo from './error-logo.png';
import ErrorLogoDark from './error-logo-dark.png';

function NotFoundPage() {
    return (
        <section className="error404">
            <div className="error404__content">
                <img className="error404__content__logo light" src={ErrorLogo} alt="Error 404 logo" />
                <img className="error404__content__logo dark" src={ErrorLogoDark} alt="Error Dark logo" />

                <h2 className="error404__content__title">Oh no, something went wrong!</h2>

                <p className="error404__content__p">
                    Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                </p>

                <div className="center">
                    <a className="button button-primary" href="#">Home <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;