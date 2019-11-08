import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { getDeviceStatus } from "../../../Selectors/systemSelectors";
import { setActiveCandidate } from "../../../Actions/hubActions";
import { decodeStatus } from "../../../Utils/helpers";

const ExpandedRow = props => {
  const { result } = props;

  const handleClick = async e => {
    e.preventDefault();
    const { setActiveCandidate, history } = props;

    await setActiveCandidate(
      e.target.getAttribute("data-value"),
      e.target.getAttribute("data-string")
    );

    history.push("/candidate-hub");
  };

  const renderHubLink = () => {
    return (
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
        Go to Candidate Hub
      </a>
    );
  };

  const renderColumnLeft = () => {
    return (
      <>
        <Row>
          <b>Affiliation:</b>&nbsp;
          {result.party_full ? result.party_full : "N/A"}
        </Row>
        <Row>
          <b>Active Through:</b>&nbsp;
          {result.active_through ? result.active_through : "N/A"}
        </Row>
      </>
    );
  };

  const renderColumnRight = () => {
    return (
      <>
        <Row>
          <b>Status:</b>&nbsp;
          {decodeStatus(result.candidate_status)}
        </Row>
        <Row>
          <b>Last Filed:</b>&nbsp;
          {new Date(result.last_file_date).toLocaleDateString()}
        </Row>
      </>
    );
  };

  const renderRowContent = () => {
    const { mobile } = props;
    if (mobile) {
      return (
        <Col>
          {renderColumnLeft()}
          {renderColumnRight()}
          <Row>{renderHubLink()}</Row>
        </Col>
      );
    }

    return (
      <>
        <Col>{renderColumnLeft()}</Col>
        <Col>{renderColumnRight()}</Col>
        {renderHubLink()}
      </>
    );
  };

  return (
    <Row
      className="expanded-content"
      style={{ padding: "10px", textAlign: "center" }}
    >
      {renderRowContent()}
    </Row>
  );
};

const mapStateToProps = state => ({
  mobile: getDeviceStatus(state),
});

const mapDispatchToProps = dispatch => ({
  setActiveCandidate: (id, candidate) =>
    dispatch(setActiveCandidate(id, candidate)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExpandedRow)
);
