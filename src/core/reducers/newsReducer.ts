import { INews } from '../../type/index';
import { ActionType, createReducer } from "typesafe-actions";
import {
    setArticlesAction,
    setReportsAction,
    setBlogsAction,
    setSelectedArticleAction,
    setSelectedReportAction,
    setSelectedBlogAction,
    setNewsErrorAction,
    setPaginatedArticleAction,
    setPaginatedBlogAction,
    setPaginatedReportAction,
}
    from "../actions";

export interface INewsState {
    articles: INews[] | null;
    reports: INews[] | null;
    blogs: INews[] | null;
    selectedArticle: INews[] | null;
    selectedReport: INews[] | null;
    selectedBlog: INews[] | null;
    newsError: string | null;
    skipSize: number;
}

const defaultState: INewsState = {
    articles: null,
    reports: null,
    blogs: null,
    selectedArticle: null,
    selectedReport: null,
    selectedBlog: null,
    newsError: null,
    skipSize: 0,
}
const actions = {
    setArticlesAction,
    setReportsAction,
    setBlogsAction,
    setSelectedArticleAction,
    setSelectedReportAction,
    setSelectedBlogAction,
    setNewsErrorAction,
    setPaginatedArticleAction,
    setPaginatedBlogAction,
    setPaginatedReportAction,
};

export const newsReducer = createReducer<INewsState, ActionType<typeof actions>>(
    defaultState
).handleAction(setArticlesAction, (state, { payload: articles }) => ({
    ...state,
    articles,
}))
    .handleAction(setReportsAction, (state, { payload: reports }) => ({
        ...state,
        reports,
    }))
    .handleAction(setBlogsAction, (state, { payload: blogs }) => ({
        ...state,
        blogs,
    }))
    .handleAction(setSelectedArticleAction, (state, { payload: selectedArticle }) => ({
        ...state,
        selectedArticle,
    }))
    .handleAction(setSelectedReportAction, (state, { payload: selectedReport }) => ({
        ...state,
        selectedReport,
    }))
    .handleAction(setSelectedBlogAction, (state, { payload: selectedBlog }) => ({
        ...state,
        selectedBlog,
    }))
    .handleAction(setNewsErrorAction, (state, { payload: newsError }) => ({
        ...state,
        newsError,
    }))
    .handleAction(setPaginatedArticleAction, (state, { payload: skipSize }) => ({
        ...state,
        skipSize,
    }))
    .handleAction(setPaginatedBlogAction, (state, { payload: skipSize }) => ({
        ...state,
        skipSize,
    }))
    .handleAction(setPaginatedReportAction, (state, { payload: skipSize }) => ({
        ...state,
        skipSize,
    }));

