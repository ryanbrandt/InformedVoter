import React from "react";
import { Navbar } from "react-bootstrap";

const TopBar = props => {
  const { handleClick } = props;

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>Informed Voter</Navbar.Brand>
      <a className="app-link" href="#" onClick={() => handleClick()}>
        Contribute
      </a>
    </Navbar>
  );
};

export default TopBar;
