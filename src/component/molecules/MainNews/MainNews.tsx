import React from "react";
import { memo } from "react";
import { INews } from "../../../type";
import { MainNewsImg } from "../../atom/MainNewsImg";
import { MainNewsPublished } from "../../atom/MainNewsPublished";
import { MainNewsSite } from "../../atom/MainNewsSite";
import { MainNewsSummary } from "../../atom/MainNewsSummary";
import { MainNewsTitle } from "../../atom/MainNewsTitle";
import { MainNewsUrl } from "../../atom/MainNewsUrl";
import "./index.css";

export const MainNews = memo((news: INews) => {
    return (
        <div className="main-news-wrapper">
            <MainNewsTitle title={news.title} />
            <MainNewsImg img={news.imageUrl} />
            <div className="main-news">
                <MainNewsSite site={news.newsSite} />
                <MainNewsPublished publishedAt={news.publishedAt} />
            </div>
            <MainNewsSummary summary={news.summary} />
            <MainNewsUrl url={news.url} />
        </div>
    )
})


