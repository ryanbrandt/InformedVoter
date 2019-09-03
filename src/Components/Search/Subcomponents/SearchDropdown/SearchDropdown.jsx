import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import "./SearchDropdown.css";

export default class SearchDropdown extends Component {
  handleSelect = e => {
    let dropdownId = e.target.parentElement.getAttribute("aria-labelledby");
    this.persistSelection(e);
    switch (
      dropdownId
      // dispatch appropriate action here
    ) {
    }
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
