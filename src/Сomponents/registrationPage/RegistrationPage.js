import React, { useState } from "react";
import "./RegistrationPage.css";
import logo from "../../resources/mainpage/logo@2x.png";
import { Link } from "react-router-dom";

const RegistrationPage = ({ onRegistration }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    // Простая имитация регистрации
    // запрос к серверу для регистрации
    // Вместо console.log можно выполнять необходимые действия, например, отправку данных на сервер
    console.log("Registering user:", username, password);

    // Установить состояние "зарегистрирован" в true
    setIsRegistered(true);

    // Вызываем onRegistration, чтобы перейти на следующую страницу
    onRegistration();
  };

  if (isRegistered) {
    return (
      <div className="registration-page">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-md-4">
              <div className="registration-form">
                <p>Login Successful!</p>
                <Link
                  className="work-link-beforeRegistration"
                  to="/pdfuploadpage"
                >
                  Let's work!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
