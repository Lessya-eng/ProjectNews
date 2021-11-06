import React from "react";
import { memo } from "react";
import "./index.css";

interface IBtnShowMore {
    onClick: () => void;

}

export const BtnShowMore = memo(({ onClick }: IBtnShowMore) => {
    return (
        <button type="submit"
            className="show-more-btn"
            onClick={() => onClick()} >
            <h4>Show More</h4>
        </button>
    )
});