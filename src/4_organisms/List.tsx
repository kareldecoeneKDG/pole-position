import React from 'react';
import { ArticleItem } from '../types';
import ListItem from "../3_molecules/ListItem";

interface ListProps {
    articles: ArticleItem[]
}

function List({ articles }: { articles: ArticleItem[] }) {
    return (
        <div className="moreRecentNews section">
            <div className="moreRecentNews__articles">
                {articles.map((article: ArticleItem) => {
                    return <ListItem article={article} />
                })}
            </div>
        </div>
    );
}

export default List;