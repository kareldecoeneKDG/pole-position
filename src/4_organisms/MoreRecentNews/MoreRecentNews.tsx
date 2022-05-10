import React from 'react';

import Article from '../../3_molecules/Article/Article';

function MoreRecentNews() {
    return (
        <div className="moreRecentNews section">
            <h2 className="section__title">More recent news</h2>

            <div className="moreRecentNews__articles">
                <Article />
                <Article />
                <Article />
                <Article />
            </div>

            <div className="center">
                <a className="button button-secondary" href="#">All latest news <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
        </div>
    );
}

export default MoreRecentNews;