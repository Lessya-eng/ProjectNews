import { memo } from "react";
import { IBlog } from "../../../type";
import { FoldedNewsImg } from "../../atom/FoldedNewsImg";
import { FoldedNewsPublished } from "../../atom/FoldedNewsPublished";
import { FoldedNewsSite } from "../../atom/FoldedNewsSite";
import { FoldedNewsSummary } from "../../atom/FoldedNewsSummary";
import { FoldedNewsTitle } from "../../atom/FoldedNewsTitle";
import { FoldedNewsUrl } from "../../atom/FoldedNewsUrl";
import "./index.css";
import React, { useEffect } from "react";

interface IFoldedBlogs {
    blog: IBlog;
}
export const FoldedBlogs = memo(({ blog }: IFoldedBlogs) => {
    return (
        <div className="folded-blog-wrapper">
            <FoldedNewsImg img={blog.imageUrl} />
            <FoldedNewsTitle title={blog.title} />
            <FoldedNewsSummary summary={blog.summary} />
            <div className="folded-blog">
                <FoldedNewsSite site={blog.newsSite} />
                <FoldedNewsPublished publishedAt={blog.publishedAt} />
            </div>
            <FoldedNewsUrl url={blog.url} />
        </div>
    )
})


