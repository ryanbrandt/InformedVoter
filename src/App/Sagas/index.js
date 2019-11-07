import { all } from "redux-saga/effects";

import searchSaga from "./searchSaga";
import hubSaga from "./hubSaga";

export default function* rootSaga() {
  yield all([searchSaga(), hubSaga()]);
}
