
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IMainNewsImg {
    img: string;
}

export const MainNewsImg = memo(({ img }: IMainNewsImg) => {
    return (
        <img className="main-news-img" src={img} alt="News" width={100} height={100} />
    )
})