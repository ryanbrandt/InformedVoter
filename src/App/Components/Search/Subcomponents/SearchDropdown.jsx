import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { updateSelection } from "../../../Actions/searchActions";

class SearchDropdown extends Component {
  handleSelect = e => {
    const { updateSelection } = this.props;

    const payload = {
      field: e.target.parentElement.getAttribute("aria-labelledby"),
      value: e.target.id,
    };
    updateSelection(payload);
  };

  renderDropdown() {
    const { id, label, options } = this.props;
    return (
      <DropdownButton
        id={id}
        className="dropdown"
        title={label}
        variant="secondary"
      >
        {options.map((option, i) => {
          return (
            <Dropdown.Item
              key={i}
              onClick={e => this.handleSelect(e)}
              id={option[1]}
            >
              {option[0]}
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

const mapDispatchToProps = dispatch => ({
  updateSelection: payload => dispatch(updateSelection(payload)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchDropdown);
