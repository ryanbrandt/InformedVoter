import { select, put, takeLatest, call } from "redux-saga/effects";

import { getActiveCandidateId } from "../Selectors/hubSelectors";
import { fecApi, doGet } from "../Utils/api";

/**
 * Initialize hub
 */
export function* initializeHub() {
  yield put({ type: "REQUEST_INITIALIZATION" });
  const candidateId = yield select(getActiveCandidateId);

  const { data, problem } = yield call(
    doGet,
    fecApi,
    `/candidate/${candidateId}/totals`
  );
  if (data) {
    yield put({ type: "INITIALIZATION_SUCCESS", financials: data.results });
  } else {
    yield put({ type: "INITIALIZATION_FAILURE", problem });
  }
}

export function* watchInitializeHub() {
  yield takeLatest("INITIALIZE_CANDIDATE_HUB", initializeHub);
}
