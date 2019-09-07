import React, { Component } from "react";

import ExpandedRow from "../ExpandedRow/ExpandedRow";

import "./ResultRow.css";

export default class ResultRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpand = e => {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded,
    });
  };
  render() {
    return (
      <div className="result-row">
        <div className="result-content">
          {this.props.result.name}
          <a href="#" onClick={e => this.toggleExpand(e)}>
            {this.state.expanded ? (
              <i className="fa fa-minus fa-lg expand-icon"></i>
            ) : (
              <i className="fa fa-plus fa-lg expand-icon"></i>
            )}
          </a>
        </div>
        <small>
          For <b>{this.props.result.office_full}</b>
        </small>
        <div
          className={
            this.state.expanded ? "expanded-row-active" : "expanded-row"
          }
        >
          <ExpandedRow result={this.props.result} />
        </div>
      </div>
    );
  }
}
