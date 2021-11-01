
import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IFoldedNewsImg {
    img: string;
}

export const FoldedNewsImg = memo(({ img }: IFoldedNewsImg) => {
    return (
        <img className="folded-news-img" src={img} alt="News" width={100} height={100} />
    )
})