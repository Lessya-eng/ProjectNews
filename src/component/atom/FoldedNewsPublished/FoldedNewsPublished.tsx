import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IFoldedNewsPublished {
    publishedAt: string;
}

export const FoldedNewsPublished = memo(({ publishedAt }: IFoldedNewsPublished) => {
    return (
        <div className="folded-news-published">
            <p>{publishedAt}</p>
        </div>
    )
})