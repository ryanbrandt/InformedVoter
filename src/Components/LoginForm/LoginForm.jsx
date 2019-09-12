/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

import FormElement from "../FormElement/FormElement";

import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  toggleForm = () => {
    const { login } = this.state;

    this.setState({
      login: !login,
    });
  };

  // eslint-disable-next-line class-methods-use-this
  renderForm(login) {
    return (
      <form id={login ? "login" : "register"}>
        <FormElement
          type="email"
          placeholder="Your email"
          id="email"
          required={true}
        />
        <FormElement
          type="password"
          placeholder="Your password"
          id="password"
          required={true}
        />
        {!login && (
          <FormElement
            type="password"
            placeholder="Confirm password"
            id="password"
            required={true}
          />
        )}
        <FormElement type="submit" label={login ? "Login" : "Register"} />
      </form>
    );
  }

  render() {
    const { login } = this.state;
    return (
      <div className="login-form-container">
        <p className="app-text-info">Login to personalize your experience</p>
        {this.renderForm(login)}
        <div className="form-detail">
          <small>
            <a className="app-link" href="#" onClick={() => this.toggleForm()}>
              {login ? "Don't have an account?" : "Already have an account?"}
            </a>
          </small>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.auth.fetching,
});

export default connect(
  mapStateToProps,
  {}
)(LoginForm);
