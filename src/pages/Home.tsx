import React, { useEffect } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { BtnShowMore } from "../component/atom/BtnShowMore";
import { NewsArticleSlice, NavigationWithoutSearch } from "../component/molecules";
import logo from "../component/picture/logo.svg";
import { getArticlesAction } from "../core";
import { getNewsState } from "../core/selectors/newsSelector";

export const Home = memo(() => {
    const { articles } = useSelector(getNewsState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticlesAction());
    }, [dispatch]);

    const history = useHistory();
    const showMore = () => {
        history.push("/articles");
    }

    return (
        <div className="app" >
            <div className="app-header">
                <div className="logo-wrapper">
                    <img src={logo} />
                </div>
            </div>
            <NavigationWithoutSearch />
            <div className="header-block-for-news">
                <main className="main-post-home">
                    <div className="home-block-wrapper">
                        <h1>Welcome to the news site</h1>
                        <p>On the NewsCast, you can familiarize yourself with the three sections presented in the navigation (articles, blogs and reports). The site provides sorting by field (title, news site, published at, summary) and search.</p>
                        <div className="news-article-splice">
                            {articles?.map((article) => (
                                <Link key={article.id} to={`articles/${article.id}`}>
                                    <NewsArticleSlice news={article} />
                                </Link>
                            ))
                                .slice(0, 3)}
                        </div>
                    </div>
                    <div className="btn-show-more">
                        <BtnShowMore onClick={showMore} />
                    </div>
                </main>
            </div >
        </div >
    )
})