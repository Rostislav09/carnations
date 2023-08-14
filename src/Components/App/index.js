import React, { useState, useEffect } from "react";
import ProtectedRoute from '../../components/ProtectedRoute'
import RegistrationPage from "../../components/RegistrationPage";
import PDFUploadPage from "../../components/PdfUploadPage";
import UnloadingPage from "../../components/UnloadingPage";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { userAuthorize } from '../../services/actions/user'
import "./style.css";

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
            <Route path='*' element={<Navigate to={{pathname: '/'}} />} />
            <Route path="/" element={
              <ProtectedRoute onlyNonAuth={true}>
                <RegistrationPage/>
              </ProtectedRoute>
            }/>
            <Route path="/admin/car-max/upload" element={
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

export default App