import React, { Component } from "react";
import { connect } from "react-redux";

import FormElement from "../FormElement/FormElement";
import SearchDetail from "./Subcomponents/SearchDetail/SearchDetail";
import { doSearch } from "../../Actions/searchActions";

class Search extends Component {
  render() {
    return (
      <div className="search-grid">
        <FormElement
          type="text"
          required={false}
          id="search_candidate"
          placeholder="Search Candidates By Name"
        />
        <SearchDetail />
        <FormElement
          type="submit"
          required={false}
          id="search_submit"
          label="Search"
          clickHandler={() => this.props.doSearch()}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { doSearch }
)(Search);
