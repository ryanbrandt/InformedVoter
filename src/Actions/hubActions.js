import * as a from "../Constants/hubTypes";

export const setActiveCandidate = (id, candidate) => {
  return {
    type: a.SET_ACTIVE_CANDIDATE,
    id,
    candidate,
  };
};

export const initializeCandidateHub = () => {
  return {
    type: a.INITIALIZE_CANDIDATE_HUB,
  };
};

export const requestInitialization = () => {
  return {
    type: a.REQUEST_INITIALIZATION,
  };
};

export const initializationSuccess = () => {
  return {
    type: a.INITIALIZATION_SUCCESS,
  };
};

export const initializationFailure = problem => {
  return {
    type: a.INITIALIZATION_FAILURE,
    problem,
  };
};
