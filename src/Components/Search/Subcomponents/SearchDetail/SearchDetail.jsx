import React, { Component } from "react";

import SearchDropdown from "../SearchDropdown/SearchDropdown";

import "./SearchDetail.css";

export default class SearchDetail extends Component {
  render() {
    return (
      <div className="search-detail-grid">
        <SearchDropdown
          id="search_party"
          label="Party"
          options={[
            "Democrat",
            "Republican",
            "Socialist",
            "Green",
            "Libertarian",
            "Independant"
          ]}
        />
        <SearchDropdown
          id="search_office"
          label="Office"
          options={["House", "Senate", "President"]}
        />
        <SearchDropdown
          id="search_status"
          label="Candidate Status"
          options={["Current", "Prior", "Future"]}
        />
      </div>
    );
  }
}
