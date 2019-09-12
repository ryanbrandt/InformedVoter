import React, { Component } from "react";
import { connect } from "react-redux";

import Loader from "../Loader/Loader";
import { initializeCandidateHub } from "../../Actions/hubActions";

import "./CandidateHub.css";

class CandidateHub extends Component {
  componentDidMount() {
    const { initializeHub } = this.props;
    initializeHub();
  }

  renderBody() {
    const { hub } = this.props;
    if (hub.initializing) {
      return (
        <div className="loader-container">
          <Loader />
        </div>
      );
    }
    return <p>Wowee</p>;
  }

  render() {
    return <div className="candidate-hub">{this.renderBody()}</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  initializeHub: () => dispatch(initializeCandidateHub()),
});

const mapStateToProps = state => ({
  hub: state.hub,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateHub);
