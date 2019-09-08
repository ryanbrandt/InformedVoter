import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./Reducers";
import rootSaga from "./sagas";

const systemInitialState = {
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
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

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
