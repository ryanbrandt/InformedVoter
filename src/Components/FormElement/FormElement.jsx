import React, { Component } from "react";

import "./FormElement.css";

export default class FormElement extends Component {
  renderLabel() {
    if (this.props.label)
      return (
        <label
          className={this.props.required ? "required" : ""}
          htmlFor={this.props.id}
        >
          {this.props.label}
        </label>
      );
  }

  renderInput() {
    return (
      <div className="form-element">
        {this.renderLabel()}
        <input
          className="form-control"
          placeholder={this.props.placeholder}
          type={this.props.type}
          id={this.props.id}
          required={this.props.required}
        />
      </div>
    );
  }
  renderTexarea() {
    return (
      <div className="form-element">
        {this.renderLabel()}
        <textarea
          className="form-control"
          placeholder={this.props.placeholder}
          id={this.props.id}
          required={this.props.required}
        />
      </div>
    );
  }

  renderButton() {
    return (
      <div className="form-element button">
        <button
          type={this.props.type}
          className="btn btn-primary"
          onClick={this.props.clickHandler}
        >
          {this.props.label}
        </button>
      </div>
    );
  }

  render() {
    if (
      ["text", "password", "email", "number", "date"].includes(this.props.type)
    )
      return this.renderInput();
    else if (this.props.type === "textarea") return this.renderTexarea();
    else return this.renderButton();
  }
}
