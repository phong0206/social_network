import { all } from 'redux-saga/effects';
import { watchLoginAsync } from "./user"
export default function* rootSaga() {
    yield all([
        watchLoginAsync()
    ])
}