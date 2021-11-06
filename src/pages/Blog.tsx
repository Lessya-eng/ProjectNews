import React, { useEffect } from "react";
import { memo } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsState } from "../core/selectors/newsSelector";
import { getBlogsAction, getPaginationBlogAction, getSearchBlogAction, getSortedBlogAction, setPaginatedBlogAction, } from "../core";
import { BtnPagination } from "../component/atom/BtnPagination";
import { FoldedNews, Navigation } from "../component/molecules";
import logo from "../component/picture/logo.svg";


export const Blog = memo(() => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { blogs, skipSize } = useSelector(getNewsState);

    useEffect(() => {
        dispatch(getBlogsAction());
    }, [dispatch]);

    const nextBlogPage = () => {
        dispatch(setPaginatedBlogAction(skipSize + 9));
    };
    const prevBlogPage = () => {
        dispatch(setPaginatedBlogAction(skipSize - 9));
    };
    useEffect(() => {
        dispatch(getPaginationBlogAction(skipSize));
    }, [dispatch, skipSize]);

    function checkPage(currPage: any, direction: string) {
        const prevBtn = document.querySelector(".previous-btn");
        const nextBtn = document.querySelector(".next-btn");
        if (currPage == 9) {
            direction == "prev"
                ? ((prevBtn as HTMLElement).style.display = "none")
                : ((prevBtn as HTMLElement).style.display = "block");
        } else if (currPage == blogs?.length) {
            direction == "next"
                ? ((nextBtn as HTMLElement).style.display = "none")
                : ((nextBtn as HTMLElement).style.display = "block");
        } else {
            (prevBtn as HTMLElement).style.display = "block";
            (nextBtn as HTMLElement).style.display = "block";
        }
    }

    const sortByFieldBlog = (e: any) => {
        dispatch(getSortedBlogAction(e));
    }


    const searchByTitle = (e: any) => {
        dispatch(getSearchBlogAction(e))
    }

    useEffect(() => {
        if (blogs?.length == 0)
            history.push("/not-found");
    }, [blogs, history]);
    return (
        <div className="app" >
            <div className="app-header">
                <div className="logo-wrapper">
                    <img src={logo} />
                </div>
            </div>
            <Navigation onChangeHandler={searchByTitle} onChange={sortByFieldBlog} />

            <div className="header-block-for-news">
                <div className="folded-news-for-link">
                    {blogs?.map((blog) => {
                        return (
                            <Link key={blog.id} to={`blogs/${blog.id}`}>
                                <FoldedNews key={blog.id} news={blog} />
                            </Link>
                        )
                    })}
                </div>
                <div className="btn-pagination-on-news-page-center">
                    <div className="btn-pagination-on-news-page">
                        <BtnPagination onClick={() => {
                            checkPage(skipSize, "prev");
                            prevBlogPage();
                        }} text={"Previous"}
                            btnClassName={"previous-btn"}
                        />
                        <BtnPagination onClick={() => {
                            checkPage(skipSize, "next");
                            nextBlogPage();
                        }} text={"Next"} btnClassName={"next-btn"} />
                    </div>
                </div>
            </div>
        </div>
    )
})