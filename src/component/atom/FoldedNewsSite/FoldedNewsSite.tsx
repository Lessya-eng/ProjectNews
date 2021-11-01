
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IFoldedNewsSite {
    site: string;
}

export const FoldedNewsSite = memo(({ site }: IFoldedNewsSite) => {
    return (
        <p className="folded-news-site">{site}</p>
    )
})