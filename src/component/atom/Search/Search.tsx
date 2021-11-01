import * as React from "react";
import { memo } from "react";
import "./index.css";

export const Search = memo(() => {
    return (
        <div>
            <input className="search" type="search" placeholder="Search for" />
        </div>
    )
})
