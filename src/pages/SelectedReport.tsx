import React, { useEffect } from "react";
import { memo } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getNewsState } from "../core/selectors/newsSelector";
import { getSelectedReportAction } from "../core";
import { MainNews, NavigationWithoutSearch } from "../component/molecules";
import { HeaderTemplate } from "../template/HeaderTemplate";
import { BtnGoBack } from "../component/atom/BtnGoBack";

export const SelectedReport = memo(() => {
    const { id } = useParams() as any;
    const { selectedReport } = useSelector(getNewsState) as any;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSelectedReportAction(id));
    }, [dispatch, id]);

    const history = useHistory();
    const backToReport = () => {
        history.push("/reports");
    }

    return (
        <HeaderTemplate
            headerBlock={
                <div>
                    <NavigationWithoutSearch />
                    <div className="folded-news-for-link">
                        <div className="folded-news-for-btn">
                            {selectedReport && (
                                <MainNews key={selectedReport.id} {...selectedReport} />
                            )}
                            <BtnGoBack onClick={backToReport} />
                        </div>
                    </div>
                </div>
            }
        />
    )
});