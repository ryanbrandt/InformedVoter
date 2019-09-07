import React, { Component } from "react";
import { connect } from "react-redux";

import FormElement from "../FormElement/FormElement";
import SearchDetail from "./Subcomponents/SearchDetail/SearchDetail";
import { doSearch } from "../../Actions/searchActions";
import { updateQuery } from "../../Actions/searchActions";

class Search extends Component {
  debouncedChangeHandler = e => {
    e.persist();
    if (this.changeTimer) {
      clearTimeout(this.changeTimer);
      this.changeTimer = setTimeout(() => {
        this.props.updateQuery(e.target.value);
      }, 500);
    } else {
      this.changeTimer = setTimeout(() => {
        this.props.updateQuery(e.target.value);
      }, 500);
    }
  };

  componentWillUnmount() {
    if (this.changeTimer) clearInterval(this.changeTimer);
  }

  render() {
    return (
      <div className="search-grid">
        <FormElement
          type="text"
          required={false}
          placeholder="Search Candidates By Name"
          changeHandler={e => this.debouncedChangeHandler(e)}
        />
        <SearchDetail />
        <FormElement
          type="submit"
          required={false}
          label="Search"
          clickHandler={() => this.props.doSearch()}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { doSearch, updateQuery }
)(Search);
