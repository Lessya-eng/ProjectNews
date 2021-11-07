
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IMainNewsSite {
    site: string;
}

export const MainNewsSite = memo(({ site }: IMainNewsSite) => {
    return (
        <p className="main-news-site">{site}</p>
    )
})