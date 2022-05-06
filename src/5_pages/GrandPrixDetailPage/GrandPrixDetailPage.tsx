import React from 'react';
import circuit from './gp-1.png';
//import bannerImg from './gp-detail-img.png';

import Article from '../../3_molecules/Article/Article';

function GrandPrixDetailPage() {
    return (
        <div className="grandprix-detail">
            <div className="banner">
                <div className="banner__bg"></div>

                <div className="banner__info">
                    <div className="banner__info__circuit">
                        <img className="banner__info__circuit__img" src={circuit} alt="Circuit preview" />
                    </div>

                    <p className="button button-secondary"><i className="fa fa-calendar" aria-hidden="true"></i> 27 - 29 may</p>
                </div>
            </div>

            <section className="grandprix-detail__articles section">
                <h2 className="section__title">2022 Barcelona GP</h2>

                <Article />
                <Article />
                <Article />
                <Article />

                <div className="center">
                    <a className="button button-tertiary">More articles <i className="fa fa-chevron-down first-chevron" aria-hidden="true"></i></a>
                </div>
            </section>
        </div>
    );
}

export default GrandPrixDetailPage;