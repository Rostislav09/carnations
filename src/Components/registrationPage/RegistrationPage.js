import React, { useState } from "react";
import { userLogin } from '../../services/actions/user'
import { useSelector, useDispatch } from 'react-redux'
import "./RegistrationPage.css";
import logo from "../../resources/mainpage/logo@2x.png";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const dispatch = useDispatch()
  const { loginFailed } = useSelector(store => store.user)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault()
    dispatch(userLogin({ username, password }))
  }

  // if (isRegistered) {
  //   return (
  //     <div className="registration-page">
  //       <div className="container h-100">
  //         <div className="row h-100 align-items-center justify-content-center">
  //           <div className="col-md-4">
  //             <div className="registration-form">
  //               <p>Login Successful!</p>
  //               <Link
  //                 className="work-link-beforeRegistration"
  //                 to="/pdfuploadpage"
  //               >
  //                 Let's work!
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="registration-page">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-md-4">
            <div className="registration-form">
              <img className="registration-logo" src={logo} alt="logo" />
              <form>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-login" onClick={handleRegistration}>
                  LOG IN
                </button>
                {loginFailed && <p><br/>Log in error</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
