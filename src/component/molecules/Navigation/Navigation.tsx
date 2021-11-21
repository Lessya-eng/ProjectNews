import React, { useEffect, useState } from "react";
import { memo } from "react";
import "./index.css";
import { Search } from "../../atom/Search";
import { Sort } from "../../atom/Sort";
import { Link } from "react-router-dom";

interface INavigation {
    onChangeHandler: (text: string) => void;
    onChange: (text: string) => void;
}

export const Navigation = memo(({ onChangeHandler, onChange }: INavigation) => {

    return (
        <div className="nav-wrapper">
            <input type="checkbox" id="check-menu" />
            <label htmlFor="check-menu"></label>
            <div className="burger-line first"></div>
            <div className="burger-line second"></div>
            <div className="burger-line third"></div>
            <div className="burger-line fourth"></div>
            <nav className="main-menu">
                <div className="nav-left-part">
                    <Link className="for-link link" to={"/"}>Home</Link>
                    <Link className="for-link link" to={"/articles"}>Articles</Link>
                    <Link className="for-link link" to={"/blogs"}>Blogs</Link>
                    <Link className="for-link link" to={"/reports"}>Reports</Link>
                </div>
                <div className="for-link link nav-right-part">
                    <Sort onChange={onChange} />
                    <Search onChangeHandler={onChangeHandler} />
                </div>
            </nav>
        </div>
    )
})