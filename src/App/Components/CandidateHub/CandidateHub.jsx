import React, { Component } from "react";
import { connect } from "react-redux";

import Loader from "../../Common/Components/Loader";
import {
  getHubInitializing,
  getActiveCandidate,
} from "../../Selectors/hubSelectors";
import {
  initializeCandidateHub,
  setActiveCandidate,
} from "../../Actions/hubActions";

class CandidateHub extends Component {
  componentDidMount() {
    const { initializeHub } = this.props;

    initializeHub();
  }

  renderHeader() {
    const { candidate } = this.props;
    return (
      <div className="hub-header">
        <h1 className="candidate-header">{candidate}</h1>
        <hr />
      </div>
    );
  }

  renderBody() {
    const { initializing } = this.props;
    if (initializing) {
      return (
        <div className="loader-container">
          <Loader />
        </div>
      );
    }
    return <p>Wowee</p>;
  }

  render() {
    return (
      <div className="candidate-hub">
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initializeHub: () => dispatch(initializeCandidateHub()),
  setActiveCandidate: (id, name) => dispatch(setActiveCandidate(id, name)),
});

const mapStateToProps = state => ({
  initializing: getHubInitializing(state),
  candidate: getActiveCandidate(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateHub);
