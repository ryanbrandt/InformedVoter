import { all } from "redux-saga/effects";

import { watchDoSearch } from "./searchSaga";
import { watchInitializeHub } from "./hubSaga";

export default function* rootSaga() {
  yield all([watchDoSearch(), watchInitializeHub()]);
}
