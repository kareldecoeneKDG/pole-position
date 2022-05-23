import React from 'react';
import { Link } from 'react-router-dom';

import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import GrandPrix from '../../3_molecules/GrandPrix/GrandPrix';

function GrandPrixsPage() {
    return (
        <div className="grandprixs">
            <LatestGP />

            <div className="grandprixs-section section">
                <h2 className="section__title">All 2022 Grand Prixs</h2>

                <div className="grandprixs-section__items">
                    <Link to="/grandprix-detail">
                        <GrandPrix />
                    </Link>

                    <Link to="/grandprix-detail">
                        <GrandPrix />
                    </Link>

                    <Link to="/grandprix-detail">
                        <GrandPrix />
                    </Link>

                    <Link to="/grandprix-detail">
                        <GrandPrix />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default GrandPrixsPage;