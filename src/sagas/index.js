import { all } from "redux-saga/effects";

import { doSearchWatcher } from "./searchSaga";

export default function* rootSaga() {
  yield all([doSearchWatcher()]);
}
