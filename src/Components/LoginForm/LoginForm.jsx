import React, { Component } from "react";
import { connect } from "react-redux";

import FormElement from "../Subcomponents/FormElement/FormElement";

import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }

  toggleForm = () => {
    this.setState({
      login: !this.state.login
    });
  };

  renderForm() {
    return (
      <form id={this.state.login ? "login" : "register"}>
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
        {!this.state.login && (
          <FormElement
            type="password"
            placeholder="Confirm password"
            id="password"
            required={true}
          />
        )}
        <FormElement
          type="submit"
          label={this.state.login ? "Login" : "Register"}
        />
      </form>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <p className="app-text-info">Login to personalize your experience</p>
        {this.renderForm()}
        <div className="form-detail">
          <small>
            <a className="app-link" href="#" onClick={() => this.toggleForm()}>
              {this.state.login
                ? "Don't have an account?"
                : "Already have an account?"}
            </a>
          </small>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.auth.fetching
});

export default connect(
  mapStateToProps,
  {}
)(LoginForm);
