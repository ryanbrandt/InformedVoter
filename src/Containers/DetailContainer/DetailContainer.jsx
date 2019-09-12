/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "../../Components/LoginForm/LoginForm";
import Footer from "../../Components/Footer/Footer";

import "./DetailContainer.css";

class DetailContainer extends Component {
  isAuth(auth) {
    return Object.entries(auth.user).length !== 0;
  }

  renderFooter(mobile) {
    if (!mobile) {
      return <Footer mobile={mobile} />;
    }
  }

  renderHeader(auth) {
    if (this.isAuth(auth)) return <h1>Welcome back, {auth.user.display}</h1>;
    return <h1>Welcome to Informed Voter!</h1>;
  }

  renderDetail(auth) {
    if (this.isAuth(auth)) return <h1>Navigation goes here</h1>;
    return <LoginForm />;
  }

  render() {
    const { mobile, auth } = this.props;

    return (
      <div className="detail-container">
        <div className="detail-header">{this.renderHeader(auth)}</div>
        <hr />
        <div className="detail">{this.renderDetail(auth)}</div>
        {this.renderFooter(mobile)}
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
)(DetailContainer);
