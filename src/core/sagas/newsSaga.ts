import { ACTIONS } from './../actions/constants';
import { call, takeEvery, put } from '@redux-saga/core/effects';
import { Action } from "redux-actions";
import { setArticlesAction, setBlogsAction, setNewsErrorAction, setReportsAction, setSelectedArticleAction, setSelectedBlogAction, setSelectedReportAction } from '../actions';
import { ArticlesService, ReportsService, BlogsService } from '../../services';

function* getArticlesSaga() {
    try {
        const data: { data: any } = yield call(() =>
            ArticlesService.getArticles()
        );
        yield put(setArticlesAction(data.data))
    } catch (e) {
        yield put(
            setNewsErrorAction(
                "Sorry! Articles not found."
            )
        );
    }
}
function* getSelectedArticleSaga({ payload: id }: Action<number>) {
    console.log(id)
    try {
        const data: { data: any } = yield call(() =>
            ArticlesService.getSelectedArticle(id)
        );
        console.log(data);
        yield put(setSelectedArticleAction(data.data));
    } catch (e: any) {
        yield put(
            setNewsErrorAction(
                "Sorry! Selected article not found."
            )
        );
    }
}


function* getBlogSaga() {
    try {
        const data: { data: any } = yield call(() =>
            BlogsService.getBlogs()
        );
        yield put(setBlogsAction(data.data))
    } catch (e) {
        yield put(
            setNewsErrorAction(
                "Sorry! Blogs not found."
            )
        );
    }
}
function* getSelectedBlogSaga({ payload: id }: Action<number>) {
    try {
        const data: { data: any } = yield call(() =>
            BlogsService.getSelectedBlog(id)
        );
        yield put(setSelectedBlogAction(data.data));
    } catch (e: any) {
        yield put(
            setNewsErrorAction(
                "Sorry! Selected blog not found."
            )
        );
    }
}


function* getReportSaga() {
    try {
        const data: { data: any } = yield call(() =>
            ReportsService.getReports()
        );
        yield put(setReportsAction(data.data))
    } catch (e) {
        yield put(
            setNewsErrorAction(
                "Sorry! Reports not found."
            )
        );
    }
}
function* getSelectedReportSaga({ payload: id }: Action<number>) {
    try {
        const data: { data: any } = yield call(() =>
            ReportsService.getSelectedReport(id)
        );
        yield put(setSelectedReportAction(data.data));
    } catch (e: any) {
        yield put(
            setNewsErrorAction(
                "Sorry! Selected report not found."
            )
        );
    }
}

function* getPaginationArticleSaga({ payload: skipSize }: Action<number>) {
    try {
        const data: { data: any } = yield call(() =>
            ArticlesService.getPaginationArticle(skipSize)
        );
        yield put(setArticlesAction(data.data));
    } catch (e: any) {

    }
}

function* getPaginationBlogSaga({ payload: skipSize }: Action<number>) {
    try {
        const data: { data: any } = yield call(() =>
            BlogsService.getPaginationBlog(skipSize)
        );
        yield put(setBlogsAction(data.data));
    } catch (e: any) {

    }
}

function* getPaginationReportSaga({ payload: skipSize }: Action<number>) {
    try {
        const data: { data: any } = yield call(() =>
            ReportsService.getPaginationReport(skipSize)
        );
        yield put(setReportsAction(data.data));
    } catch (e: any) {

    }
}

function* getSortedArticleSaga({ payload: value }: Action<string>) {
    try {
        const data: { data: any } = yield call(() =>
            ArticlesService.getSortedArticle(value)
        );
        yield put(setArticlesAction(data.data));
    } catch (e: any) {
    }
}

function* getSortedBlogSaga({ payload: value }: Action<string>) {
    console.log(value);
    try {
        const data: { data: any } = yield call(() =>
            BlogsService.getSortedBlog(value)
        );
        yield put(setBlogsAction(data.data));
    } catch (e: any) {
    }
}

function* getSortedReportSaga({ payload: value }: Action<string>) {
    console.log(value);
    try {
        const data: { data: any } = yield call(() =>
            ReportsService.getSortedReport(value)
        );
        yield put(setReportsAction(data.data));
    } catch (e: any) {
    }
}

function* getSearchArticleSaga({ payload: search }: Action<string>) {
    console.log(search);
    try {
        const data: { data: any } = yield call(() =>
            ArticlesService.getSearchArticle(search)
        );
        yield put(setArticlesAction(data.data));
    } catch (e: any) {
    }
}

function* getSearchBlogSaga({ payload: search }: Action<string>) {
    console.log(search);
    try {
        const data: { data: any } = yield call(() =>
            BlogsService.getSearchBlog(search)
        );
        yield put(setBlogsAction(data.data));
    } catch (e: any) {
    }
}

function* getSearchReportSaga({ payload: search }: Action<string>) {
    console.log(search);
    try {
        const data: { data: any } = yield call(() =>
            ReportsService.getSearchReport(search)
        );
        yield put(setReportsAction(data.data));
    } catch (e: any) {
    }
}

export function* newsSaga() {
    yield takeEvery(ACTIONS.GET_ARTICLES_ACTION, getArticlesSaga);
    yield takeEvery(ACTIONS.GET_BLOGS_ACTION, getBlogSaga);
    yield takeEvery(ACTIONS.GET_REPORTS_ACTION, getReportSaga);

    yield takeEvery(ACTIONS.GET_SELECTED_ARTICLES_ACTION, getSelectedArticleSaga);
    yield takeEvery(ACTIONS.GET_SELECTED_BLOGS_ACTION, getSelectedBlogSaga);
    yield takeEvery(ACTIONS.GET_SELECTED_REPORTS_ACTION, getSelectedReportSaga);

    yield takeEvery(ACTIONS.GET_PAGINATED_ARTICLE_ACTION, getPaginationArticleSaga);
    yield takeEvery(ACTIONS.GET_PAGINATED_BLOG_ACTION, getPaginationBlogSaga);
    yield takeEvery(ACTIONS.GET_PAGINATED_REPORT_ACTION, getPaginationReportSaga);

    yield takeEvery(ACTIONS.GET_SORTED_ARTICLE_ACTION, getSortedArticleSaga);
    yield takeEvery(ACTIONS.GET_SORTED_BLOG_ACTION, getSortedBlogSaga);
    yield takeEvery(ACTIONS.GET_SORTED_REPORT_ACTION, getSortedReportSaga);

    yield takeEvery(ACTIONS.GET_SEARCH_ARTICLE_ACTION, getSearchArticleSaga);
    yield takeEvery(ACTIONS.GET_SEARCH_BLOG_ACTION, getSearchBlogSaga);
    yield takeEvery(ACTIONS.GET_SEARCH_REPORT_ACTION, getSearchReportSaga);
}

