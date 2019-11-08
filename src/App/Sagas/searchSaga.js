import { select, put, takeLatest, call, all } from "redux-saga/effects";

import { getParams } from "../Selectors/searchSelectors";
import { fecApi, doGet, getUrlWithParams } from "../Utils/api";

function* doSearch(action) {
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
    yield put({ type: "API_ERROR", error: problem });
  }
}

function* watchDoSearch() {
  yield takeLatest("DO_SEARCH", doSearch);
}

export default function* searchSaga() {
  yield all([watchDoSearch()]);
}
