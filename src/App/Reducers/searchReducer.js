import * as a from "../Constants/seachTypes";

const initialState = {
  params: {
    q: null,
    advanced: {},
  },
  results: [],
  pagination: {},
  fetching: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.UPDATE_SELECTION:
      return {
        ...state,
        params: {
          ...state.params,
          advanced: {
            ...state.params.advanced,
            [action.payload.field]: action.payload.value,
          },
        },
      };

    case a.CLEAR_SELECTION:
      return {
        ...state,
        params: {
          ...state.params,
          advanced: {
            ...state.params.advanced,
            [action.field]: null,
          },
        },
      };

    case a.CLEAR_QUERY:
      return {
        ...state,
        params: {
          ...state.params,
          q: null,
        },
      };

    case a.UPDATE_QUERY:
      return {
        ...state,
        params: {
          ...state.params,
          q: action.query !== "" ? action.query : null,
        },
      };

    case a.REQUEST_SEARCH:
      return {
        ...state,
        fetching: true,
      };

    case a.SEARCH_RESULTS_RECEIVED:
      return {
        ...state,
        results: action.results,
        fetching: false,
      };

    case a.PAGINATE_SEARCH_RESULTS:
      return {
        ...state,
        pagination: action.pagination,
      };

    case a.CLEAR_PAGINATION:
      return {
        ...state,
        params: {
          ...state.params,
          page: null,
        },
      };
    default:
      return state;
  }
}
