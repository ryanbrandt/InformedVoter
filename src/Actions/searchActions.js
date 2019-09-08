import {
  DO_SEARCH,
  SEARCH_RESULTS_RECEIVED,
  PAGINATE_SEARCH_RESULTS,
  UPDATE_SELECTION,
  UPDATE_QUERY,
} from "../Constants/seachTypes";
import { REQUEST_API, API_REQUEST_FAILED } from "../Constants/types";

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

export const doSearch = (page = null) => {
  return {
    type: DO_SEARCH,
    page,
  };
};

export const searchResultsReceived = results => {
  return {
    type: SEARCH_RESULTS_RECEIVED,
    results,
  };
};

export const paginateSearchResults = pagination => {
  return {
    type: PAGINATE_SEARCH_RESULTS,
    pagination,
  };
};

export const requestApi = () => {
  return {
    type: REQUEST_API,
  };
};

export const apiRequestFailed = problem => {
  return {
    type: API_REQUEST_FAILED,
    problem,
  };
};
