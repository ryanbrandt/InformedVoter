import {
  DO_SEARCH,
  SEARCH_RESULTS_RECEIVED,
  UPDATE_SELECTION
} from "../Constants/seachTypes";
import { REQUEST_API, FEC_API_REQUEST_FAILED } from "../Constants/types";

export const updateSelection = payload => {
  return {
    type: UPDATE_SELECTION,
    payload: payload
  };
};

export const doSearch = () => {
  return {
    type: DO_SEARCH
  };
};

export const searchResultsReceived = results => {
  return {
    type: SEARCH_RESULTS_RECEIVED,
    payload: results
  };
};

export const requestApi = () => {
  return {
    type: REQUEST_API
  };
};

export const fecApiRequestFailed = problem => {
  return {
    type: FEC_API_REQUEST_FAILED,
    payload: problem
  };
};
