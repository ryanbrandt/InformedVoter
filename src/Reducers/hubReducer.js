import * as a from "../Constants/hubTypes";

const initialState = {
  activeCandidateId: null,
  activeCandidate: null,
  initializing: false,
  financials: {},
  history: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.SET_ACTIVE_CANDIDATE:
      return {
        ...state,
        activeCandidateId: action.id,
        activeCandidate: action.candidate,
      };
    case a.REQUEST_INITIALIZATION:
      return {
        ...state,
        initializing: true,
      };
    case a.INITIALIZATION_SUCCESS:
      return {
        ...state,
        initializing: false,
        financials: action.financials,
      };
    default:
      return state;
  }
}
