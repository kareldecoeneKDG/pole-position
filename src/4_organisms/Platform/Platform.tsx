import React from 'react';
import './Platform.scss';

function Platform() {
    return (
        <section className="platform section">
            <h2 className="platform__h2">All-in-one platform</h2>

            <div className="platform__items ">
                <div className="platform-item">
                    <h4 className="platform-item__title"><i className="fa fa-check" aria-hidden="true"></i> 24/7 access to latest news</h4>

                    <p className="platform-item__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het.
                    </p>
                </div>

                <div className="platform-item">
                    <h4 className="platform-item__title"><i className="fa fa-check" aria-hidden="true"></i> 24/7 access to latest news</h4>

                    <p className="platform-item__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het.
                    </p>
                </div>

                <div className="platform-item">
                    <h4 className="platform-item__title"><i className="fa fa-check" aria-hidden="true"></i> 24/7 access to latest news</h4>

                    <p className="platform-item__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het.
                    </p>
                </div>

                <div className="platform-item">
                    <h4 className="platform-item__title"><i className="fa fa-check" aria-hidden="true"></i> 24/7 access to latest news</h4>

                    <p className="platform-item__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het.
                    </p>
                </div>
            </div>

            <div className="signup flex-desktop">
                <div className="signup__content">
                    <h3 className="signup__content__title">$9/month</h3>
                    <p className="signup__content__p">It's cheap as well</p>
                </div>

                <a className="button button-primary" href="#">Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
        </section>
    );
}

export default Platform;