import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Search from "../Components/Search/Search";
import CandidateHub from "../Components/CandidateHub/CandidateHub";

const SideContainer = () => {
  return (
    <div className="content-container">
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/candidate-hub">
          <CandidateHub />
        </Route>
        <Redirect from="*" to="/search" />
      </Switch>
    </div>
  );
};

export default SideContainer;
