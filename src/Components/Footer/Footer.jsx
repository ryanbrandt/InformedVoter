import React from "react";

import "./Footer.css";

export const Footer = props => {
  const { mobile } = props;

  return (
    <div className={mobile ? "footer" : "footer footer-desktop"}>
      <hr width="50%" />
      <small>
        <a href="#" className="app-link">
          About
        </a>
      </small>
      <small>
        <a href="#" className="app-link">
          Contact
        </a>
      </small>
      <small>
        <a href="#" className="app-link">
          FAQ
        </a>
      </small>
      <br />
      <small>Informed Voter, 2019 &copy;</small>
    </div>
  );
};

export default Footer;
