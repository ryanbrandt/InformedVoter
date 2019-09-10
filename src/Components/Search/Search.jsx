import React, { Component } from "react";
import { connect } from "react-redux";

import FormElement from "../FormElement/FormElement";
import SearchDetail from "./Subcomponents/SearchDetail/SearchDetail";
import SearchStatus from "./Subcomponents/SearchStatus/SearchStatus";
import { doSearch } from "../../Actions/searchActions";
import { updateQuery } from "../../Actions/searchActions";

class Search extends Component {
  debouncedChangeHandler = e => {
    e.persist();
    const { value } = e.target;
    if (this.changeTimer) {
      clearTimeout(this.changeTimer);
      this.changeTimer = setTimeout(() => {
        this.props.updateQuery(value.trim());
      }, 500);
    } else {
      this.changeTimer = setTimeout(() => {
        this.props.updateQuery(value.trim());
      }, 500);
    }
  };

  componentWillUnmount() {
    if (this.changeTimer) clearInterval(this.changeTimer);
  }

  render() {
    const { doSearch } = this.props;

    return (
      <div className="search-grid">
        <FormElement
          type="text"
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
    );
  }
}

const mapStateToProps = state => ({
  pagination: state.search.pagination
});

const mapDispatchToProps = dispatch => ({
  doSearch: () => dispatch(doSearch()),
  updateQuery: q => dispatch(updateQuery(q))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
