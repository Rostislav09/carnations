import logo from "../../resources/mainpage/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ onLogin }) => {
  return (
    <div className="headerContainer container">
      <div className="row">
        <div className={`col-md-6 logoStart`}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={`col-md-6 buttonEnd`}>
          <Link to="/registration">
            <button className="login">LOG IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
