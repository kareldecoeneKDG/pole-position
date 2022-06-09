import React from 'react';
import List from '../../4_organisms/List';
import { ArticleItem } from '../../types';

interface ListPageProps {
    articles: ArticleItem[],
}

const ListPage = ({articles} : ListPageProps) => {
    return (
        <div>
            <List articles={articles} />
        </div>
    );
}

export default ListPage;