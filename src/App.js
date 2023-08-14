import React, { useState, useEffect } from "react";
import ProtectedRoute from './Components/ProtectedRoute'
import RegistrationPage from "./Components/registrationPage/RegistrationPage";
import PDFUploadPage from "./Components/pdfUploadPage/PdfUploadPage";
import UnloadingPage from "./Components/unloadingPage/UnloadingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { userAuthorize } from './services/actions/user'
import "./App.css";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userAuthorize())
  }, [dispatch])  

  const { isInitRequested } = useSelector(store => store.user)
  
  return (
    <>
      {isInitRequested && (
        <Router>
          <Routes>
            <Route path="/" element={
              <ProtectedRoute onlyNonAuth={true}>
                <RegistrationPage/>
              </ProtectedRoute>
            }/>
            <Route path="/admin/upload" element={
              <ProtectedRoute onlyAuth={true}>
                <PDFUploadPage/>
              </ProtectedRoute>
            }/>
            <Route path="/admin/export" element={
              <ProtectedRoute onlyAuth={true}>
                <UnloadingPage />
              </ProtectedRoute>
            }/>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
