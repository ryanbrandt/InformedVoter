import React, { Component } from "react";

import Countdown from "./Countdown";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // maybe post this data somewhere?
    console.log(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className="error-boundary">
          <h1>An Error has Occured</h1>
          <p className="app-text-info">
            Looks like we're having trouble reaching the Federal Election
            Commitee API.
          </p>
          <p className="app-text-info">
            Unfortunately, we can't furnish any data without access to this 3rd
            party service.
          </p>
          <p className="app-text-info">We will retry in:</p>
          <Countdown initialCount={20} />
          <p className="app-text-info">
            Or you can manually refresh your browser
          </p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
