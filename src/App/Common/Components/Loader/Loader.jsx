import React from "react";
import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <div
      className="loader-container"
      style={{ textAlign: "center", padding: "10px" }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
