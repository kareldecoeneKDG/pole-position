import React from "react";
import { useParams } from "react-router-dom";
import { ArticleItem } from "../../types";

interface ParamTypes {
    id: string | undefined
}

interface ArticleDetailPageProps {
    articles: ArticleItem[]
}

function ArticleDetailPage({articles} : ArticleDetailPageProps) {
    let { id } = useParams();
    let article = articles.find((article: ArticleItem) => article.id === parseInt(id!));

    return (
        <div>
            <div>{article?.id}</div>
            <div>{article?.image}</div>
            <div>{article?.mainTag}</div>
            <div>{article?.mainTagColor}</div>
            <div>{article?.mainTagBackgroundColor}</div>
            <div>{article?.minutesRead}</div>
            <div>{article?.title}</div>
            <div>{article?.intro}</div>
        </div>
    )
}

export default ArticleDetailPage;