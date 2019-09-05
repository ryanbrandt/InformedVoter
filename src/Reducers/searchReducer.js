import {
  UPDATE_SELECTION,
  SEARCH_RESULTS_RECEIVED
} from "../Constants/seachTypes";
import { REQUEST_API } from "../Constants/types";

const initialState = {
  params: {
    query: null,
    advanced: {}
  },
  results: {},
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
    case REQUEST_API:
      return {
        ...state,
        fetching: true
      };
    case SEARCH_RESULTS_RECEIVED:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
}
