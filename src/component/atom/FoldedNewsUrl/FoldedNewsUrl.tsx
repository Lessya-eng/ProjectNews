
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IFoldedNewsUrl {
    url: string;
}

export const FoldedNewsUrl = memo(({ url }: IFoldedNewsUrl) => {
    return (
        <p className="folded-news-url">{url}</p>
    )
})