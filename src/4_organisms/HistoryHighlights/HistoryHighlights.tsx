import React from 'react';

import HistoryHighlight from '../../3_molecules/HistoryHighlight/HistoryHighlight';

function HistoryHighlights() {
    return (
        <section className="historyHighlights section">
            <h2 className="historyHighlights__title section__title">History highlights</h2>

            <p className="historyHighlights__p">
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een. Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
            </p>

            <div className="historyHighlights__highlights">
                <HistoryHighlight />
                <HistoryHighlight />
                <HistoryHighlight />
            </div>
        </section>
    );
}

export default HistoryHighlights;