import {
  DO_SEARCH,
  SEARCH_RESULTS_RECEIVED,
  PAGINATE_SEARCH_RESULTS,
  UPDATE_SELECTION,
  CLEAR_SELECTION,
  UPDATE_QUERY,
  CLEAR_QUERY,
  CLEAR_PAGINATION
} from "../Constants/seachTypes";
import { REQUEST_API, API_REQUEST_FAILED } from "../Constants/types";

export const updateSelection = payload => {
  return {
    type: UPDATE_SELECTION,
    payload
  };
};

export const updateQuery = query => {
  return {
    type: UPDATE_QUERY,
    query
  };
};

export const clearQuery = () => {
  return {
    type: CLEAR_QUERY
  };
};

export const clearSelection = field => {
  return {
    type: CLEAR_SELECTION,
    field
  };
};

export const doSearch = (page = null) => {
  return {
    type: DO_SEARCH,
    page
  };
};

export const searchResultsReceived = results => {
  return {
    type: SEARCH_RESULTS_RECEIVED,
    results
  };
};

export const paginateSearchResults = pagination => {
  return {
    type: PAGINATE_SEARCH_RESULTS,
    pagination
  };
};

export const clearPagination = () => {
  return {
    type: CLEAR_PAGINATION
  };
};

export const requestApi = () => {
  return {
    type: REQUEST_API
  };
};

export const apiRequestFailed = problem => {
  return {
    type: API_REQUEST_FAILED,
    problem
  };
};
