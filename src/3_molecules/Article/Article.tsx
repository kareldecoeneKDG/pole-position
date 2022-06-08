import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import { ArticleItem } from "../../types";

import articleImage from './article1.jpeg';

interface ListItemProps {
    article: ArticleItem
}

function Article({ article }: ListItemProps) {
    return (
        <article className="article">
            {/*<img className="article__img" src={articleImage} alt="article cover image" />

            <div className="article__content">
                <div className="article__content__top flex">
                    <p className="tag mercedes mercedes-bg">Mercedes</p>
                    <p className="tag detail">8 min read</p>
                </div>

                <h4 className="article__content__title">Possible advantage for Red Bull in the second half of the season</h4>

                <p className="article__content__paragraph">
                    Helmut Marko has confirmed that Red Bull Racing's RB18 is roughly ten kilos of 'overweight'...
                </p>

                <div className="article__content__bottom flex">
                    <a className="button button-secondary skew" href="#"><span>Read Article <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                    <a className="icon-bg" href="#"><i className="fa fa-bookmark" aria-hidden="true"></i></a>
                </div>
            </div>*/}

            <div>{article?.id}</div>
            <div>{article?.image}</div>
            <div>{article?.mainTag}</div>
            <div>{article?.mainTagColor}</div>
            <div>{article?.mainTagBackgroundColor}</div>
            <div>{article?.minutesRead}</div>
            <div>{article?.title}</div>
            <div>{article?.intro}</div>
        </article>
    );
}

export default Article;