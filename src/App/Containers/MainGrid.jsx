import React, { Component } from "react";
import { connect } from "react-redux";

import { setDeviceStatus } from "../Actions/systemActions";
import ContentContainer from "./ContentContainer";

class MainGrid extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.debouncedResizeHandler);
    this.debouncedResizeHandler();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debouncedResizeHandler);
    if (this.resizeTimer) clearInterval(this.resizeTimer);
  }

  debouncedResizeHandler = () => {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.resizeHandler();
      }, 1000);
    } else {
      this.resizeTimer = setTimeout(() => {
        this.resizeHandler();
      }, 1000);
    }
  };

  resizeHandler = () => {
    const { setDeviceisMobile } = this.props;

    if (window.innerWidth < 1024) {
      setDeviceisMobile(true);
    } else {
      setDeviceisMobile(false);
    }
  };

  render() {
    return (
      <div className="main-grid">
        <ContentContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDeviceisMobile: mobile => dispatch(setDeviceStatus(mobile)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MainGrid);
