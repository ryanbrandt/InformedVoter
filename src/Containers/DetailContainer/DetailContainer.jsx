import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "../../Components/LoginForm/LoginForm";
import Footer from "../../Components/Footer/Footer";

import "./DetailContainer.css";

class DetailContainer extends Component {
  renderDetail() {
    if (this.isAuth()) return <h1>Navigation goes here</h1>;
    return <LoginForm />;
  }

  renderHeader() {
    if (this.isAuth())
      return <h1>Welcome back, {this.props.auth.user.display}</h1>;
    return <h1>Welcome to Informed Voter!</h1>;
  }

  renderFooter() {
    if (!this.props.mobile) return <Footer mobile={this.props.mobile} />;
  }

  isAuth() {
    return Object.entries(this.props.auth.user).length !== 0;
  }

  render() {
    return (
      <div className="detail-container">
        <div className="detail-header">{this.renderHeader()}</div>
        <hr />
        <div className="detail">{this.renderDetail()}</div>
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
)(DetailContainer);
