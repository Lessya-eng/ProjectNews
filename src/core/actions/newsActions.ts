import { createAction } from "typesafe-actions";
import { INews } from "../../type";
import { ACTIONS } from "./constants";

export const setArticlesAction = createAction(
    ACTIONS.SET_ARTICLES_ACTION
)<INews[] | null>();

export const setBlogsAction = createAction(
    ACTIONS.SET_BLOGS_ACTION
)<INews[] | null>();

export const setReportsAction = createAction(
    ACTIONS.SET_REPORTS_ACTION
)<INews[] | null>();

export const getArticlesAction = createAction(
    ACTIONS.GET_ARTICLES_ACTION
)();

export const getBlogsAction = createAction(
    ACTIONS.GET_BLOGS_ACTION
)();

export const getReportsAction = createAction(
    ACTIONS.GET_REPORTS_ACTION
)();

export const setSelectedArticleAction = createAction(
    ACTIONS.SET_SELECTED_ARTICLES_ACTION
)<INews[] | null>();

export const setSelectedBlogAction = createAction(
    ACTIONS.SET_SELECTED_BLOGS_ACTION
)<INews[] | null>();

export const setSelectedReportAction = createAction(
    ACTIONS.SET_SELECTED_REPORTS_ACTION
)<INews[] | null>();

export const setNewsErrorAction = createAction(
    ACTIONS.SET_NEWS_ERROR_ACTION
)<string | null>();

export const getSelectedArticleAction = createAction(
    ACTIONS.GET_SELECTED_ARTICLES_ACTION
)<number>();

export const getSelectedBlogAction = createAction(
    ACTIONS.GET_SELECTED_BLOGS_ACTION
)<number>();

export const getSelectedReportAction = createAction(
    ACTIONS.GET_SELECTED_REPORTS_ACTION
)<number>();

export const getPaginationArticleAction = createAction(
    ACTIONS.GET_PAGINATED_ARTICLE_ACTION
)<number>();

export const getPaginationBlogAction = createAction(
    ACTIONS.GET_PAGINATED_BLOG_ACTION
)<number>();

export const getPaginationReportAction = createAction(
    ACTIONS.GET_PAGINATED_REPORT_ACTION
)<number>();

export const setPaginatedArticleAction = createAction(
    ACTIONS.SET_PAGINATION_ARTICLE_ACTION
)<number>();

export const setPaginatedBlogAction = createAction(
    ACTIONS.SET_PAGINATION_BLOG_ACTION
)<number>();

export const setPaginatedReportAction = createAction(
    ACTIONS.SET_PAGINATION_REPORT_ACTION
)<number>();

export const getSortedArticleAction = createAction(
    ACTIONS.GET_SORTED_ARTICLE_ACTION
)<string>();

export const getSortedBlogAction = createAction(
    ACTIONS.GET_SORTED_BLOG_ACTION
)<string>();

export const getSortedReportAction = createAction(
    ACTIONS.GET_SORTED_REPORT_ACTION
)<string>();

export const getSearchArticleAction = createAction(
    ACTIONS.GET_SEARCH_ARTICLE_ACTION
)<string>();

export const getSearchBlogAction = createAction(
    ACTIONS.GET_SEARCH_BLOG_ACTION
)<string>();

export const getSearchReportAction = createAction(
    ACTIONS.GET_SEARCH_REPORT_ACTION
)<string>();