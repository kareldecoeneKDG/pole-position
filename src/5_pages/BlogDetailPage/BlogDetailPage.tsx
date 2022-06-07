import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import FadeIn from 'react-fade-in';

import Navbar from "../../4_organisms/NavBar/NavBar";
import Socials from '../../3_molecules/Socials/Socials';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';

import articleImg from './article1.jpeg';

const Fade = require("react-reveal/Fade");

function BlogDetailPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <FadeIn>
            <section className="blogDetail">
                <Helmet>
                    <title>Blog detail | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <div className="blogDetail__content section">
                    <p className="blogDetail__content__date tag detail">Januari 13 2022 - 10:15</p>

                    <h2 className="blogDetail__content__title section__title">
                        Mogelijk voordeel voor Red Bull in tweede helft van seizoen
                    </h2>

                    <p className="blogDetail__content__intro">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een. Er zijn vele variaties van passages van Lorem Ipsum beschikbaar maar het merendeel heeft te lijden gehad van wijzigingen in een of andere vorm.
                    </p>

                    <img className="blogDetail__content__img header-img" src={articleImg} alt="detail picture blogpost" />

                    <div className="flex-desktop">
                        <div className="first-block">
                            <h4 className="blogDetail__content__subtitle">Not enough time spent selling</h4>

                            <p className="blogDetail__content__p">
                                In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.
                                In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.<br /><br />

                                In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.
                                In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.
                            </p>
                        </div>

                        <div className="blogDetail__content__blogpostInfo desktop">
                            <p className="blogDetail__content__blogpostInfo__title">PUBLISHER</p>
                            <p className="blogDetail__content__blogpostInfo__p">Karel Decoene</p>

                            <p className="blogDetail__content__blogpostInfo__title">TAGS</p>
                            <p className="blogDetail__content__blogpostInfo__p"><button className="button mercedes mercedes-bg skew"><span>Mercedes</span></button><button className="button redBull redBull-bg skew"><span>Red Bull</span></button></p>

                            <p className="blogDetail__content__blogpostInfo__title">SHARE</p>
                            <Socials />
                        </div>
                    </div>

                    <img className="blogDetail__content__img" src={articleImg} alt="detail picture blogpost" />

                    <div className="regular-block">
                        <h4 className="blogDetail__content__subtitle">Not enough time spent selling</h4>

                        <p className="blogDetail__content__p">
                            In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.
                            In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.<br /><br />

                            In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.
                            In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.
                        </p>
                    </div>

                    <div className="blogDetail__content__blogpostInfo mobile">
                        <p className="blogDetail__content__blogpostInfo__title">PUBLISHER</p>
                        <p className="blogDetail__content__blogpostInfo__p">Karel Decoene</p>

                        <p className="blogDetail__content__blogpostInfo__title">TAGS</p>
                        <p className="blogDetail__content__blogpostInfo__p"><button className="button mercedes mercedes-bg skew"><span>Mercedes</span></button><button className="button redBull redBull-bg skew"><span>Red Bull</span></button></p>

                        <p className="blogDetail__content__blogpostInfo__title">SHARE</p>
                        <Socials />
                    </div>
                </div>

                <Fade delay={500}>
                    <MoreRecentNews />
                </Fade>
            </section>
        </FadeIn>
    );
}

export default BlogDetailPage;