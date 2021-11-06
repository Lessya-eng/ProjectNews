import { createAction } from "typesafe-actions";
import { IArticle, IBlog, IReport } from "../../type";
import { ACTIONS } from "./constants";

export const setArticlesAction = createAction(
    ACTIONS.SET_ARTICLES_ACTION
)<IArticle[] | null>();

export const setReportsAction = createAction(
    ACTIONS.SET_REPORTS_ACTION
)<IReport[] | null>();

export const setBlogsAction = createAction(
    ACTIONS.SET_BLOGS_ACTION
)<IBlog[] | null>();

export const getArticlesAction = createAction(
    ACTIONS.GET_ARTICLES_ACTION
)();

export const getReportsAction = createAction(
    ACTIONS.GET_REPORTS_ACTION
)();

export const getBlogsAction = createAction(
    ACTIONS.GET_BLOGS_ACTION
)();

export const setSelectedArticleAction = createAction(
    ACTIONS.SET_SELECTED_ARTICLES_ACTION
)<IArticle[] | null>();

export const setSelectedReportAction = createAction(
    ACTIONS.SET_SELECTED_REPORTS_ACTION
)<IReport[] | null>();

export const setSelectedBlogAction = createAction(
    ACTIONS.SET_SELECTED_BLOGS_ACTION
)<IBlog[] | null>();

export const setNewsErrorAction = createAction(
    ACTIONS.SET_NEWS_ERROR_ACTION
)<string | null>();

export const getSelectedArticleAction = createAction(
    ACTIONS.GET_SELECTED_ARTICLES_ACTION
)<number>();

export const getSelectedReportAction = createAction(
    ACTIONS.GET_SELECTED_REPORTS_ACTION
)<number>();

export const getSelectedBlogAction = createAction(
    ACTIONS.GET_SELECTED_BLOGS_ACTION
)<number>();

export const getPaginationAction = createAction(
    ACTIONS.GET_PAGINATED_ARTICLE_ACTION
)<number>();

export const setPaginatedArticleAction = createAction(
    ACTIONS.SET_PAGINATION_ARTICLE_ACTION
)<number>();
