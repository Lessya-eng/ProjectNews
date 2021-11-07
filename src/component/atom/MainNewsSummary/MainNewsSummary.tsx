
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IMainNewsSummary {
    summary: string;

}

export const MainNewsSummary = memo(({ summary }: IMainNewsSummary) => {
    return (
        <p className="main-news-summary">{summary}</p>
    )
})