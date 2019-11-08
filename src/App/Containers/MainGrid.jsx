import React, { Component } from "react";
import { connect } from "react-redux";

import { getApiErrors } from "../Selectors/systemSelectors";
import { setDeviceStatus } from "../Actions/systemActions";
import ContentContainer from "./ContentContainer";

class MainGrid extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.debouncedResizeHandler);
    this.debouncedResizeHandler();
  }

  componentDidUpdate() {
    const { apiErrors } = this.props;
    // bubble up error boundary, bad practice?
    if (apiErrors) throw new Error("FEC API Connection Error");
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

const mapStateToProps = state => {
  return {
    apiErrors: getApiErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDeviceisMobile: mobile => dispatch(setDeviceStatus(mobile)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainGrid);
