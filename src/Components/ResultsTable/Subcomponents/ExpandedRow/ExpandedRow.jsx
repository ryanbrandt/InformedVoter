/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { setContentDisplay } from "../../../../Actions/systemActions";
import { setActiveCandidate } from "../../../../Actions/hubActions";
import { decodeStatus } from "../../../../Utils/helpers";

const ExpandedRow = props => {
  const handleClick = async e => {
    const { setActiveCandidate, setContentDisplay } = props;
    e.preventDefault();
    await setActiveCandidate(
      e.target.getAttribute("data-value"),
      e.target.getAttribute("data-string")
    );
    setContentDisplay("hub");
  };

  const { result } = props;

  return (
    <Row
      className="expanded-content"
      style={{ padding: "10px", textAlign: "center" }}
    >
      <Col>
        <Row>
          <b>Affiliation:</b>&nbsp;
          {result.party_full ? result.party_full : "N/A"}
        </Row>
        <Row>
          <b>Active Through:</b>&nbsp;
          {result.active_through ? result.active_through : "N/A"}
        </Row>
      </Col>
      <Col>
        <Row>
          <b>Status:</b>&nbsp;
          {decodeStatus(result.candidate_status)}
        </Row>
        <Row>
          <b>Last Filed:</b>&nbsp;
          {new Date(result.last_file_date).toLocaleDateString()}
        </Row>
      </Col>
      <a
        href="#"
        data-value={result.candidate_id}
        data-string={result.name}
        className="app-link"
        style={{ padding: "5px" }}
        onClick={e => {
          handleClick(e);
        }}
      >
        See financials and more
      </a>
    </Row>
  );
};

const mapDispatchToProps = dispatch => ({
  setContentDisplay: display => dispatch(setContentDisplay(display)),
  setActiveCandidate: (id, candidate) =>
    dispatch(setActiveCandidate(id, candidate)),
});

export default connect(
  null,
  mapDispatchToProps
)(ExpandedRow);
