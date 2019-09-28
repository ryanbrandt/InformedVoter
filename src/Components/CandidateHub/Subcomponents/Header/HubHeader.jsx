import React from "react";
import { connect } from "react-redux";

import { getActiveCandidate } from "../../../../Selectors/hubSelectors";
import { setContentDisplay } from "../../../../Actions/systemActions";

import "./HubHeader.css";

export const HubHeader = props => {
  const renderMasthead = (candidate, mobile) => {
    const { setContentDisplay } = props;
    
    if (mobile) {
      return (
        <div>
          <a
            href="#"
            className="app-link back-mobile"
            onClick={() => setContentDisplay("search")}
          >
            Back to Search
          </a>
          <h1>{candidate}</h1>
        </div>
      );
    }
    return (
      <div>
        <h1 className="candidate-header">{candidate}</h1>
        <a
          href="#"
          className="app-link back"
          onClick={() => setContentDisplay("search")}
        >
          Back to Search
        </a>
      </div>
    );
  };

  const { candidate, mobile } = props;
  return (
    <div className="hub-header">
      {renderMasthead(candidate, mobile)}
      <p className={mobile ? "header-detail mobile" : "header-detail"}>
        Gain insight into candidates finances, candidacy history, committee
        membership, trends and more
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setContentDisplay: display => dispatch(setContentDisplay(display)),
});

const mapStateToProps = state => ({
  candidate: getActiveCandidate(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HubHeader);
