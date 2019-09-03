import React, { Component } from "react";
import { connect } from "react-redux";

import Footer from "../../Components/Footer/Footer";
import Search from "../../Components/Search/Search";

import "./ContentContainer.css";

class SideContainer extends Component {
  renderFooter() {
    if (this.props.mobile) return <Footer mobile={this.props.mobile} />;
  }
  render() {
    return (
      <div className="content-container">
        <Search />
        {this.renderFooter()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(SideContainer);
