import React from "react";
import { memo } from "react";
import { Navigation } from "../component/molecula/Navigation";
import logo from "../component/picture/logo.svg";

interface IMainTemplate {
    headerBlock: React.ReactNode;
}

export const HeaderTemplate = memo(({ headerBlock }: IMainTemplate) => {
    return (
        <div className="app" >
            <div className="app-header">
                <div className="logo-wrapper">
                    <img src={logo} />
                </div>

            </div>
            <Navigation />
            <div className="header-block-for-news">
                {headerBlock}
            </div>
        </div>
    )
})