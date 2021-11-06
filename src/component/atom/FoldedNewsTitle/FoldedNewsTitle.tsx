
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IFoldedNewsTitle {
    title: string;
}

export const FoldedNewsTitle = memo(({ title }: IFoldedNewsTitle) => {
    return (
        <h2 className="folded-news-title">{title}</h2>
    )
})