import {
  DO_SEARCH,
  SEARCH_RESULTS_RECEIVED,
  UPDATE_SELECTION,
  UPDATE_QUERY,
} from "../Constants/seachTypes";
import { REQUEST_API, FEC_API_REQUEST_FAILED } from "../Constants/types";

export const updateSelection = payload => {
  return {
    type: UPDATE_SELECTION,
    payload,
  };
};

export const updateQuery = query => {
  return {
    type: UPDATE_QUERY,
    query,
  };
};

export const doSearch = () => {
  return {
    type: DO_SEARCH,
  };
};

export const searchResultsReceived = results => {
  return {
    type: SEARCH_RESULTS_RECEIVED,
    results,
  };
};

export const requestApi = () => {
  return {
    type: REQUEST_API,
  };
};

export const fecApiRequestFailed = problem => {
  return {
    type: FEC_API_REQUEST_FAILED,
    problem,
  };
};
