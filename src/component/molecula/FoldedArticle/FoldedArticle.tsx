import { memo } from "react";
import { IArticle, IEvents, ILaunches } from "../../../type";
import { FoldedNewsImg } from "../../atom/FoldedNewsImg";
import { FoldedNewsPublished } from "../../atom/FoldedNewsPublished";
import { FoldedNewsSite } from "../../atom/FoldedNewsSite";
import { FoldedNewsSummary } from "../../atom/FoldedNewsSummary";
import { FoldedNewsTitle } from "../../atom/FoldedNewsTitle";
import { FoldedNewsUrl } from "../../atom/FoldedNewsUrl";
import "./index.css";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";

interface IFoldedArticle {
    article: IArticle;
}
export const FoldedArticle = memo(({ article }: IFoldedArticle) => {
    /*  const params = useParams() as any;
     useEffect(() => {
         console.log('id', params);
 
          dispatch(getSelectedArticlesAction(params.id));
}, [ dispatch, params]); */
    return (
        <div className="folded-article-wrapper">
            <FoldedNewsImg img={article.imageUrl} />
            <FoldedNewsTitle title={article.title} />
            <FoldedNewsSummary summary={article.summary} />
            <div className="folded-article">
                <FoldedNewsSite site={article.newsSite} />
                <FoldedNewsPublished publishedAt={article.publishedAt} />
            </div>
            <FoldedNewsUrl url={article.url} />
        </div>
    )
})


