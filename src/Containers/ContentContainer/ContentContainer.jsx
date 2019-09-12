import React, { Component } from "react";
import { connect } from "react-redux";

import Footer from "../../Components/Footer/Footer";
import Search from "../../Components/Search/Search";
import DataContainer from "./Subcontainers/DataContainer/DataContainer";

import "./ContentContainer.css";

class SideContainer extends Component {
  renderFooter() {
    const { mobile } = this.props;

    if (mobile) {
      return <Footer mobile={mobile} />;
    }
  }

  render() {
    return (
      <div className="content-container">
        <Search />
        <DataContainer />
        {this.renderFooter()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {}
)(SideContainer);
