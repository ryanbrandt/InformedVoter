import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { setActiveCandidate } from "../../../Actions/hubActions";
import { decodeStatus } from "../../../Utils/helpers";

const ExpandedRow = props => {
  const handleClick = async e => {
    e.preventDefault();
    const { setActiveCandidate, history } = props;

    await setActiveCandidate(
      e.target.getAttribute("data-value"),
      e.target.getAttribute("data-string")
    );

    history.push("/candidate-hub");
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
        See the full data
      </a>
    </Row>
  );
};

const mapDispatchToProps = dispatch => ({
  setActiveCandidate: (id, candidate) =>
    dispatch(setActiveCandidate(id, candidate)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ExpandedRow)
);
