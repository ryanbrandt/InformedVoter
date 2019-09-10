import {
  UPDATE_SELECTION,
  CLEAR_SELECTION,
  UPDATE_QUERY,
  CLEAR_QUERY,
  SEARCH_RESULTS_RECEIVED,
  PAGINATE_SEARCH_RESULTS,
  CLEAR_PAGINATION
} from "../Constants/seachTypes";
import { REQUEST_API } from "../Constants/types";

const initialState = {
  params: {
    q: null,
    advanced: {}
  },
  results: [],
  pagination: {},
  fetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SELECTION:
      return {
        ...state,
        params: {
          ...state.params,
          advanced: {
            ...state.params.advanced,
            [action.payload.field]: action.payload.value
          }
        }
      };
    case CLEAR_SELECTION:
      return {
        ...state,
        params: {
          ...state.params,
          advanced: {
            ...state.params.advanced,
            [action.field]: null
          }
        }
      };
    case CLEAR_QUERY:
      return {
        ...state,
        params: {
          ...state.params,
          q: null
        }
      };
    case UPDATE_QUERY:
      return {
        ...state,
        params: {
          ...state.params,
          q: action.query !== "" ? action.query : null
        }
      };
    case REQUEST_API:
      return {
        ...state,
        fetching: true
      };
    case SEARCH_RESULTS_RECEIVED:
      return {
        ...state,
        results: action.results,
        fetching: false
      };
    case PAGINATE_SEARCH_RESULTS:
      return {
        ...state,
        pagination: action.pagination
      };
    case CLEAR_PAGINATION:
      return {
        ...state,
        params: {
          ...state.params,
          page: null
        }
      };
    default:
      return state;
  }
}
