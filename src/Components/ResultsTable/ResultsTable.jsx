import React, { Component } from "react";
import { connect } from "react-redux";

import PaginationDetail from "./Subcomponents/PaginationDetail/PaginationDetail";
import ResultRow from "./Subcomponents/ResultRow/ResultRow";
import Loader from "../Loader/Loader";

import "./ResultsTable.css";

class ResultsTable extends Component {
  renderContent() {
    const { pages, results, fetching } = this.props;
    if (fetching) return <Loader />;
    return (
      <div>
        {pages > 1 && <PaginationDetail />}
        {results.map((result, i) => {
          return <ResultRow key={i} result={result} />;
        })}
      </div>
    );
  }

  render() {
    return <div className="results-table">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => ({
  fetching: state.search.fetching,
  results: state.search.results,
  pages: state.search.pagination.pages
});
export default connect(
  mapStateToProps,
  {}
)(ResultsTable);
