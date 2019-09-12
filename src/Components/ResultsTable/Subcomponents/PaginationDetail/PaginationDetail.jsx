/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";

import { doSearch } from "../../../../Actions/searchActions";

import "./PaginationDetail.css";

class PaginationDetail extends Component {
  handleClick = e => {
    const { doSearch } = this.props;
    e.preventDefault();
    // fix for bootstrap Last/First
    const pageNum = e.target.getAttribute("data-value")
      ? e.target.getAttribute("data-value")
      : e.target.parentNode.getAttribute("data-value");
    doSearch(pageNum);
  };

  renderNums() {
    const nums = [];
    const { pagination } = this.props;
    const { page, pages } = pagination;
    for (
      let i = page > 3 ? page - 2 : 1;
      i <= pages && i <= (page > 3 ? page + 2 : page + (5 - page));
      i += 1
    ) {
      nums.push(i);
    }
    return (
      <Pagination size="sm" className="pagination-detail">
        <Pagination.First data-value={1} onClick={e => this.handleClick(e)} />
        {nums.map(num => {
          return (
            <Pagination.Item
              key={num}
              active={num === page}
              data-value={num}
              onClick={e => this.handleClick(e)}
            >
              {num}
            </Pagination.Item>
          );
        })}
        <Pagination.Last
          data-value={pages}
          onClick={e => this.handleClick(e)}
        />
      </Pagination>
    );
  }

  render() {
    return this.renderNums();
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
