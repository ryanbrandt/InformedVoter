import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import DetailContainer from "../DetailContainer/DetailContainer";
import ContentContainer from "../ContentContainer/ContentContainer";

import "./MainGrid.css";

export default class MainGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      collapsed: true,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.debounceResize);
    this.debounceResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceResize);
    if (this.resizeTimer) clearInterval(this.resizeTimer);
  }

  debounceResize = () => {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.resizeHandler();
      }, 100);
    } else {
      this.resizeTimer = setTimeout(() => {
        this.resizeHandler();
      }, 100);
    }
  };

  resizeHandler = () => {
    if (window.innerHeight < 768 || window.innerWidth < 1024) {
      this.setState({
        mobile: true,
      });
    } else {
      this.setState({
        mobile: false,
      });
    }
  };

  toggleCollapse = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  renderGrid() {
    const { mobile, collapsed } = this.state;
    if (mobile) {
      return (
        <div className="row-grid">
          <i
            className="fa fa-bars fa-2x"
            onClick={() => this.toggleCollapse()}
          />
          <Row className={collapsed ? "detail-row collapsed" : "detail-row"}>
            <DetailContainer mobile={mobile} />
          </Row>
          <hr />
          <Row className="content-row">
            <ContentContainer mobile={mobile} />
          </Row>
        </div>
      );
    }

    return (
      <Row className="col-grid">
        <Col className="detail-col">
          <DetailContainer mobile={mobile} />
        </Col>
        <Col xs={8} className="content-col">
          <ContentContainer mobile={mobile} />
        </Col>
      </Row>
    );
  }

  render() {
    return <div className="main-grid">{this.renderGrid()}</div>;
  }
}
