import React, { useState } from "react";
import MainPage from "./Сomponents/mainPage/MainPage";
import RegistrationPage from "./Сomponents/registrationPage/RegistrationPage";
import PDFUploadPage from "./Сomponents/pdfUploadPage/PdfUploadPage"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage onLogin={handleLogin} />} />
        <Route
          path="/registration"
          element={<RegistrationPage onRegistration={handleRegistration} />}
        />
        <Route
          path="/pdfuploadpage"
          element={<PDFUploadPage isRegistered={isRegistered} />}
        />
      </Routes>
    </Router>
  );
}

export default App;