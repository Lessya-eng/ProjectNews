import { memo } from "react";
import { IReport } from "../../../type";
import { FoldedNewsImg } from "../../atom/FoldedNewsImg";
import { FoldedNewsPublished } from "../../atom/FoldedNewsPublished";
import { FoldedNewsSite } from "../../atom/FoldedNewsSite";
import { FoldedNewsSummary } from "../../atom/FoldedNewsSummary";
import { FoldedNewsTitle } from "../../atom/FoldedNewsTitle";
import { FoldedNewsUrl } from "../../atom/FoldedNewsUrl";
import "./index.css";
import React, { useEffect } from "react";

interface IFoldedReports {
    report: IReport;
}
export const FoldedReports = memo(({ report }: IFoldedReports) => {
    return (
        <div className="folded-report-wrapper">
            <FoldedNewsImg img={report.imageUrl} />
            <FoldedNewsTitle title={report.title} />
            <FoldedNewsSummary summary={report.summary} />
            <div className="folded-report">
                <FoldedNewsSite site={report.newsSite} />
                <FoldedNewsPublished publishedAt={report.publishedAt} />
            </div>
            <FoldedNewsUrl url={report.url} />
        </div>
    )
})


