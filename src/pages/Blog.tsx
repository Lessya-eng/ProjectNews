import React, { useEffect } from "react";
import { memo } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";
import { FoldedBlogs } from "../component/molecula/FoldedBlogs";
import { HeaderTemplate } from "../template/HeaderTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getNewsState } from "../core/selectors/newsSelector";
import { getBlogsAction } from "../core";


export const Blog = memo(() => {
    const dispatch = useDispatch();
    const { blogs } = useSelector(getNewsState);

    useEffect(() => {
        dispatch(getBlogsAction());
    }, [dispatch]);

    return (
        <div>
            <HeaderTemplate
                headerBlock={
                    <div className="folded-article-for-link">
                        {blogs?.map((blog) => {
                            return (
                                <Link key={blog.id} to={`blogs/${blog.id}`}>
                                    <FoldedBlogs key={blog.id} blog={blog} />
                                </Link>
                            )
                        })}
                    </div>
                }
            />
        </div>
    )
})