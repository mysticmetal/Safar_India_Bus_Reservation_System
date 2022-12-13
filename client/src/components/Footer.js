import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper container">
        <div className="quick-link">
          <h5>ABOUT US</h5>
          <h5>POLICIES</h5>
          <h5>TERM OF USE</h5>
          <h5>FAQ</h5>
          <h5>BLOG</h5>
        </div>
        <hr />
        <div className="credit">
          <h3>@2022 All Rights Reserved</h3>
          <section className="credit">
            <h3>Register as Safar Agent</h3>
            <h3>Want to become an Operator ?</h3>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
