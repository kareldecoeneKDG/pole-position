import React from 'react';
import './LatestNews.scss';

function LatestNews() {
    return (
        <section className="latestnews section">
            <h2>Latest news</h2>

            <div className="latestnews__articles flex-column">
                <div className="latestnews__articles__article">
                    <h4>Mogelijk voordeel vor Red Bull in tweede helft van seizoen</h4>
                </div>

                <div className="latestnews__articles__article">
                    <h4>Mogelijk voordeel vor Red Bull in tweede helft van seizoen</h4>
                </div>
            </div>

            <p className="cta__p">You wan't to know F1 latest news?</p>

            <a className="button button-primary">Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
        </section>
    );
}

export default LatestNews;