import React, { useEffect } from "react";
import { memo } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";
import { HeaderTemplate } from "../template/HeaderTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getNewsState } from "../core/selectors/newsSelector";
import { getArticlesAction, getPaginationAction, setPaginatedArticleAction } from "../core";
import { FoldedArticle } from "../component/molecula/FoldedArticle";
import { BtnPagination } from "../component/atom/BtnPagination";



export const Article = memo(() => {
    const dispatch = useDispatch();
    const { articles, skipSize } = useSelector(getNewsState);


    useEffect(() => {
        dispatch(getArticlesAction());
    }, [dispatch]);

    const nextCharacterPage = () => {
        dispatch(setPaginatedArticleAction(skipSize + 9));
    };
    const prevCharacterPage = () => {
        dispatch(setPaginatedArticleAction(skipSize - 9));
    };
    useEffect(() => {
        dispatch(getPaginationAction(skipSize));
    }, [dispatch, skipSize]);

    function checkPage(currPage: any, direction: string) {
        const prevbtn = document.querySelector(".previous-btn");
        const nextbtn = document.querySelector(".next-btn");
        if (currPage == 9) {
            direction == "prev"
                ? ((prevbtn as HTMLElement).style.display = "none")
                : ((prevbtn as HTMLElement).style.display = "block");
        } else if (currPage + 1 == articles?.length) {
            direction == "next"
                ? ((nextbtn as HTMLElement).style.display = "none")
                : ((nextbtn as HTMLElement).style.display = "block");
        } else {
            (prevbtn as HTMLElement).style.display = "block";
            (nextbtn as HTMLElement).style.display = "block";
        }
    }

    return (
        <div>
            <HeaderTemplate
                headerBlock={
                    <div>
                        <div className="folded-article-for-link">
                            {articles?.map((article) => {
                                return (
                                    <>
                                        <Link key={article.id} to={`articles/${article.id}`}>
                                            <FoldedArticle article={article} />
                                        </Link>

                                    </>
                                )
                            })}

                        </div>
                        <div className="btn-pagination-on-article-page">
                            <BtnPagination onClick={() => {
                                checkPage(skipSize, "prev");
                                prevCharacterPage();
                            }} text={"Previous"}
                                btnClassName={"previous-btn"}
                            />
                            <BtnPagination onClick={() => {
                                checkPage(skipSize, "next");
                                nextCharacterPage();
                            }} text={"Next"} btnClassName={"next-btn"} />
                        </div>
                    </div>
                }
            />
        </div>

    )
})