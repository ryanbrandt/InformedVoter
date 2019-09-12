/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

import { doSearch } from "../../../../Actions/searchActions";

import "./PaginationDetail.css";

class PaginationDetail extends Component {
  handleClick = e => {
    const { doSearch } = this.props;
    e.preventDefault();
    doSearch(e.target.getAttribute("data-value"));
  };

  renderNums() {
    const nums = [];
    const { pagination } = this.props;
    const { page, pages } = pagination;
    for (
      let i = page > 5 ? page - 5 : 1;
      i <= pages && i <= (page > 5 ? page + 5 : page + (10 - page));
      i += 1
    ) {
      nums.push(i);
    }
    return nums.map(num => {
      return (
        <a
          href="#"
          key={num}
          data-value={num}
          onClick={e => this.handleClick(e)}
          className={num === page ? "app-link page active" : "app-link page"}
        >
          {num}
        </a>
      );
    });
  }

  render() {
    return <div className="pagination-detail">{this.renderNums()}</div>;
  }
}

const mapStateToProps = state => ({
  pagination: state.search.pagination,
});

const mapDispatchToProps = dispatch => ({
  doSearch: pageNum => dispatch(doSearch(pageNum)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationDetail);
