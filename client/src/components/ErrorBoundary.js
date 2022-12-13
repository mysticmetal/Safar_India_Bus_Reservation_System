import React from "react";

import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
      <main className="container error-sec">
        <img src="/img/404.png" alt="error occured" />
        <center><p >!!!!!!!  Do not Refresh page or press Back button While Using Website.  </p></center>
        <Link to="/" className="home-btn">
          BACK TO HOMEPAGE
        </Link>
      </main>
    </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;