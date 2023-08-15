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
          to="/admin/car-max/upload"
          className={`btn ${
            location.pathname === "/admin/car-max/upload" ? "active" : ""
          }`}
        >
          CarMax PDF Parser
        </Link>
        <Link
          to="/admin/car-max/export"
          className={`btn ${
            location.pathname === "/admin/car-max/export" ? "active" : ""
          }`}
        >
          CarMax PDF Export
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
