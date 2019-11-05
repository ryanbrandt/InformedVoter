import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getSearchFetching,
  getSearchResults,
  getNumResultPages,
} from "../../Selectors/searchSelectors";
import PaginationDetail from "./Subcomponents/PaginationDetail";
import ResultRow from "./Subcomponents/ResultRow";
import Loader from "../../Common/Components/Loader/Loader";

class ResultsTable extends Component {
  renderContent() {
    const { pages, results, fetching } = this.props;

    if (fetching) return <Loader />;

    return (
      <>
        {pages > 1 && <PaginationDetail />}
        {results.map((result, i) => {
          return <ResultRow key={i} result={result} />;
        })}
      </>
    );
  }

  render() {
    return <div className="results-table">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => ({
  fetching: getSearchFetching(state),
  results: getSearchResults(state),
  pages: getNumResultPages(state),
});
export default connect(
  mapStateToProps,
  {}
)(ResultsTable);
