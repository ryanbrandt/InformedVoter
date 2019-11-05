import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";

import { getResultPagination } from "../../../Selectors/searchSelectors";
import { doSearch } from "../../../Actions/searchActions";

class PaginationDetail extends Component {
  handleClick = e => {
    e.preventDefault();
    const { doSearch } = this.props;

    // annoying hack to fix bootstrap Last/First
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
  pagination: getResultPagination(state),
});

const mapDispatchToProps = dispatch => ({
  doSearch: pageNum => dispatch(doSearch(pageNum)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationDetail);
