import React from "react";
import { Alert } from "react-bootstrap";

const AppAlert = props => {
  const { childText, variant } = props;

  return <Alert variant={variant}>{childText}</Alert>;
};

export default AppAlert;
