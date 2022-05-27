import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Article from '../../3_molecules/Article/Article';
import circuit from './gp-1.png';

function GrandPrixDetailPage() {
    useEffect(() => { document.documentElement.scrollTo(0,0); }, []);
    
    return (
        <div className="grandprixDetail">
            <div className="banner">
                <div className="banner__bg"></div>

                <div className="banner__info">
                    <div className="banner__info__circuit">
                        <img className="banner__info__circuit__img" src={circuit} alt="Circuit preview" />
                    </div>

                    <h2 className="banner__info__title">2022 Barcelona GP <i className="fa fa-chevron-down" aria-hidden="true"></i></h2>

                    <p className="button button-secondary skew"><span><i className="fa fa-calendar" aria-hidden="true"></i> 27 - 29 may</span></p>
                </div>
            </div>

            <section className="grandprixDetail__articles section">
                <h2 className="section__title">2022 Barcelona GP</h2>

                <div className="grandprixDetail__articles__articles">
                    <Link to="/blog-detail">
                        <Article />
                    </Link>

                    <Link to="/blog-detail">
                        <Article />
                    </Link>

                    <Link to="/blog-detail">
                        <Article />
                    </Link>

                    <Link to="/blog-detail">
                        <Article />
                    </Link>

                    <Link to="/blog-detail">
                        <Article />
                    </Link>

                    <Link to="/blog-detail">
                        <Article />
                    </Link>
                </div>

                <div className="center">
                    <a className="button button-tertiary skew"><span>More articles <i className="fa fa-chevron-down first-chevron" aria-hidden="true"></i></span></a>
                </div>
            </section>
        </div>
    );
}

export default GrandPrixDetailPage;