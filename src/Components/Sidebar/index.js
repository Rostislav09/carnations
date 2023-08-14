import React from "react";
import { userLogout } from '../../services/actions/user'
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import logo from "../../resources/mainpage/logo@2x.png";
import user from "../../resources/registration/user.png";
import "./style.css";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch()

  const handlerLogOut = (e) => {
    e.preventDefault()
    dispatch(userLogout())
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar-tabs">
        <Link
          to="/admin/upload"
          className={`btn ${
            location.pathname === "/admin/upload" ? "active" : ""
          }`}
        >
          CarMax Parser
        </Link>
        <Link
          to="/admin/export"
          className={`btn ${
            location.pathname === "/admin/export" ? "active" : ""
          }`}
        >
          Export PDF
        </Link>
      </div>
      <div className="sidebar-bottom">
        <div
          className='btn'
          onClick={handlerLogOut}
        >
          Log out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
