/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col } from "react-bootstrap";

import { decodeStatus } from "../../../../Utils/helpers";

function ExpandedRow(props) {
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
        className="app-link"
        style={{ padding: "5px" }}
        onClick={e => {
          e.preventDefault();
        }}
      >
        See financials and more
      </a>
    </Row>
  );
}

export default ExpandedRow;
