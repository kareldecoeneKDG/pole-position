import React from 'react';

import placeholder from './article1.jpeg';

function RecentShots() {
    return (
        <section className="recentShots section">
            <h2 className="section__title">Most recent shots</h2>

            <div className="carousel">
                <img className="carousel__placeholder" src={placeholder} alt="carousel__img" />

                <a className="carousel__arrow icon-bg-lg"><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
                <a className="carousel__arrow icon-bg-lg"><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
        </section>
    );
}

export default RecentShots;