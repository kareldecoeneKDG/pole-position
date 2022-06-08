import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleItem } from "../../types";

import Article from '../../3_molecules/Article/Article';

interface BlogPageProps {
    articles: ArticleItem[],
}

function MoreRecentNews({articles} : BlogPageProps) {
    return (
        <div className="moreRecentNews section">
            <h2 className="section__title">More recent news</h2>

            <div className="moreRecentNews__articles">
                {/*<Link to="/blog-detail">
                    <Article />
                </Link>

                <Link to="/blog-detail">
                    <Article />
                </Link>

                <Link to="/blog-detail">
                    <Article />
                </Link>*/}

                <ul>{articles.map((article: ArticleItem) => {
                    return <Article article={article} />
                })}</ul>
            </div>

            <div className="center">
                <Link className="button button-secondary skew" to="/blog"><span>All latest news <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></Link>
            </div>
        </div>
    );
}

export default MoreRecentNews;