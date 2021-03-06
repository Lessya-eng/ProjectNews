import React from "react";
import { memo } from "react";
import "./index.css";

interface IPaginationBtn {
    onClick?: () => void;
    text: string;
    btnClassName: string;
}

export const BtnPagination = memo(({ onClick, text, btnClassName }: IPaginationBtn) => {
    return (
        <button type="submit"
            className={`btn-pagination ${btnClassName}`}
            onClick={onClick}
        >
            <p>{text}</p>
        </button>
    )
});