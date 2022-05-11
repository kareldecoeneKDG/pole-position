import React from 'react';

import LatestNewsArticle from '../../3_molecules/LatestNewsArticle/LatestNewsArticle';



function LatestNews() {
    return (
        <section className="latestnews section">
            <h2 className="latestnews__title section__title">Latest news</h2>

            {/* MOBILE ARTICLES */}
            <div className="latestnews__articles flex-column mobile">
                <LatestNewsArticle />
                <LatestNewsArticle />
            </div>

            {/* TABLET LANDSCAPE ARTICLES */}
            <div className="latestnews__articles tablet-landscape flex">
                <LatestNewsArticle />

                <div className="latestnews__articles__smallones flex-column">
                    <LatestNewsArticle />
                    <LatestNewsArticle />
                </div>
            </div>

            <p className="cta__p">You wan't to know F1 latest news?</p>

            <a className="button button-primary">Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
        </section>
    );
}

export default LatestNews;