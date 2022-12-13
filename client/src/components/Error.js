import React from "react";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="container error-sec">
        <img src="img/404.png" alt="error occured" />
        <Link to="/" className="home-btn">
          BACK TO HOMEPAGE
        </Link>
      </main>
    </>
  );
};

export default Error;
