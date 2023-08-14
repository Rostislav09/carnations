import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { pdfUpload } from '../../services/actions/pdf'
import Sidebar from "../Sidebar";
import pdflogo from "../../resources/pdf/download.png";
import "./style.css";

const PDFUploadPage = () => {
  const dispatch = useDispatch()
  const { pdfUploadStart, pdfUploadSuccess, pdfUploadError } = useSelector(store => store.pdf)
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadedFileName(event.target.files[0]?.name || null);
  };

  const handleButtonClick = () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("file", selectedFile);
    dispatch(pdfUpload(formData))
  };

  return (
    <div className="pdf-upload-page">
      <Sidebar />
      <div className="content">
        <div className="centered-container">
          {pdfUploadStart && (
            <div className="alert alert-primary">Uploading and parsing...</div>
          )}

          {!pdfUploadStart && (
            <div className="file-upload-container">
              <label className="file-input-label">
                <div className="file-input-container">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="file-input"
                  />
                  <img src={pdflogo} alt="download" className="file-input-icon" />
                </div>
                {uploadedFileName && (
                  <div className="file-info">
                    <p>Selected: {uploadedFileName}</p>
                  </div>
                )}
              </label>
              <button
                className="btn btn-lg btn-unloading"
                onClick={handleButtonClick}
              >
                Parse
              </button>

              {pdfUploadError && (
                <>
                  <br/>
                  <br/>
                  <div className="alert alert-danger">Parsing error</div>
                </>
              )}              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFUploadPage;
