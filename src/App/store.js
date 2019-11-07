import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./Reducers";
import rootSaga from "./Sagas";

const systemInitialState = {
  system: {
    mobile: false,
  },
  search: {
    params: {
      q: null,
      advanced: {},
    },
    results: [],
    pagination: {},
    fetching: false,
  },
  hub: {
    activeCandidateId: null,
    activeCandidate: null,
    initializing: false,
    financials: [],
    history: [],
  },
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer,
  systemInitialState,
  compose(
    applyMiddleware(sagaMiddleware),
    composeEnhancers()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
