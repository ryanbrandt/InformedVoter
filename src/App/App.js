import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import ErrorBoundary from "./Common/Components/ErrorBoundary";
import TopBar from "./Common/Components/TopBar";
import MainGrid from "./Containers/MainGrid";
import AppModal from "./Common/Components/AppModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContributeModal: false,
    };
  }

  toggleContributeModal = () => {
    const { showContributeModal } = this.state;

    this.setState({
      ...this.state,
      showContributeModal: !showContributeModal,
    });
  };

  render() {
    const { showContributeModal } = this.state;
    const modalBody =
      "Are you a developer? Informed Voter is open to your contributions! Check out the Github repository TODO list and open a PR!";
    const modalFooter = (
      <a
        href="https://github.com/ryanbrandt/InformedVoter"
        className="app-link"
      >
        Take me to the Repository
      </a>
    );

    return (
      <Provider store={store}>
        <div className="App">
          <ErrorBoundary>
            <BrowserRouter>
              <TopBar handleClick={this.toggleContributeModal} />
              <MainGrid />
              <AppModal
                active={showContributeModal}
                title="Contribute"
                bodyText={modalBody}
                footer={modalFooter}
                onClose={this.toggleContributeModal}
              />
            </BrowserRouter>
          </ErrorBoundary>
        </div>
      </Provider>
    );
  }
}

export default App;
