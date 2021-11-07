
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface INewsArticleSliceImg {
    img: string;
}

export const NewsArticleSliceImg = memo(({ img }: INewsArticleSliceImg) => {
    return (
        <img className="news-article-slice-img" src={img} alt="Sorry, picture not found" width={400} height={170} />
    )
})