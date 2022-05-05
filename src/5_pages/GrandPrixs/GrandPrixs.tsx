import React from 'react';

import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import GrandPrix from '../../3_molecules/GrandPrix/GrandPrix';

function GrandPrixs() {
    return (
        <div className="grandprixs">
            <LatestGP />

            <div className="grandprixs-section section">
                <h2 className="grandprixs-section__title">All 2022 Grand Prixs</h2>

                <div className="grandprixs-section__items">
                    <GrandPrix />
                    <GrandPrix />
                    <GrandPrix />
                    <GrandPrix />
                </div>
            </div>
        </div>
    );
}

export default GrandPrixs;