import React, { Component } from "react";
import { connect } from "react-redux";

import FormElement from "../../Common/Components/FormElement/FormElement";
import SearchDetail from "./Subcomponents/SearchDetail";
import SearchStatus from "./Subcomponents/SearchStatus";
import ResultsTable from "../ResultsTable/ResultsTable";
import { doSearch, updateQuery } from "../../Actions/searchActions";

class Search extends Component {
  componentDidMount() {
    const { doSearch } = this.props;

    doSearch();
  }

  componentWillUnmount() {
    if (this.changeTimer) clearInterval(this.changeTimer);
  }

  debouncedChangeHandler = e => {
    const { updateQuery } = this.props;
    const { value } = e.target;

    if (this.changeTimer) {
      clearTimeout(this.changeTimer);
      this.changeTimer = setTimeout(() => {
        updateQuery(value.trim());
      }, 500);
    } else {
      this.changeTimer = setTimeout(() => {
        updateQuery(value.trim());
      }, 500);
    }
  };

  renderHeader = () => {
    return (
      <>
        <h1>Welcome to Informed Voter</h1>
        <p className="app-text-info">
          Gain insight into candidates finances, candidacy history, committee
          membership, trends and more
        </p>
      </>
    );
  };

  render() {
    const { doSearch } = this.props;

    return (
      <>
        {this.renderHeader()}
        <div className="search-grid">
          <FormElement
            type="text"
            id="search_candidate"
            required={false}
            placeholder="Search Candidates By Name"
            changeHandler={e => this.debouncedChangeHandler(e)}
          />
          <SearchStatus />
          <SearchDetail />
          <FormElement
            type="submit"
            required={false}
            label="Search"
            clickHandler={() => doSearch()}
          />
        </div>
        <ResultsTable />
      </>
    );
  }
}

const mapStateToProps = state => ({
  pagination: state.search.pagination,
});

const mapDispatchToProps = dispatch => ({
  doSearch: () => dispatch(doSearch()),
  updateQuery: q => dispatch(updateQuery(q)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
