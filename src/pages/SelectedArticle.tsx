import React, { useEffect } from "react";
import { memo } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getNewsState } from "../core/selectors/newsSelector";
import { getSelectedArticleAction } from "../core";
import { MainNews, NavigationWithoutSearch } from "../component/molecules";
import { HeaderTemplate } from "../template/HeaderTemplate";
import { BtnGoBack } from "../component/atom/BtnGoBack";

export const SelectedArticle = memo(() => {
    const { id } = useParams() as any;
    const { selectedArticle } = useSelector(getNewsState) as any;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSelectedArticleAction(id));
    }, [dispatch, id]);

    const history = useHistory();
    const backToArticle = () => {
        history.push("/articles");
    }

    return (
        <HeaderTemplate
            headerBlock={
                <div>
                    <NavigationWithoutSearch />
                    <div className="folded-news-for-link">
                        <div className="folded-news-for-btn">
                            {selectedArticle && (
                                <MainNews key={selectedArticle.id} {...selectedArticle} />
                            )}
                            <BtnGoBack onClick={backToArticle} />
                        </div>
                    </div>
                </div>
            }
        />
    )
});