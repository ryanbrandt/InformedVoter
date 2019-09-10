/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col } from "react-bootstrap";

import { decodeStatus } from "../../../../Utils/helpers";

function ExpandedRow(props) {
  return (
    <Row
      className="expanded-content"
      style={{ padding: "10px", textAlign: "center" }}
    >
      <Col>
        <Row>
          <b>Affiliation:</b>&nbsp;
          {props.result.party_full ? props.result.party_full : "N/A"}
        </Row>
        <Row>
          <b>Active Through:</b>&nbsp;
          {props.result.active_through ? props.result.active_through : "N/A"}
        </Row>
      </Col>
      <Col>
        <Row>
          <b>Status:</b>&nbsp;
          {decodeStatus(props.result.candidate_status)}
        </Row>
        <Row>
          <b>Last Filed:</b>&nbsp;
          {new Date(props.result.last_file_date).toLocaleDateString()}
        </Row>
      </Col>
      <a href="#" className="app-link" style={{ padding: "5px" }}>
        See financials and more
      </a>
    </Row>
  );
}

export default ExpandedRow;
