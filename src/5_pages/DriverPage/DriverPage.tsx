import React from 'react';

import Article from '../../3_molecules/Article/Article';

import DriverDetailHeader from '../../4_organisms/DriverDetailHeader/DriverDetailHeader';
import LatestNews from '../../4_organisms/LatestNews/LatestNews';
import FactsNumbers from '../../4_organisms/FactsNumbers/FactsNumbers';

function DriverPage() {
    return (
        <div className="driver-page">
            <DriverDetailHeader />
            <LatestNews />
            <FactsNumbers />

            <div className="moreLatestNews section">
                <h2 className="section__title">More recent news</h2>

                <Article />
                <Article />
                <Article />
                <Article />

                <div className="center">
                    <a className="button button-secondary" href="#">All latest news <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default DriverPage;