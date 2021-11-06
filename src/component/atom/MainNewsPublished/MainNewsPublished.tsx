
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IMainNewsPublished {
    publishedAt: string;
}

export const MainNewsPublished = memo(({ publishedAt }: IMainNewsPublished) => {
    return (
        <div className="main-news-published">
            <p>{publishedAt}</p>
        </div>
    )
})