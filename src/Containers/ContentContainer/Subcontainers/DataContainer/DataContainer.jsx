import React, { Component } from "react";

import ResultsTable from "../../../../Components/ResultsTable/ResultsTable";

import "./DataContainer.css";

class DataContainer extends Component {
  render() {
    return (
      <div className="data-container">
        <ResultsTable />
      </div>
    );
  }
}

export default DataContainer;
