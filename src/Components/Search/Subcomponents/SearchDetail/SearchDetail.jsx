import React from "react";

import SearchDropdown from "../SearchDropdown/SearchDropdown";

import "./SearchDetail.css";

export const SearchDetail = () => {
  return (
    <div className="search-detail-grid">
      <SearchDropdown
        id="party"
        label="Party"
        options={[
          ["Democrat", "DEM"],
          ["Republican", "REP"],
          ["Socialist", "SOC"],
          ["Green", "GRE"],
          ["Libertarian", "LIB"],
          ["Independant", "IND"],
        ]}
      />
      <SearchDropdown
        id="office"
        label="Office"
        options={[["House", "H"], ["Senate", "S"], ["President", "P"]]}
      />
      <SearchDropdown
        id="candidate_status"
        label="Candidate Status"
        options={[["Current", "C"], ["Prior", "P"], ["Future", "F"]]}
      />
    </div>
  );
};

export default SearchDetail;
