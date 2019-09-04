import {
  DO_SEARCH,
  SEARCH_RESULTS_RECEIVED,
  UPDATE_SELECTION
} from "../Constants/seachTypes";
import { REQUEST_API } from "../Constants/types";

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

export const searchResultsReceived = payload => {
  return {
    type: SEARCH_RESULTS_RECEIVED,
    payload: payload
  };
};

export const requestApi = () => {
  return {
    type: REQUEST_API
  };
};
