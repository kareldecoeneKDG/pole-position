import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import articleImage from './article1.jpeg';

function Article() {
    return (
        <article className="article">
            <img className="article__img" src={articleImage} alt="article cover image" />

            <div className="article__content">
                <div className="article__content__top flex">
                    <p className="tag mercedes mercedes-bg">Mercedes</p>
                    <p className="tag detail">8 min read</p>
                </div>

                <h4 className="article__content__title">Mogelijk voordeel voor Red Bull in tweede helft van seizoen</h4>

                <p className="article__content__paragraph">
                    Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                </p>

                <div className="article__content__bottom flex">
                    <a className="button button-secondary skew" href="#"><span>Read Article <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                    <a className="icon-bg" href="#"><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </div>
        </article>
    );
}

export default Article;