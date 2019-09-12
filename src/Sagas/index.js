import { all } from "redux-saga/effects";

import { doSearchWatcher } from "./searchSaga";
import { watchInitializeHub } from "./hubSaga";

export default function* rootSaga() {
  yield all([doSearchWatcher(), watchInitializeHub()]);
}
