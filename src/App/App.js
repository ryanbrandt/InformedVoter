import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import ErrorBoundary from "./Common/Components/ErrorBoundary";
import MainGrid from "./Containers/MainGrid";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ErrorBoundary>
          <BrowserRouter>
            <MainGrid />
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    </Provider>
  );
};

export default App;
