/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { connect } from "react-redux";

import "./SearchStatus.css";
import {
  decodeStatus,
  decodeOffice,
  decodeParty,
} from "../../../../Utils/helpers";
import { clearSelection, clearQuery } from "../../../../Actions/searchActions";

class SearchStatus extends Component {
  // eslint-disable-next-line class-methods-use-this
  decodeAdvanced(advanced, key) {
    switch (key) {
      case "party":
        return decodeParty(advanced[key]);
      case "office":
        return decodeOffice(advanced[key]);
      case "candidate_status":
        return decodeStatus(advanced[key]);
      default:
        return advanced[key];
    }
  }

  render() {
    const { params } = this.props;
    const { clearQuery, clearSelection } = this.props;
    const { q, advanced } = params;
    const isEmpty =
      !q &&
      (Object.keys(advanced).length === 0 ||
        Object.keys(advanced).forEach(key => {
          return advanced[key] === null;
        }));

    return (
      <div className={!isEmpty ? "search-status-open" : "search-status-closed"}>
        {q !== null && (
          <Badge variant="primary" className="status-badge">
            {q}
            <a
              href="#"
              className="app-link"
              onClick={e => {
                e.preventDefault();
                document.getElementById("search_candidate").value = "";
                clearQuery();
              }}
            >
              <sup>&times;</sup>
            </a>
          </Badge>
        )}
        {Object.keys(advanced).map(key => {
          return (
            advanced[key] !== null && (
              <Badge variant="secondary" className="status-badge" key={key}>
                {this.decodeAdvanced(advanced, key)}
                <a
                  href="#"
                  className="app-link"
                  onClick={e => {
                    e.preventDefault();
                    clearSelection(key);
                  }}
                >
                  <sup>&times;</sup>
                </a>
              </Badge>
            )
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  params: state.search.params,
});

const mapDispatchToProps = dispatch => ({
  clearQuery: () => dispatch(clearQuery()),
  clearSelection: key => dispatch(clearSelection(key)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchStatus);
