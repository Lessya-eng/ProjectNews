import React, { useEffect } from "react";
import { memo } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsState } from "../core/selectors/newsSelector";
import { getPaginationReportAction, getReportsAction, getSearchReportAction, getSortedReportAction, setPaginatedReportAction } from "../core";
import { BtnPagination } from "../component/atom/BtnPagination";
import { FoldedNews, Navigation } from "../component/molecules";
import logo from "../component/picture/logo.svg";

export const Report = memo(() => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { reports, skipSizeReport } = useSelector(getNewsState);

    useEffect(() => {
        dispatch(getReportsAction());
    }, [dispatch]);


    const nextReportPage = () => {
        dispatch(setPaginatedReportAction(skipSizeReport + 9));
    };
    const prevReportPage = () => {
        dispatch(setPaginatedReportAction(skipSizeReport - 9));
    };
    useEffect(() => {
        dispatch(getPaginationReportAction(skipSizeReport));
    }, [dispatch, skipSizeReport]);

    function checkPage(currPage: any, direction: string) {
        const prevBtn = document.querySelector(".previous-btn");
        const nextBtn = document.querySelector(".next-btn");
        if (currPage == 9) {
            direction == "prev"
                ? ((prevBtn as HTMLElement).style.display = "none")
                : ((prevBtn as HTMLElement).style.display = "block");
        } else if (currPage == reports?.length) {
            direction == "next"
                ? ((nextBtn as HTMLElement).style.display = "none")
                : ((nextBtn as HTMLElement).style.display = "block");
        } else {
            (prevBtn as HTMLElement).style.display = "block";
            (nextBtn as HTMLElement).style.display = "block";
        }
    }

    const sortByField = (e: any) => {
        dispatch(getSortedReportAction(e));
    }

    const searchByTitle = (e: any) => {
        dispatch(getSearchReportAction(e))
    }

    useEffect(() => {
        if (reports?.length == 0)
            history.push("/not-found");
    }, [reports, history]);

    return (
        <div className="app" >
            <div className="app-header">
                <div className="logo-wrapper">
                    <img src={logo} />
                </div>
            </div>
            <Navigation onChangeHandler={searchByTitle} onChange={sortByField} />
            <div className="header-block-for-news">
                <div className="folded-news-for-link">
                    {reports?.map((report) => {
                        return (
                            <Link key={report.id} to={`reports/${report.id}`}>
                                <FoldedNews key={report.id} news={report} />
                            </Link>
                        )
                    })}
                </div>
                <div className="btn-pagination-on-news-page-center">
                    <div className="btn-pagination-on-news-page">
                        <BtnPagination onClick={() => {
                            checkPage(skipSizeReport, "prev");
                            prevReportPage();
                        }} text={"Previous"}
                            btnClassName={"previous-btn"}
                        />
                        <BtnPagination onClick={() => {
                            checkPage(skipSizeReport, "next");
                            nextReportPage();
                        }} text={"Next"} btnClassName={"next-btn"} />
                    </div>
                    <div className="scroll-up">
                        <a href="#"><span className="fas fa-angle-up"></span></a>
                    </div>
                </div>
            </div>
        </div>
    )
})

