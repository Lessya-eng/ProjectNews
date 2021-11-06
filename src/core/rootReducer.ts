import { combineReducers } from "redux";

import { newsReducer } from "../core/reducers";

export const rootReducer = combineReducers({
    news: newsReducer,
});