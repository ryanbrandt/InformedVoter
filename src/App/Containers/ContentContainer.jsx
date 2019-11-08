import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router";

import { getDeviceStatus } from "../Selectors/systemSelectors";
import Footer from "../Common/Components/Footer";
import Search from "../Components/Search/Search";
import CandidateHub from "../Components/CandidateHub/CandidateHub";

const ContentContainer = props => {
  const { mobile } = props;

  return (
    <div className={mobile ? "content-container-mobile" : "content-container"}>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/candidate-hub">
          <CandidateHub />
        </Route>
        <Redirect from="*" to="/search" />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mobile: getDeviceStatus(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(ContentContainer);
