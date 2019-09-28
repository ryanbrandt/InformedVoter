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
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  };

  render() {
    const { result } = this.props;
    const { expanded } = this.state;

    return (
      <div className="result-row">
        <div className="result-content">
          {result.name}
          <a href="#" onClick={e => this.toggleExpand(e)}>
            {expanded ? (
              <i className="fa fa-minus fa-lg expand-icon" />
            ) : (
              <i className="fa fa-plus fa-lg expand-icon" />
            )}
          </a>
        </div>
        <small>
          For <b>{result.office_full}</b>
        </small>
        <div className={expanded ? "expanded-row-active" : "expanded-row"}>
          <ExpandedRow result={result} />
        </div>
      </div>
    );
  }
}
