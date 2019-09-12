import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <div
      className="loader-container"
      style={{ textAlign: "center", padding: "10px" }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
