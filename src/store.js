import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { apply } from "@redux-saga/core/effects";
import rootReducer from "./Reducers";

const systemInitialState = {
  auth: {
    user: {},
    fetching: false
  }
};

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  persistedReducer,
  systemInitialState,
  compose(
    applyMiddleware(sagaMiddleware),
    composeEnhancers()
  )
);

export const persistor = persistStore(store);

export default store;
