import React, { Component } from "react";

import "./FormElement.css";

export default class FormElement extends Component {
  renderLabel() {
    const { label, required, id } = this.props;

    return label ? (
      <label className={required ? "required" : ""} htmlFor={id}>
        {label}
      </label>
    ) : null;
  }

  renderInput() {
    const { placeholder, type, id, required, changeHandler } = this.props;

    return (
      <div className="form-element">
        {this.renderLabel()}
        <input
          className="form-control"
          placeholder={placeholder}
          type={type}
          id={id}
          required={required}
          onChange={changeHandler}
        />
      </div>
    );
  }

  renderTexarea() {
    const { placeholder, id, required } = this.props;

    return (
      <div className="form-element">
        {this.renderLabel()}
        <textarea
          className="form-control"
          placeholder={placeholder}
          id={id}
          required={required}
        />
      </div>
    );
  }

  renderButton() {
    const { type, label, clickHandler } = this.props;

    return (
      <div className="form-element button">
        <button type={type} className="btn btn-primary" onClick={clickHandler}>
          {label}
        </button>
      </div>
    );
  }

  render() {
    const { type } = this.props;

    if (["text", "password", "email", "number", "date"].includes(type)) {
      return this.renderInput();
    }
    if (type === "textarea") {
      return this.renderTexarea();
    }
    return this.renderButton();
  }
}
