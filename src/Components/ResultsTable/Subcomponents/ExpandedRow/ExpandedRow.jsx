import React from "react";

function ExpandedRow(props) {
  return (
    <div className="expanded-content" style={{ padding: "10px" }}>
      <strong>Affiliation: </strong>
      {props.result.party_full}
    </div>
  );
}

export default ExpandedRow;
