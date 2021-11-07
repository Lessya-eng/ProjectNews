import React, { useEffect } from "react";
import { memo } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getNewsState } from "../core/selectors/newsSelector";
import { getSelectedBlogAction } from "../core";
import { MainNews, NavigationWithoutSearch } from "../component/molecules";
import { HeaderTemplate } from "../template/HeaderTemplate";
import { BtnGoBack } from "../component/atom/BtnGoBack";

export const SelectedBlog = memo(() => {
    const { id } = useParams() as any;
    const { selectedBlog } = useSelector(getNewsState) as any;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSelectedBlogAction(id));
    }, [dispatch, id]);

    const history = useHistory();
    const backToBlog = () => {
        history.push("/blogs");
    }

    return (
        <HeaderTemplate
            headerBlock={
                <div>
                    <NavigationWithoutSearch />
                    <div className="folded-news-for-link">
                        <div className="folded-news-for-btn">
                            {selectedBlog && (
                                <MainNews key={selectedBlog.id} {...selectedBlog} />
                            )}
                            <BtnGoBack onClick={backToBlog} />
                        </div>
                    </div>
                </div>
            }
        />
    )
});