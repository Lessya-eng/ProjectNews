import { IReport, IBlog, IArticle } from '../../type/index';
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
}
    from "../actions";

export interface INewsState {
    articles: IArticle[] | null;
    reports: IReport[] | null;
    blogs: IBlog[] | null;
    selectedArticle: IArticle[] | null;
    selectedReport: IReport[] | null;
    selectedBlog: IBlog[] | null;
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
    }));