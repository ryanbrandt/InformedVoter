import { select } from "redux-saga/effects";
import { put, takeEvery, call } from "redux-saga/effects";

import { fecApi, doGet, getUrlWithParams } from "../Utils/api";

export const getParams = state => state.search.params;

export function* doSearchWatcher() {
  yield takeEvery("DO_SEARCH", doSearch);
}

export function* doSearch(action) {
  const params = yield select(getParams);
  // if a paginated request
  if (action.page) params.page = action.page;
  const urlWithParams = yield call(getUrlWithParams, "/candidates", params);
  const { data, problem } = yield call(doGet, fecApi, urlWithParams);
  if (data) {
    yield put({ type: "SEARCH_RESULTS_RECEIVED", results: data.results });
    yield put({
      type: "PAGINATE_SEARCH_RESULTS",
      pagination: data.pagination,
    });
  } else {
    yield put({ type: "API_REQUEST_FAILED", problem: problem });
  }
}
