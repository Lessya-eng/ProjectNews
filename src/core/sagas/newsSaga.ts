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
        /* console.log(data); */

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
        console.log({ data });

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
        console.log({ data });

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

function* getPaginationSaga({ payload: skipSize }: Action<number>) {
    console.log(skipSize);

    try {
        const data: { data: any } = yield call(() =>
            ArticlesService.getPaginationArticle(skipSize)
        );
        yield put(setArticlesAction(data.data));
    } catch (e: any) {
        yield put(
            setNewsErrorAction(
                "Sorry! Selected report not found."
            )
        );
    }
}


export function* newsSaga() {
    yield takeEvery(ACTIONS.GET_ARTICLES_ACTION, getArticlesSaga);
    yield takeEvery(ACTIONS.GET_SELECTED_ARTICLES_ACTION, getSelectedArticleSaga);
    yield takeEvery(ACTIONS.GET_BLOGS_ACTION, getBlogSaga);
    yield takeEvery(ACTIONS.GET_SELECTED_BLOGS_ACTION, getSelectedBlogSaga);
    yield takeEvery(ACTIONS.GET_REPORTS_ACTION, getReportSaga);
    yield takeEvery(ACTIONS.GET_SELECTED_REPORTS_ACTION, getSelectedReportSaga);
    yield takeEvery(ACTIONS.GET_PAGINATED_ARTICLE_ACTION, getPaginationSaga);
}

