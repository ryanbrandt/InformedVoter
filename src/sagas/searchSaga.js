import { select } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export const getParams = state => state.search.params;

export function* doSearchWatcher() {
  yield takeEvery("DO_SEARCH", doSearch);
}

export function* doSearch() {
  let params = yield select(getParams);
  // do an api call here, maybe build a fetch util?
  yield put({ type: "SEARCH_RESULTS_RECEIVED" });
}
