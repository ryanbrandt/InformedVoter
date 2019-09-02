import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store";
import MainGrid from "./Components/MainGrid/MainGrid";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <MainGrid />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
