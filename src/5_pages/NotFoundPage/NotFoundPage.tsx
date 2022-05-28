import React, { useEffect } from 'react';

import ErrorLogo from './error-logo.png';
import ErrorLogoDark from './error-logo-dark.png';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);

        //change title of tab
        document.title = "Error | Pole Positon - F1 Blog";
    }, []);
    
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
                    <Link className="button button-primary skew" to="/">
                        <span>Home <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;