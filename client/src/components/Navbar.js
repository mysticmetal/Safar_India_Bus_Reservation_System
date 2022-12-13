import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const navToggle = () => {
    document.querySelector("header").classList.toggle("active");
  };

  return (
    <>
      <header className="header ">
        <div className="container ">
          <img src="/img/logo.png" alt="navbar page" className="logo" />
          <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <Link className="navbar-link" to="/">
                  <i className="fa-solid fa-magnifying-glass" />
                  <span>Book Ticket</span>
                </Link>
              </li>
              <li>
                <Link className="navbar-link" to="/getticket">
                  <i className="fa-solid fa-ticket" />
                  <span>Get Ticket</span>
                </Link>
              </li>
              <li>
                <Link className="navbar-link" to="/reschedule">
                  <i className="fa-solid fa-rotate-left" />
                  <span>Reschedule Ticket</span>
                </Link>
              </li>
              <li>
                <Link className="navbar-link" to="/cancel">
                  <i className="fa-solid fa-ban" />
                  <span>Cancel Ticket</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mobile-navbar-btn" onClick={navToggle}>
            <i className="fa-solid fa-bars mobile-nav-icon" name="fa-bars" />
            <i className="fa-solid fa-xmark mobile-nav-icon" name="fa-xmark" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
