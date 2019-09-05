import { select } from "redux-saga/effects";
import { put, takeEvery, call } from "redux-saga/effects";

import { fecApi, doGet, getUrlWithParams } from "../Utils/api";

export const getParams = state => state.search.params;

export function* doSearchWatcher() {
  yield takeEvery("DO_SEARCH", doSearch);
}

export function* doSearch() {
  const params = yield select(getParams);
  const urlWithParams = yield call(getUrlWithParams, "/candidates", params);
  const { data, problem } = yield call(doGet, fecApi, urlWithParams);
  if (data) {
    console.log(data);
    yield put({ type: "SEARCH_RESULTS_RECEIVED", results: data });
  } else {
    // TODO will have to check status code from this action...
    yield put({ type: "FEC_API_REQUEST_FAILED", problem: problem });
  }
}
