import React from "react";
import { ArticleItem } from "../types";
import { Link } from "react-router-dom";

import FerrariImage from './charles-leclerc-ferrari.webp';
import RedBullImage from './max-verstappen-red-bull.jpeg';
import McLarenImage from './daniel-ricciardo-mclaren.webp';

interface ListItemProps {
    article: ArticleItem
}

const ListItem = ({ article }: ListItemProps) => {
    var imageUrl = "";

    // first image
    if(article.image == "./max-verstappen-red-bull.jpeg") {
        imageUrl = RedBullImage;
    } else if(article.image == "./charles-leclerc-ferrari.webp") {
        imageUrl = FerrariImage;
    } else if (article.image == "./daniel-ricciardo-mclaren.webp") {
        imageUrl = McLarenImage;
    }

    return (
        <Link to={`/detail/${article.id}`}>
            {/* Actual article */}
            <article className="article">
                <div className="article__content">
                    <div>
                        {/* <img className="article__img" src={require("" + article.image)} alt="article cover image" /> */}
                        <img className="article__img" src={imageUrl} alt="article cover image" />

                        <div className="article__content__top flex">
                            <p className={`tag ${article.mainTagColor} ${article.mainTagBackgroundColor}`}>{article.mainTag}</p>
                            <p className="tag detail">{article.minutesRead} min read</p>
                        </div>

                        <h4 className="article__content__title">{article.title}</h4>
                        <p className="article__content__paragraph">{article.intro}</p>
                    </div>

                    <div className="article__content__bottom flex">
                        <a className="button button-secondary skew" href="#"><span>Read Article <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                        <a className="icon-bg" href="#"><i className="fa fa-bookmark" aria-hidden="true"></i></a>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default ListItem;