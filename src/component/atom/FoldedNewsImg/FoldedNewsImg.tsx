import * as React from "react";
import { memo } from "react";
import "./index.css";

export interface IFoldedNewsImg {
    img: string;
}

export const FoldedNewsImg = memo(({ img }: IFoldedNewsImg) => {
    return (
        <img className="folded-news-img" src={img} alt="Sorry, picture not found" width={400} height={170} />
    )
})