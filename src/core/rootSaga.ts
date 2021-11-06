import { all } from "redux-saga/effects";
import { newsSaga } from "./sagas";

export function* rootSaga() {
    try {
        yield all([newsSaga()]);
    } catch (e) { }
}