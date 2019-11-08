import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap";

import FormElement from "../../Common/Components/AppFormElement";
import SearchDetail from "./Subcomponents/SearchDetail";
import SearchStatus from "./Subcomponents/SearchStatus";
import ResultsTable from "../ResultsTable/ResultsTable";
import { getHelpVisible } from "../../Selectors/searchSelectors";
import {
  doSearch,
  updateQuery,
  setHelpHidden,
} from "../../Actions/searchActions";

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
      }, 200);
    } else {
      this.changeTimer = setTimeout(() => {
        updateQuery(value.trim());
      }, 200);
    }
  };

  renderHeader = () => {
    const { hideHelp } = this.props;

    return (
      <Jumbotron>
        <h1>Where to Start</h1>
        <p className="app-text-info">
          1) Search for your candidate of interest
        </p>
        <p className="app-text-info">
          2) Expand their row, navigate to their Candidate Hub
        </p>
        <p className="app-text-info">
          3) View their aggregated Federal Election Committee data, compare them
          to other candidates, get informed
        </p>
        <a href="#" className="app-link" onClick={() => hideHelp()}>
          Hide
        </a>
      </Jumbotron>
    );
  };

  render() {
    const { doSearch, helpVisible } = this.props;

    return (
      <>
        {helpVisible && this.renderHeader()}
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

const mapStateToProps = state => {
  return {
    helpVisible: getHelpVisible(state),
  };
};

const mapDispatchToProps = dispatch => ({
  doSearch: () => dispatch(doSearch()),
  updateQuery: q => dispatch(updateQuery(q)),
  hideHelp: () => dispatch(setHelpHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
