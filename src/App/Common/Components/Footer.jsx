import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { setHelpVisible } from "../../Actions/searchActions";

const Footer = props => {
  const handleHelpClick = () => {
    const { history } = props;
    const { location } = history;

    if (location.pathname === "/search") {
      const { showSearchHelp } = props;
      showSearchHelp();
    } else {
      // show candidate hub tutorial, etc.
    }
  };

  return (
    <div className="app-footer">
      <small>
        <a href="#" className="app-link" onClick={() => handleHelpClick()}>
          Help
        </a>
      </small>
      <br />
      <small>Informed Voter, 2019 &copy;</small>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showSearchHelp: () => dispatch(setHelpVisible()),
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Footer)
);
