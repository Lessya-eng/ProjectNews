import React from "react";
import { memo } from "react";
import "./index.css";

interface IAddBtn {
    onClick: () => void;

}

export const BtnGoBack = memo(({ onClick }: IAddBtn) => {
    return (
        <button type="submit"
            className="go-back-btn"
            onClick={() => onClick()}>
            <p>Go Back</p>
        </button>
    )
});