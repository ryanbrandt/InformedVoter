import { DO_AUTH, DO_DE_AUTH, REQUEST_API } from "../Actions/types";

const initialState = {
  user: {},
  fetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        fetching: true
      };
    case DO_AUTH:
      return {
        ...state,
        user: action.payload,
        fetching: false
      };
    case DO_DE_AUTH:
      return initialState;
    default:
      return state;
  }
}
