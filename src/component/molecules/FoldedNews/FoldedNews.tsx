import { memo } from "react";
import { INews } from "../../../type";
import { FoldedNewsImg } from "../../atom/FoldedNewsImg";
import { FoldedNewsPublished } from "../../atom/FoldedNewsPublished";
import { FoldedNewsSite } from "../../atom/FoldedNewsSite";
import { FoldedNewsSummary } from "../../atom/FoldedNewsSummary";
import { FoldedNewsTitle } from "../../atom/FoldedNewsTitle";
import { FoldedNewsUrl } from "../../atom/FoldedNewsUrl";
import "./index.css";

interface IFoldedNews {
    news: INews;
}
export const FoldedNews = memo(({ news }: IFoldedNews) => {
    return (
        <div className="folded-news-wrapper">
            <div className="folded-news-img">
                <FoldedNewsImg img={news.imageUrl} />
            </div>
            <FoldedNewsTitle title={news.title} />
            <FoldedNewsSummary summary={news.summary} />
            <div className="folded-news">
                <FoldedNewsSite site={news.newsSite} />
                <FoldedNewsPublished publishedAt={news.publishedAt} />
            </div>
            <FoldedNewsUrl url={news.url} />
        </div>
    )
})


