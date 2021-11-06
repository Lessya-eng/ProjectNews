
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface INewsArticleSliceSummary {
    summary: string;
}

export const NewsArticleSliceSummary = memo(({ summary }: INewsArticleSliceSummary) => {
    return (
        <span className="news-article-slice-summary">{summary}</span>
    )
})