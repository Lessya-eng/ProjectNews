import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Search } from "../../atom/Search";



export const NavigationWithoutSearch = memo(() => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="nav-left">
                    <div className="nav-link"><a href="/">Home</a></div>
                    <div className="nav-link"><a href="/articles">Articles</a></div>
                    <div className="nav-link"><a href="/blogs">Blogs</a></div>
                    <div className="nav-link"><a href="/reports">Reports</a></div>
                </div>
                {/*                 <div className="nav-right">
                    <Search onChangeHandler={onChangeHandler} />
                </div> */}
            </div>
        </nav>
    )
})