import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../resources/mainpage/logo.png'
import user from '../../resources/registration/user.png'
import "./HeaderPdf.css";

const HeaderPdf = () => {
  const location = useLocation();

  return (
    <div className="headerContainer container">
      <div className="row">
        <div className="col-md-6 logoStart">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="col-md-6 buttonEnd">
          <Link
            to="/pdfuploadpage"
            className={`btn ${location.pathname === '/pdfuploadpage' ? 'active' : ''}`}
          >
            ADD PDF
          </Link>
          <Link
            to="/unloading"
            className={`btn ${location.pathname === '/unloading' ? 'active' : ''}`}
          >
            UNLOADING
          </Link>
          <Link
            to="/"
            className={`btn ${location.pathname === '/' ? 'active' : ''}`}
          > 
            <img className="user-icon" src={user} alt="user"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderPdf;


