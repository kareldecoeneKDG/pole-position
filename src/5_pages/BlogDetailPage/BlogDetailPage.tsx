import React from 'react';

import Socials from '../../3_molecules/Socials/Socials';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';

import articleImg from './article1.jpeg';

function BlogDetailPage() {
    return (
        <section className="blogDetail">
            <div className="blogDetail__content section">
                <p className="blogDetail__content__date tag detail">Januari 13 2022 - 10:15</p>

                <h2 className="blogDetail__content__title section__title">
                    Mogelijk voordeel voor Red Bull in tweede helft van seizoen
                </h2>

                <p className="blogDetail__content__intro">
                    Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een. Er zijn vele variaties van passages van Lorem Ipsum beschikbaar maar het merendeel heeft te lijden gehad van wijzigingen in een of andere vorm.
                </p>

                <img className="blogDetail__content__img" src={articleImg} alt="detail picture blogpost" />

                <h4 className="blogDetail__content__subtitle">Not enough time spent selling</h4>

                <p className="blogDetail__content__p">
                    In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.
                </p>

                <img className="blogDetail__content__img" src={articleImg} alt="detail picture blogpost" />

                <h4 className="blogDetail__content__subtitle">Not enough time spent selling</h4>

                <p className="blogDetail__content__p">
                    In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.
                </p>

                <div className="blogDetail__content__blogpostInfo">
                    <p className="blogDetail__content__blogpostInfo__title">PUBLISHER</p>
                    <p className="blogDetail__content__blogpostInfo__p">Karel Decoene</p>

                    <p className="blogDetail__content__blogpostInfo__title">TAGS</p>
                    <p className="blogDetail__content__blogpostInfo__p"><span className="tag mercedes mercedes-bg">Mercedes</span><span className="tag redBull redBull-bg">Red Bull</span></p>

                    <p className="blogDetail__content__blogpostInfo__title">SHARE</p>
                    <Socials />
                </div>
            </div>

            <MoreRecentNews />
        </section>
    );
}

export default BlogDetailPage;