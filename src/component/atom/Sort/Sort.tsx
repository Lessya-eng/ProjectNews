
import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ISort {
    onChange: (text: string) => void;
}

export const Sort = memo(({ onChange }: ISort) => {
    return (
        <div className="sort-wrapper">
            <select className="sort" onChange={(e) => onChange(e.target.value)} >
                <option>Sort By</option>
                <option value="title">Title</option>
                <option value="newsSite">News Site</option>
                <option value="summary">Summary</option>
                <option value="publishedAt">Published At</option>
            </select>
        </div >
    )
})