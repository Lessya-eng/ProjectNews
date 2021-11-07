
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IMainNewsTitle {
    title: string;
}

export const MainNewsTitle = memo(({ title }: IMainNewsTitle) => {
    return (
        <h2 className="main-news-title">{title}</h2>
    )
})