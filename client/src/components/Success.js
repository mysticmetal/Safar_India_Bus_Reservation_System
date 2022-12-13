import React from "react";

import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <main className="container success-sec">
        <img src="img/success.png" alt="ticket Confirmed" />
        <h2>Your Ticket is Confirmed</h2>
        <p>
          Further Journey Details Will be Sent to Your Email and MobileNo
        </p>
        <p>Stay
          Connected ...</p>

        <Link to="/getticket" className="home-btn">
         VIEW TICKET
        </Link>
        <Link to="/" className="home-btn">
          BACK TO HOMEPAGE
        </Link>
      </main>
    </>
  );
};

export default Success;
