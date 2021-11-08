import React, { useEffect } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { BtnGoBack } from "../component/atom/BtnGoBack";
import { Navigation } from "../component/molecules";
import logo from "../component/picture/logo.svg";
import { getSearchArticleAction, getSortedArticleAction } from "../core";

export const NotFound = memo(() => {
    const history = useHistory();
    function goBack() {
        console.log("hello");
        window.history.go(-2);
    }
    const sortByField = (e: any) => {
    }

    const searchByTitle = (e: any) => {
    }
    return (
        <div className="app" >
            <div className="app-header">
                <div className="logo-wrapper">
                    <img src={logo} />
                </div>
            </div>
            <Navigation onChangeHandler={searchByTitle} onChange={sortByField} />
            <div className="header-block-for-news">
                <main className="main-post-home">
                    <div className="main-block-wrapper">
                        <p>
                            <span>
                                Not Found
                            </span>
                        </p>
                    </div>
                </main>
                <p className="not-found-text"> Sorry, your request failed, please try again</p>
            </div>
            <BtnGoBack onClick={goBack} />
        </div>
    )
})