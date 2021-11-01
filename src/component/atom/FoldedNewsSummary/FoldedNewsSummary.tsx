
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IFoldedNewsSummary {
    summary: string;
}

export const FoldedNewsSummary = memo(({ summary }: IFoldedNewsSummary) => {
    return (
        <p className="folded-news-summary">{summary}</p>
    )
})