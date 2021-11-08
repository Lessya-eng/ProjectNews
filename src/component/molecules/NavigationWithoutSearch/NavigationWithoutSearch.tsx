import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Search } from "../../atom/Search";



export const NavigationWithoutSearch = memo(() => {
    function openMobile() {
        const navMenu = document.querySelector(".app-nav");
        const mobileBtn = document.querySelector(".mobile-menu-btn");
        const navList = document.querySelector(".nav-wrapper");
        navMenu?.classList.toggle("mobile-active");
        mobileBtn?.classList.toggle("mobile-active");
        navList?.classList.toggle("mobile-active");
    }
    return (
        <nav className="app-nav">
            <div className="nav-wrap" id="nav">
                <div className="nav-left">
                    <div className="nav-link"><a href="/">Home</a></div>
                    <div className="nav-link"><a href="/articles">Articles</a></div>
                    <div className="nav-link"><a href="/blogs">Blogs</a></div>
                    <div className="nav-link"><a href="/reports">Reports</a></div>
                </div>
            </div>
            <button className="mobile-menu-btn" onClick={openMobile}>
                <span></span>
            </button>
        </nav>
    )
})