import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import Article from '../../3_molecules/Article/Article';
import circuit from './gp-1.png';

function GrandPrixDetailPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <FadeIn>
            <div className="grandprixDetail">
                <Helmet>
                    <title>Barcelona GP | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <div className="banner">
                    <div className="banner__bg"></div>

                    <div className="banner__info">
                        <div className="banner__info__circuit">
                            <img className="banner__info__circuit__img" src={circuit} alt="Circuit preview" />
                        </div>

                        <h2 className="banner__info__title">2022 Barcelona GP</h2>

                        <p className="button button-secondary skew"><span><i className="fa fa-calendar" aria-hidden="true"></i> 27 - 29 may</span></p>
                    </div>
                </div>

                <section className="grandprixDetail__articles section">
                    <div className="breadcrumbs">
                        <Link to="/grandprixs" className="breadcrumbs__item">Grand Prixs</Link>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        <NavLink to="/grandprix-detail" className="breadcrumbs__item">Spanisch Grand Prix</NavLink>
                    </div>

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
        </FadeIn>
    );
}

export default GrandPrixDetailPage;