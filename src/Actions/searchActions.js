import * as a from "../Constants/seachTypes";

export const updateSelection = payload => {
  return {
    type: a.UPDATE_SELECTION,
    payload,
  };
};

export const updateQuery = query => {
  return {
    type: a.UPDATE_QUERY,
    query,
  };
};

export const clearQuery = () => {
  return {
    type: a.CLEAR_QUERY,
  };
};

export const clearSelection = field => {
  return {
    type: a.CLEAR_SELECTION,
    field,
  };
};

export const doSearch = (page = null) => {
  return {
    type: a.DO_SEARCH,
    page,
  };
};

export const searchResultsReceived = results => {
  return {
    type: a.SEARCH_RESULTS_RECEIVED,
    results,
  };
};

export const paginateSearchResults = pagination => {
  return {
    type: a.PAGINATE_SEARCH_RESULTS,
    pagination,
  };
};

export const clearPagination = () => {
  return {
    type: a.CLEAR_PAGINATION,
  };
};

export const requestSearch = () => {
  return {
    type: a.REQUEST_SEARCH,
  };
};

export const searchRequestErrors = problem => {
  return {
    type: a.SEARCH_REQUEST_ERRORS,
    problem,
  };
};
