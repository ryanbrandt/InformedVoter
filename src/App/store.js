import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./Reducers";
import rootSaga from "./Sagas";

const systemInitialState = {
  system: {
    mobile: false,
    apiErrors: null,
  },
  search: {
    params: {
      q: null,
      advanced: {},
    },
    results: [],
    pagination: {},
    fetching: false,
    helpVisible: true,
  },
  hub: {
    activeCandidateId: null,
    activeCandidate: null,
    initializing: false,
    financials: [],
    history: [],
    helpVisible: false,
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
