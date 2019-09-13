import { select, put, takeLatest, call } from "redux-saga/effects";

import { fecApi, doGet, getUrlWithParams } from "../Utils/api";

/**
 * Selectors
 */
export const getParams = state => state.search.params;

/**
 * Search
 */
export function* doSearch(action) {
  // only show loader/clear pagination if base request
  if (!action.page) {
    yield put({ type: "REQUEST_SEARCH" });
    yield put({ type: "CLEAR_PAGINATION" });
  }
  const params = yield select(getParams);
  // if a paginated request, add page param
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
    yield put({ type: "SEARCH_REQUEST_FAILED", problem });
  }
}

export function* doSearchWatcher() {
  yield takeLatest("DO_SEARCH", doSearch);
}
