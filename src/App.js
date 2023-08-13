import React, { useState } from "react";

import RegistrationPage from "./Сomponents/registrationPage/RegistrationPage";
import PDFUploadPage from "./Сomponents/pdfUploadPage/PdfUploadPage";
import UnloadingPage from "./Сomponents/unloadingPage/UnloadingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<RegistrationPage onRegistration={handleRegistration} />}
        />
        <Route path="/pdfuploadpage" element={<PDFUploadPage />} />
        <Route path="/unloading" element={<UnloadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
