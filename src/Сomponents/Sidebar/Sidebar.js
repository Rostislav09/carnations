import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../resources/mainpage/logo@2x.png";
import user from "../../resources/registration/user.png";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar-tabs">
        <Link
          to="/"
          className={`btn ${location.pathname === "/" ? "active" : ""}`}
        >
          <img className="user-icon" src={user} alt="user" />
        </Link>
        <Link
          to="/pdfuploadpage"
          className={`btn ${
            location.pathname === "/pdfuploadpage" ? "active" : ""
          }`}
        >
          ADD PDF
        </Link>
        <Link
          to="/unloading"
          className={`btn ${
            location.pathname === "/unloading" ? "active" : ""
          }`}
        >
          UNLOADING
        </Link>
      </div>
      <div className="sidebar-bottom">
        <Link
          to="/exit"
          className={`btn ${location.pathname === "/exit" ? "active" : ""}`}
        >
          EXIT
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
