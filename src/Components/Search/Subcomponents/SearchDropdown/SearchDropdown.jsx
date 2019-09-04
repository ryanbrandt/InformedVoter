import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { updateSelection } from "../../../../Actions/searchActions";

import "./SearchDropdown.css";

class SearchDropdown extends Component {
  handleSelect = e => {
    this.persistSelection(e);
    let field = e.target.parentElement
      .getAttribute("aria-labelledby")
      .split("_")[1];
    let value = e.target.innerHTML;
    let payload = { field: field, value: value };
    // TODO: code this value for the FEC API!
    this.props.updateSelection(payload);
  };

  persistSelection(e) {
    e.target.parentElement.childNodes.forEach(option => {
      option.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  renderDropdown() {
    return (
      <DropdownButton
        id={this.props.id}
        className="dropdown"
        title={this.props.label}
        variant="secondary"
      >
        {this.props.options.map((option, i) => {
          return (
            <Dropdown.Item key={i} onClick={e => this.handleSelect(e)}>
              {option}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    );
  }
  render() {
    return this.renderDropdown();
  }
}

export default connect(
  null,
  { updateSelection }
)(SearchDropdown);
