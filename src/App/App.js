import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import MainGrid from "./Containers/MainGrid";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <MainGrid />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
