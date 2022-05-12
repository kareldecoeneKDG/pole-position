import React from 'react';

import PlatformItem from '../../3_molecules/PlatformItem/PlatformItem';

function Platform() {
    return (
        <section className="platform section">
            <div className="flex-desktop">
                <div className="platform__heading">
                    <h2 className="platform__title section__title">All-in-one platform</h2>
                    <p className="desktop">Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.</p>
                </div>

                <div className="platform__items ">
                    <PlatformItem />
                    <PlatformItem />
                    <PlatformItem />
                    <PlatformItem />
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