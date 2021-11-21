import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Search } from "../../atom/Search";
import { Link } from "react-router-dom";


export const NavigationWithoutSearch = memo(() => {

    return (
        <div className="nav-wrapper-without-search">
            <input type="checkbox" id="check-menu" />
            <label htmlFor="check-menu"></label>
            <div className="burger-line first"></div>
            <div className="burger-line second"></div>
            <div className="burger-line third"></div>
            <div className="burger-line fourth"></div>
            <nav className="main-menu-without-search">
                <div className="nav-left-part-without-search">
                    <Link className="for-link link-without-search" to={"/"}>Home</Link>
                    <Link className="for-link link-without-search" to={"/articles"}>Articles</Link>
                    <Link className="for-link link-without-search" to={"/blogs"}>Blogs</Link>
                    <Link className="for-link link-without-search" to={"/reports"}>Reports</Link>
                </div>
            </nav>
        </div>
    )
})