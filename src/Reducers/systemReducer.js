import * as a from "../Constants/systemTypes";

const initialState = {
  contentDisplay: "search",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.SET_CONTENT_DISPLAY:
      return {
        ...state,
        contentDisplay: action.display,
      };
    default:
      return state;
  }
}
