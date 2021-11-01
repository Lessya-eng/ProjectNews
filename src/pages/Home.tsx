import React, { useEffect } from "react";
import { memo } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";
import { BigPostHome } from "../component/atom/BigPostHome";
import { PostHome } from "../component/atom/PostHome";
import { HeaderTemplate } from "../template/HeaderTemplate";

export const Home = memo(() => {
    return (
        <div>
            <HeaderTemplate
                headerBlock={
                    <main className="main-post-home">
                        <div className="main-block-wrapper">
                            <h1>Написать что-нибудь</h1>
                        </div>
                    </main>
                }
            />
        </div>
    )
})