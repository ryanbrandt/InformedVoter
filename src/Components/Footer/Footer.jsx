/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className={this.props.mobile ? "footer" : "footer footer-desktop"}>
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
  }
}
