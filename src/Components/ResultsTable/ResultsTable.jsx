import React, { Component } from "react";
import { connect } from "react-redux";

import PaginationDetail from "./Subcomponents/PaginationDetail/PaginationDetail";
import ResultRow from "./Subcomponents/ResultRow/ResultRow";

class ResultsTable extends Component {
  render() {
    return (
      <div className="results-table">
        {this.props.pages > 1 && <PaginationDetail />}
        {this.props.results.map((result, i) => {
          return <ResultRow key={i} result={result} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  results: state.search.results,
  pages: state.search.pagination.pages,
});
export default connect(
  mapStateToProps,
  {}
)(ResultsTable);
