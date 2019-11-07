import React, { Component } from "react";

import ExpandedRow from "./ExpandedRow";

export default class ResultRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      hover: false,
    };
  }

  toggleExpand = e => {
    e.preventDefault();
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  };

  handleHover = isMouseEnter => {
    this.setState({
      hover: isMouseEnter,
    });
  };

  render() {
    const { result } = this.props;
    const { expanded, hover } = this.state;

    return (
      <div
        className={hover || expanded ? "result-row-dark" : "result-row"}
        onClick={e => this.toggleExpand(e)}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
      >
        <div className="result-content">
          {result.name}
          {expanded ? (
            <i className="fa fa-minus fa-lg expand-icon" />
          ) : (
            <i className="fa fa-plus fa-lg expand-icon" />
          )}
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
