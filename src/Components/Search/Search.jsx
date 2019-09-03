import React, { Component } from "react";

import FormElement from "../FormElement/FormElement";
import SearchDetail from "./Subcomponents/SearchDetail/SearchDetail";

export default class Search extends Component {
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
        />
      </div>
    );
  }
}
