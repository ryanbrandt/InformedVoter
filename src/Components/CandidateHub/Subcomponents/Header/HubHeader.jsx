import React from "react";
import { connect } from "react-redux";

import "./HubHeader.css";

export const HubHeader = props => {
  const { candidate, mobile } = props;
  return (
    <div className="hub-header">
      <h1>{candidate}</h1>
      <p className={mobile ? "header-detail mobile" : "header-detail"}>
        Get the latest information about candidates finances, candidacy history,
        committee membership and more
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  candidate: state.hub.activeCandidate,
});

export default connect(
  mapStateToProps,
  {}
)(HubHeader);
