import React, { useEffect } from "react";
import { memo } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";
import { HeaderTemplate } from "../template/HeaderTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getNewsState } from "../core/selectors/newsSelector";
import { getReportsAction } from "../core";
import { FoldedReports } from "../component/molecula/FoldedReports";

export const Report = memo(() => {
    const dispatch = useDispatch();
    const { reports } = useSelector(getNewsState);

    useEffect(() => {
        dispatch(getReportsAction());
    }, [dispatch]);

    return (
        <div>
            <HeaderTemplate
                headerBlock={
                    <div className="folded-article-for-link">
                        {reports?.map((report) => {
                            return (
                                <Link key={report.id} to={`reports/${report.id}`}>
                                    <FoldedReports key={report.id} report={report} />
                                </Link>
                            )
                        })}
                    </div>
                }
            />
        </div>
    )
})