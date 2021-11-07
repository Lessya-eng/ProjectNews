
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IMainNewsUrl {
    url: string;
}

export const MainNewsUrl = memo(({ url }: IMainNewsUrl) => {
    return (
        <a className="main-news-url" href={url}>{"<Click me>"}</a>
    )
})