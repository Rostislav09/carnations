import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p>Privacy Policy</p>
          </div>
          <div className="col-md-3">
            <p>Correct use</p>
          </div>
          <div className="col-md-3">
            <p>Contract offer</p>
          </div>
          <div className="col-md-3 text-md-right">
            <p>America<br/>Car Nation <br/>2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
