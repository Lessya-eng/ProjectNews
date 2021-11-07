
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface INewsArticleSliceTitle {
    title: string;
}

export const NewsArticleSliceTitle = memo(({ title }: INewsArticleSliceTitle) => {
    return (
        <h2 className="news-article-slice-title">{title}</h2>
    )
})