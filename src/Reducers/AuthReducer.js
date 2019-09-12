import { DO_AUTH, DO_DE_AUTH, REQUEST_AUTH } from "../Constants/authTypes";

const initialState = {
  user: {},
  fetching: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state,
        fetching: true,
      };
    case DO_AUTH:
      return {
        ...state,
        user: action.payload,
        fetching: false,
      };
    case DO_DE_AUTH:
      return initialState;
    default:
      return state;
  }
}
