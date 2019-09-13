import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./Reducers";
import rootSaga from "./Sagas";

const systemInitialState = {
  system: {
    contentDisplay: "search",
  },
  auth: {
    user: {},
    fetching: false,
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
    financials: {},
    history: {},
  },
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  persistedReducer,
  systemInitialState,
  compose(
    applyMiddleware(sagaMiddleware),
    composeEnhancers()
  )
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
