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

  renderForm = () => {
    const { login } = this.state;
    return (
      <form id={login ? "login" : "register"}>
        <FormElement
          type="email"
          placeholder="Your email"
          id="email"
          required
        />
        <FormElement
          type="password"
          placeholder="Your password"
          id="password"
          required
        />
        {!login && (
          <FormElement
            type="password"
            placeholder="Confirm password"
            id="password"
            required
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
        {this.renderForm()}
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
