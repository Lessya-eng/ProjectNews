import React, { useEffect } from "react";
import { memo } from "react";
import { BrowserRouter as Router, Link, useHistory, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsState } from "../core/selectors/newsSelector";
import { getArticlesAction, getPaginationArticleAction, getSearchArticleAction, getSortedArticleAction, setPaginatedArticleAction } from "../core";
import { BtnPagination } from "../component/atom/BtnPagination";
import { FoldedNews, Navigation } from "../component/molecules";
import logo from "../component/picture/logo.svg";



export const Article = memo(() => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { articles, skipSizeArticle } = useSelector(getNewsState);

    useEffect(() => {
        dispatch(getArticlesAction());
    }, [dispatch]);

    const nextArticlePage = () => {
        dispatch(setPaginatedArticleAction(skipSizeArticle + 9));
    };
    const prevArticlePage = () => {
        dispatch(setPaginatedArticleAction(skipSizeArticle - 9));
    };

    useEffect(() => {
        dispatch(getPaginationArticleAction(skipSizeArticle));
    }, [dispatch, skipSizeArticle]);

    function checkPage(currPage: any, direction: string) {
        const prevBtn = document.querySelector(".previous-btn");
        const nextBtn = document.querySelector(".next-btn");
        if (currPage == 9) {
            direction == "prev"
                ? ((prevBtn as HTMLElement).style.display = "none")
                : ((prevBtn as HTMLElement).style.display = "block");
        } else if (currPage == articles?.length) {
            direction == "next"
                ? ((nextBtn as HTMLElement).style.display = "none")
                : ((nextBtn as HTMLElement).style.display = "block");
        } else {
            (prevBtn as HTMLElement).style.display = "block";
            (nextBtn as HTMLElement).style.display = "block";
        }
    }

    const sortByField = (e: any) => {
        dispatch(getSortedArticleAction(e));
    }

    const searchByTitle = (e: any) => {
        dispatch(getSearchArticleAction(e))
    }

    useEffect(() => {
        if (articles?.length == 0)
            history.push("/not-found");
    }, [articles, history]);

    return (
        <div className="app">
            <div className="app-header">
                <div className="logo-wrapper">
                    <img src={logo} />
                </div>
            </div>
            <Navigation onChangeHandler={searchByTitle} onChange={sortByField} />
            <div className="header-block-for-news">
                <div className="folded-news-for-link">
                    {articles?.map((article) => {
                        return (
                            <Link key={article.id} to={`articles/${article.id}`}>
                                <FoldedNews news={article} />
                            </Link>
                        )
                    })}

                </div>
                <div className="btn-pagination-on-news-page-center">
                    <div className="btn-pagination-on-news-page">
                        <BtnPagination onClick={() => {
                            checkPage(skipSizeArticle, "prev");
                            prevArticlePage();
                        }} text={"Previous"}
                            btnClassName={"previous-btn"}
                        />
                        <BtnPagination onClick={() => {
                            checkPage(skipSizeArticle, "next");
                            nextArticlePage();
                        }} text={"Next"} btnClassName={"next-btn"} />
                    </div>
                    <div className="scroll-up">
                        <a href="#"><span className="fas fa-angle-up"></span></a>
                    </div>
                </div>
            </div>
        </div>
    )
})