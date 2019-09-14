import React, { Component } from "react";
import { connect } from "react-redux";

import Footer from "../../Components/Footer/Footer";
import Search from "../../Components/Search/Search";
import CandidateHub from "../../Components/CandidateHub/CandidateHub";
import HubHeader from "../../Components/CandidateHub/Subcomponents/Header/HubHeader";
import ResultsTable from "../../Components/ResultsTable/ResultsTable";

import "./ContentContainer.css";

class SideContainer extends Component {
  renderFooter() {
    const { mobile } = this.props;
    if (mobile) {
      return <Footer mobile={mobile} />;
    }
  }

  renderHeader() {
    const { system, mobile } = this.props;
    if (system.contentDisplay === "search") {
      return <Search />;
    }
    return <HubHeader mobile={mobile} />;
  }

  renderBody() {
    const { system } = this.props;
    if (system.contentDisplay === "search") {
      return <ResultsTable />;
    }
    return <CandidateHub />;
  }

  render() {
    return (
      <div className="content-container">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  system: state.system,
});

export default connect(
  mapStateToProps,
  {}
)(SideContainer);
