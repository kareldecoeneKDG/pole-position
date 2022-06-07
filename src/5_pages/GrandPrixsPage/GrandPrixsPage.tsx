import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import GrandPrix from '../../3_molecules/GrandPrix/GrandPrix';

const Fade = require("react-reveal/Fade");

function GrandPrixsPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <FadeIn>
            <div className="grandprixs">
                <Helmet>
                    <title>Grand Prixs | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <LatestGP />
                </Fade>

                <Fade>
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
                </Fade>
            </div>
        </FadeIn>
    );
}

export default GrandPrixsPage;