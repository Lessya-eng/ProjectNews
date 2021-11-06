import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ISearch {
    onChangeHandler: (text: string) => void;
}

export const Search = memo(({ onChangeHandler }: ISearch) => {
    return (
        <div>
            <input className="search" type="search" placeholder="Search for" onChange={(e) => onChangeHandler(e.target.value)} />
        </div>
    )
})
