import { memo } from "react";
import { INews } from "../../../type";
import { FoldedNewsImg } from "../../atom/FoldedNewsImg";
import { FoldedNewsSummary } from "../../atom/FoldedNewsSummary";
import { FoldedNewsTitle } from "../../atom/FoldedNewsTitle";
import { NewsArticleSliceImg } from "../../atom/NewsArticleSliceImg";
import { NewsArticleSliceSummary } from "../../atom/NewsArticleSliceSummary";
import { NewsArticleSliceTitle } from "../../atom/NewsArticleSliceTitle";
import "./index.css";

interface INewsArticleSlice {
    news: INews;
}

export const NewsArticleSlice = memo(({ news }: INewsArticleSlice) => {

    return (
        <div className="news-for-home-page">
            <NewsArticleSliceImg img={news.imageUrl} />
            <NewsArticleSliceTitle title={news.title} />
            <NewsArticleSliceSummary summary={news.summary} />
        </div>
    )
})


